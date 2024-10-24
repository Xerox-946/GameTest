'use strict'
const Execute = require('../execute-config.json');
const path = require("path");
const fs = require("fs");
const GameLogger = require("../utils/logger");
const { Logger } = require("log4js");
const ErrCode = require("./sysdata/sys_lan_err.json");

class Client {
  #SocketHandler;
  #ServiceManager;
  Seq = 1;
  OrderList = [];
  LoopOrderList = [];
  IsContinue = true;
  /**@type Logger */
  logger = new GameLogger("Index");
  constructor(socket, serviceManager, index) {
    this.clear();
    this.#ServiceManager = serviceManager;
    this.#SocketHandler = socket;
    this.Seq = 1;
    this.IsContinue = true;
    this.OrderList = Execute[index].slice();
  }

  // 初始化执行列表
  // ResetExecute() {
  //   this.OrderList = [{ "methodName": "DoTaskList", "args": ["login"] }];
  //   // this.LoopOrderList = ["PlayerAction_RollDice", "PlayerAction_DoneIndex"];
  // }

  DevAddCoin(type, num) {
    const api = { Cmd: 'dev.devAddCoin', Params: { "Type": type, "Num": num }, Describe: '增加资源' };
    this.DoTask(api, this.#ServiceManager.roleCoin.Init.bind(this.#ServiceManager.roleCoin)).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  DevFinishTrend() {
    const api = { Cmd: 'dev.devFinishTrend', Params: {}, Describe: '结束当前章节，开启下一章节' };
    this.DoTask(api, this.#ServiceManager.trendStruct.Init.bind(this.#ServiceManager.trendStruct)).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  ResetTrend() {
    const api = { Cmd: 'dev.resetTrend', Params: {}, Describe: '重置天下布武章节信息' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  ReloadBandit(banditID) {
    const api = { Cmd: 'dev.reloadBandit', Params: { "BanditID": banditID }, Describe: '重载游荡怪物信息' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  ResetHeroCareer() {
    const api = { Cmd: 'dev.resetHeroCareer', Params: {}, Describe: '重置所有角色武将职业与武将默认职业不同的武将职业(职业解锁消耗直接移除)' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  //TODO 尚未验证
  SendSysTemMail(module, roleList, award, param) {
    const api = { Cmd: 'dev.sendSysTemMail', Params: { "Module": module, "RoleList": roleList, "Award": award, "Param": param }, Describe: '系统邮件发送' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  SendSysTemMsg(targetID, module, param, all) {
    const api = { Cmd: 'dev.sendSysTemMsg', Params: { "TargetID": targetID, "Module": module, "Param": param, "All": all }, Describe: '消息提醒发送' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  ClearChatInfo(chatType, targetID) {
    const api = { Cmd: 'dev.clearChatInfo', Params: { "ChatType": chatType, "TargetID": targetID }, Describe: '清理当前角色的指定聊天类型信息' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  DevSendChat(roleID, chatType, receiverID, groupID, message) {
    const api = { Cmd: 'dev.devSendChat', Params: { "RoleID": roleID, "ChatType": chatType, "ReceiverID": receiverID, "Message": message, "GroupID": groupID }, Describe: '聊天信息发送' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  AcceptSerial(roleID, taskSerialID) {
    const api = { Cmd: 'dev.acceptSerial', Params: { "RoleID": roleID, "TaskSerialID": taskSerialID }, Describe: '接收指定章节任务' };
    this.DoTask(api, [this.#ServiceManager.roleTaskSerial.Init.bind(this.#ServiceManager.roleTaskSerial), this.#ServiceManager.roleTask.Init.bind(this.#ServiceManager.roleTask)]).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  AcceptTask(taskID) {
    const api = { Cmd: 'dev.acceptTask', Params: { "TaskID": taskID }, Describe: '接收支线任务' };
    this.DoTask(api, this.#ServiceManager.roleTask.Init.bind(this.#ServiceManager.roleTask)).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  ClearRedis(type) {
    const api = { Cmd: 'dev.clearRedis', Params: { "Type": type }, Describe: '清理指定类型的Redis信息' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  GetRoleCityInfo() {
    const api = { Cmd: 'dev.getRoleCityInfo', Params: {}, Describe: '获取角色主城相关信息(包含一揆、村民事件信息)' };
    this.DoTask(api, this.#ServiceManager.roleCity.Init.bind(this.#ServiceManager.roleCity)).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  CityRecycle(roleID, type) {
    const api = { Cmd: 'dev.cityRecycle', Params: { "RoleID": roleID, "Type": type }, Describe: '基地回收' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  ReloadFactionSimpleInfo(factionID) {
    const api = { Cmd: 'dev.reloadFactionSimpleInfo', Params: { "FactionID": factionID }, Describe: '重载指定势力的简易结构' };
    this.DoTask(api, this.#ServiceManager.simpleStruct.UpdateInfo.bind(this.#ServiceManager.simpleStruct)).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  ReloadFactionTask(reset) {
    const api = { Cmd: 'dev.reloadFactionTask', Params: { "Reset": reset }, Describe: '重置势力章节任务' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  ResetSerial(reset) {
    const api = { Cmd: 'dev.resetSerial', Params: { "Reset": reset }, Describe: '重置章节任务' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  ReloadWorldEntity() {
    const api = { Cmd: 'dev.reloadWorldEntity', Params: {}, Describe: '重置WorldEntity数据' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  ChangeCityFaction(cityIDList, factionID) {
    const api = { Cmd: 'dev.changeCityFaction', Params: { "CityIDList": cityIDList, "FactionID": factionID }, Describe: '设置指定城市归属于指定势力' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  DevReviseFogInfo() {
    const api = { Cmd: 'dev.devReviseFogInfo', Params: {}, Describe: '修正迷雾数据的格式' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  DevFLLog(factionID, leagueID) {
    const api = { Cmd: 'dev.devFLLog', Params: { "FactionID": factionID, "LeagueID": leagueID }, Describe: '生成势力军团日志(非规范数据,所有信息使用1填充)' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  DevAddItem(roleID, itemID, num) {
    const api = { Cmd: 'dev.devAddItem', Params: { "RoleID": roleID, "ItemID": itemID, "Num": num }, Describe: '增加玩家道具' };
    this.DoTask(api, this.#ServiceManager.roleItem.Init.bind(this.#ServiceManager.roleItem)).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  DevRoleExtend() {
    const api = { Cmd: 'dev.devRoleExtend', Params: {}, Describe: '修正扩展信息(代官加成信息格式)' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  DevUpdateFence(isFull) {
    const api = { Cmd: 'dev.devUpdateFence', Params: { "IsFull": isFull }, Describe: '修改城市围城值' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  DevSettleDutyTask(onlyCampaign) {
    const api = { Cmd: 'dev.devSettleDutyTask', Params: { "OnlyCampaign": onlyCampaign }, Describe: '结算役职活动' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  DevMarch(destpos, status, delayTime) {
    const api = { Cmd: 'dev.devMarch', Params: { "DestPos": destpos, "Status": status, "DelayTime": delayTime }, Describe: '测试行军' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  DevReloadJob(jobLogID) {
    const api = { Cmd: 'dev.devReloadJob', Params: { "JobLogID": jobLogID }, Describe: '重新加载指定定时任务' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  DevPower(roleID) {
    const api = { Cmd: 'dev.devPower', Params: { "RoleID": roleID }, Describe: '重载战力' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  DevLoadCityLair(cityID) {
    const api = { Cmd: 'dev.devLoadCityLair', Params: { "CityID": cityID }, Describe: '重载指定城市的守军部队' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  DevFinishCityWar(cityID) {
    const api = { Cmd: 'dev.devFinishCityWar', Params: { "CityID": cityID }, Describe: '结束指定城市的城战并发送城战日志' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  DevRoleExpireJob() {
    const api = { Cmd: 'dev.devRoleExpireJob', Params: {}, Describe: '重新加载玩家的过期定时任务' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  DevAddEquip(equipID) {
    const api = { Cmd: 'dev.devAddEquip', Params: { "EquipID": equipID }, Describe: '增加家宝' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  DevRecruit(heroID) {
    const api = { Cmd: 'dev.devRecruit', Params: { "HeroID": heroID }, Describe: '招募指定武将' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  DevConscript(roleID, soldiers) {
    const api = { Cmd: 'dev.devConscript', Params: { "RoleID": roleID, "Soldiers": soldiers }, Describe: '征兵' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  ReloadRoleSimpleInfo(roleID) {
    const api = { Cmd: 'dev.reloadRoleSimpleInfo', Params: { "RoleID": roleID }, Describe: '重载角色的简易结构' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  ReloadLeagueSimpleInfo(leagueIDList) {
    const api = { Cmd: 'dev.reloadLeagueSimpleInfo', Params: { "LeagueIDList": leagueIDList }, Describe: '重载指定家族的简易结构' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  DevSetLockHero(roleID) {
    const api = { Cmd: 'dev.devSetLockHero', Params: { "RoleID": roleID }, Describe: '重载指定玩家的武将繁忙（委任中、上阵中等）信息' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  DevUnlockFog(roleID) {
    const api = { Cmd: 'dev.devUnlockFog', Params: { "RoleID": roleID }, Describe: '指定玩家解锁所有迷雾' };
    this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async HeartSync() {
    const api = { Cmd: 'role.heartSync', Params: {}, Describe: '心跳同步' };
    await this.DoTask(api).then(() => {
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async CityAction(status, cityID = 0) {
    var RoleArmyIDs = [];
    if (status == 12) {
      RoleArmyIDs = this.#ServiceManager.roleArmy.GetAllGuardRoleArmyIDs.bind(this.#ServiceManager.roleArmy);
    } else {
      RoleArmyIDs = this.#ServiceManager.roleArmy.GetAllRoleArmyIDs.bind(this.#ServiceManager.roleArmy);
    }
    var pos = 0;
    if (cityID == 0) {
      pos = this.#ServiceManager.GetNextAttackCity.bind(this.#ServiceManager);
    } else {
      pos = cityID * 100;
    }
    const api = { Cmd: "world.createEvents", Params: { "RoleArmyIDs": RoleArmyIDs, "DestPos": pos, "Params": { "Status": status, "Num": -1, "Back": 1, "Automatic": 0, "TargetPos": 0 } }, Describe: '创建部队调动事件' };
    await this.DoTask(api, [this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy), this.#ServiceManager.roleHero.UpdateHeroInfo.bind(this.#ServiceManager.roleHero)]).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  clear() {
    this.#SocketHandler = null;
    this.#ServiceManager = null;
  }

  async setSocketCallBack(method) {
    // 设置message回调
    if (typeof method === 'function') {
      await this.#SocketHandler.setDataUpdateCallback(this.#ServiceManager.OnDataUpdate.bind(this.#ServiceManager));
    }
  }

  async UpdateData(Cmd, Content) {
    if (await this.#ServiceManager.OnDataUpdate(Cmd, Content)) {
      this.ResetExecute();
    }
    // 如果打过了第三关，就停止
    // return await this.#ServiceManager.ConfirmWhetherToContinue()
  }

  async Execute() {
    if (this.OrderList.length === 0) {
      this.#SocketHandler.Close();
      return;
    }
    if (this.OrderList.length > 0) {
      const { methodName, args } = this.OrderList.shift();
      this.logger.debug(`${methodName} start`);
      if (typeof this[methodName] === 'function') {
        await this[methodName](...args);
      } else {
        this.logger.error(`方法 ${methodName} 不存在，跳过此任务。`);
      }
    }
    await this.Execute();
  }

  async TimedExecute(Method) {
    if (typeof this[Method] === 'function') {
      setInterval(() => {
        this[Method](1);
      }, 60000);
    }
  }

  async DoTaskList(...Script) {
    for (let index in Script) {
      this.logger.debug(`${Script[index].charAt(0).toUpperCase()}${Script[index].slice(1)}` + " start ====== " + index);
      const TaskFile = path.dirname(__dirname) + `/scripts/${Script[index]}.js`;
      try {
        const TaskList = eval(fs.readFileSync(TaskFile, "utf8"));
        for (let Task of TaskList) {
          // 使用for...of遍历数组
          const {
            Cmd,
            Params,
            Describe,
            Handler,
            ErrHandler,
            BeforeHandler,
            DelayTime,
            IsInvalid,
            Immediate
          } = Task;
          var nowInvalid = false;
          if (IsInvalid && typeof IsInvalid === "function") {
            nowInvalid = IsInvalid();
          }
          if (nowInvalid) {
            continue;
          }
          // 执行任务
          await this.DoTask(
            { Cmd, Params, Describe, Immediate },
            Handler,
            ErrHandler
          );
          await this.WaitForResponse(Cmd, DelayTime);

        }
      } catch (e) {
        this.logger.error(`执行任务失败: ${e.message}`);
      }
    }
  }

  /**
   *
   * @param {GameSocket} Socket
   * @param {*} Task
   */
  async DoTask(Task, Handler = [], ErrHandler = []) {
    this.logger.info(
      `正在执行【${Task["Describe"] != undefined && Task["Describe"].length > 0 ? Task["Describe"] : Task["Cmd"]}】... `
    );
    return new Promise((resolve, reject) => {
      Handler = Handler ?? [];
      ErrHandler = ErrHandler ?? [];
      if (Handler) {
        Handler = Array.isArray(Handler) ? Handler : [Handler];
      }
      if (ErrHandler) {
        ErrHandler = Array.isArray(ErrHandler) ? ErrHandler : [ErrHandler];
      }
      Handler.push((data) => {
        resolve(true);
      });
      ErrHandler.push((err) => {
        this.logger.error(
          `Code: ${err.Code}, Cn: ${ErrCode[err.Code] ?? "未知错误"}`,
          err
        );
        reject(false);
      });
      if (typeof Task.Params === "function") {
        this.logger.warn("Task.Params 是一个函数!!!");
        Task.Params = Task.Params();
      } else if (typeof Task.Params === "object") {
        for (let Prop in Task.Params) {
          if (typeof Task.Params[Prop] === "function") {
            Task.Params[Prop] = Task.Params[Prop]();
          } else if (Array.isArray(Task.Params[Prop])) {
            const tmp = Task.Params[Prop];
            for (let k = 0; k < tmp.length; k++) {
              if (typeof tmp[k] === "function") {
                tmp[k] = tmp[k]();
              }
            }
          } else if (typeof Task.Params[Prop] === "object") {
            for (let Prop1 in Task.Params[Prop]) {
              if (typeof Task.Params[Prop][Prop1] === "function") {
                Task.Params[Prop][Prop1] = Task.Params[Prop][Prop1]();
              } else if (Array.isArray(Task.Params[Prop][Prop1])) {
                const tmp = Task.Params[Prop][Prop1];
                for (let k = 0; k < tmp.length; k++) {
                  if (typeof tmp[k] === "function") {
                    tmp[k] = tmp[k]();
                  }
                }
              }
            }
          }
        }
      }
      this.#SocketHandler.Send(Object.assign({}, Task, { Handler, ErrHandler }));
      this.Seq++;
      if (Task.Immediate === true) {
        resolve(Task.Immediate);
      } else if (Task.Immediate === false) {
        reject(Task.Immediate);
      }
      resolve(true);
    });
  }

  async WaitForResponse(Cmd, DelayTime = 0) {
    return new Promise((resolve) => {
      // let maxWaitTimeoutId;
      const checkResponse = async () => {
        if (this.#SocketHandler._messageCode === 0) {
          if (Cmd === 'world.createEvent' || Cmd === 'world.createEvents') {
            if (!this.#ServiceManager.roleArmy.CheckArmyStatus.bind(this.#ServiceManager.roleArmy)()) {
              setTimeout(checkResponse, 50);
            } else {
              // clearTimeout(maxWaitTimeoutId);
              setTimeout(() => resolve(), 100);
            }
          } else {
            resolve();
          }
        } else {
          setTimeout(checkResponse, 50);
        }
        // if (!maxWaitTimeoutId && DelayTime > 0) {
        //   maxWaitTimeoutId = setTimeout(() => {
        //     this.#SocketHandler._messageCode === 0;
        //     resolve('Max wait time reached');
        //   }, DelayTime);
        // }
      };
      checkResponse();
    });
  }
}
module.exports = Client;
