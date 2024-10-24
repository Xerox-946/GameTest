const WebSocket = require('ws');
const { API_ROOT } = require('../config/config');
const GameLogger = require('../utils/logger');

/**@type Logger */
const logger = new GameLogger('GameSocket');

class GameSocket {
  _webSocket;
  _address;
  _token;
  _succHandlers;
  _errHandlers;
  _sequece;
  _seed;
  _messageCode;
  _defaultErrHandle;
  _dataHandle;
  _requestTimestamps;
  _responseTimes;
  _dataUpdateHandler;

  constructor(Seed) {
    this._webSocket = undefined;
    this._sequece = 0;
    this._messageCode = undefined;
    this._seed = Seed;
    this._responseTimes = { 0: 0 };
    this._requestTimestamps = new Map();
    this._dataUpdateHandler = async () => { };

    process.on('SIGINT', () => {
      logger.warn(`捕获到 SIGINT (Ctrl+C)，准备断开 WebSocket 连接...`);
      this.Close();
      process.exit();
    });
  }

  async Connect(Address, Token) {
    this._address = Address ?? API_ROOT;
    this._token = Token;
    this._succHandlers = new Map();
    this._errHandlers = new Map();

    if (Token) {
      const Socket = this._webSocket = new WebSocket(Address + "?frameType=Text", Token);

      logger.info(`WebSocket Address is "${this._address}"`);

      return new Promise((resolve, reject) => {
        Socket.onopen = () => {
          this.OnOpen().then(() => {
            resolve();
          }).catch((err) => {
            reject(err);
          });
        };
        Socket.onerror = (error) => {
          this.OnError.bind(this);
          reject(error);
        };
        Socket.onclose = () => {
          logger.warn("WebSocket connection closed ===== " + this._seed);
          this.OnDestroy();
        };
        Socket.onmessage = async (e) => {
          await this.OnMessage(e);
        };
      });
    }
  }

  Close() {
    logger.warn("主动关闭Socket连接");
    this._isReconnect = false;
    // this._webSocket.close();
    this.OnDestroy();
  }

  async OnOpen(res) {
    if (this._seed == 0 || this._seed == undefined) {
      await this.SendLoginOrRegister();
    }
    logger.debug(this._seed + '   WebSocket已连接');
  }

  OnClose(err) {
    logger.debug('Socket连接已断开');
    // 异地登录等情况下不自动重连
    if ([101, 10024].includes(this._messageCode)) {
      // AccountManager.Logout(this._messageCode);
      return;
    } else if (err == 'transport close') {
      // 网络不稳定
      return;
    }
  }

  OnError(err) {
    logger.error('发生Socket错误', err);
    if ([101].includes(this._messageCode)) {
      return;
    }
  }

  async OnMessage(e) {
    const data = JSON.parse(e.data);
    if (typeof data !== 'object' || Array.isArray(data)) return;
    if (!data.hasOwnProperty('Seq') || data.Seq === 0) {
      let msg = JSON.stringify(data);
      // //返回部队状态
      // if (data.Content.hasOwnProperty('RoleArmyVo')) {
      //   logger.warn(JSON.stringify(data.Content.RoleArmyVo));
      // }
      if (msg.length > 100) {
        msg = msg.slice(0, 50) + '...' + msg.slice(msg.length - 50);
      }
      // logger.info(this._seed + "  服务器推送消息: ", msg);
      if (data.Cmd && data.Cmd.length > 0) {
        await this._dataUpdateHandler(data.Cmd, data.Content);
      }
      return;
    }
    if (data.Seq > 0) {
      const requestTimestamp = this._requestTimestamps.get(data.Seq);
      const responseTime = Date.now() - requestTimestamp;

      // 可以在这里打印或记录到日志
      logger.info(`Response for seq ${data.Seq} took ${responseTime} ms`);

      this._responseTimes[data.Seq] = responseTime;
      this._responseTimes[0] += responseTime;
      // 清理时间戳
      this._requestTimestamps.delete(data.Seq);
    }
    this._messageCode = data.Code;
    if (data.Code === 0) {
      let _succHandle = this._succHandlers.get(data.Seq);
      if (_succHandle) {
        if (Array.isArray(_succHandle)) {
          for (let _handle of _succHandle) {
            await _handle(data.Content);
          }
        } else {
          await _succHandle(data.Content);
        }
      }
      if ((this._seed == 0 || this._seed == undefined) && data.Content.hasOwnProperty('RoleVo') && data.Content.RoleVo.hasOwnProperty('RoleID')) {
        this._seed = data.Content.RoleVo.RoleID;
      }
      logger.info(`【${data.Cmd}】执行成功 ====== ` + this._seed);
      if (data.Cmd && data.Cmd.length > 0) {
        await this._dataUpdateHandler(data.Cmd, data.Content);
      }
    } else if (data.Code === 401) { // Token不正确
      logger.fatal(`Token 不正确!`);
    } else if (data.Code === 20014) {
      this.SendLoginOrRegister();
    } else if (data.Code === 48074) {
      logger.error(`【${data.Cmd}】执行不成功! ====== ` + this._seed);
    } else {
      logger.error(`【${data.Cmd}】执行不成功! ====== ` + this._seed);
      if (data.Cmd == 'world.createEvent') {
        this.Close();
      }
      let _errHandle = this._errHandlers.get(data.Seq);
      if (_errHandle) {
        if (Array.isArray(_errHandle)) {
          for (let _handle of _errHandle) {
            await _handle(data);
          }
        } else {
          _handle(data);
        }
      } else {
        this._defaultErrHandle(data);
      }
    }
    if (data.Seq > 0) {
      this._succHandlers.delete(data.Seq);
      this._errHandlers.delete(data.Seq);
    }
  }

  async Send({ Cmd, Params, Handler, ErrHandler }) {
    this._sequece++;
    const PureMessage = {
      Cmd,
      Seq: this._sequece,
      Params,
      Seed: this._seed
    };
    const Message = this._lastestMessage = PureMessage;
    const timestamp = Date.now();
    this._requestTimestamps.set(this._sequece, timestamp);
    if (this._webSocket && this._webSocket.readyState === 1) {
      logger.info(`Sending: `, JSON.stringify(PureMessage));
      if (Handler) this._succHandlers.set(this._sequece, Handler);
      if (ErrHandler) this._errHandlers.set(this._sequece, ErrHandler);
      this._webSocket.send(JSON.stringify(Message));
      this._messageCode = 7;
    } else {
      logger.warn('Try to Reconnect ... ');
    }
  }

  async SendLoginOrRegister() {
    if (this._webSocket && this._webSocket.readyState === 1) {
      // const api = { Cmd: 'role.roleLogin', Params: { "FactionID": Math.floor(Math.random() * 6) + 1 }, Describe: '角色创建或登录' };
      const api = { Cmd: 'role.roleLogin', Params: { "FactionID": 1 }, Describe: '角色创建或登录' };
      logger.info(
        `正在执行【${api.Describe.length > 0 ? api.Describe : api.Cmd}】... `
      );
      this.Send(api);
    }
  }

  OnDestroy() {
    if (this._webSocket) {
      this._webSocket.close();
      this._webSocket = undefined;
    }
  }

  get IsConnected() {
    // if (! this._webSocket) {
    //   return false;
    // }
    return this._webSocket && this._webSocket.readyState === 1;
  }

  // 获取特定seq的响应时间,seq = 0时获取响应时间总和
  getResponseTime(seq) {
    return seq === 0 ? this._responseTimes[seq] : this._responseTimes[this._sequece];
  }

  // 获取特定seq的响应时间,seq = 0时获取响应时间总和
  getResponseTimesCount() {
    const size = this._responseTimes[0] ? Object.keys(this._responseTimes).length - 1 : Object.keys(this._responseTimes).length;
    return size;
  }

  async setDataUpdateCallback(Handler) {
    if (typeof Handler === 'function') {
      this._dataUpdateHandler = Handler;
    }
  }
}

module.exports = GameSocket;