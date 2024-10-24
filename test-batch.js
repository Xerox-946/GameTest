'use strict';
const game = require('./utils/game');
const userInfoPath = './test-user.json';
const list = require(userInfoPath);
const config = require('./config.json');
const GameLogger = require("./utils/logger");
const Client = require('./app/client');
const ServerManager = require('./app/service_manager');
const GameSocket = require("./app/socket");
const fs = require('fs');
const argv = process.argv.splice(2);
const GroupName = argv[0];
const TestNumStart = argv[1];
var TestNumEnd = argv[2];
const logger = new GameLogger('Main');

// 每批处理的用户数量
const batchSize = 100;

// 使用立即执行的异步函数来封装逻辑
(async () => {
  try {
    if (TestNumStart != undefined) {
      list[GroupName] = [];
      if (TestNumEnd == undefined) {
        TestNumEnd = 1;
      }
      if (Number(TestNumEnd) <= Number(TestNumStart)) {
        TestNumEnd = Number(TestNumStart) + Number(TestNumEnd) - 1;
      }
      for (let i = 0; i < TestNumEnd - TestNumStart + 1; i++) {
        list[GroupName].push(`${GroupName.charAt(0).toLowerCase()}${GroupName.slice(1)}` + Math.floor(Number(TestNumStart) + i));
      }
      logger.debug(`已成功生成${TestNumEnd - TestNumStart + 1}个用户`);
    }
    for (let batchStart = 0; batchStart < list[GroupName].length; batchStart += batchSize) {
      const batchUsers = list[GroupName].slice(batchStart, batchStart + batchSize);

      await processUserBatch(batchUsers);

      logger.info(`批次 ${Math.floor(batchStart / batchSize) + 1} 处理完成`);
    }

  } catch (err) {
    logger.error('Unexpected error:', err);
  } finally {
    if (TestNumStart != undefined) {
      fs.writeFile(userInfoPath, JSON.stringify(list, null, 2), (err) => {
        if (err) {
          logger.error('文件写入失败', err);
        } else {
          logger.debug(`成功写入${TestNumEnd - TestNumStart + 1}个用户信息到文件中.`);
        }
      });
    }
  }
})();

async function processUserBatch(batchUsers) {
  const batchUserList = [];

  for (let userName of batchUsers) {
    try {
      const response = await game.gameHttp(config.serverUrl, "role.login", `{"UserID":'${userName}'}`);
      if (response && response.Code === 0) {
        const socketAdd = response.Content.SocketAdd;
        const token = response.Content.Token;
        const User = response.Content.UserVo;
        const ws = new GameSocket(response.Content.RoleList.length > 0 ? response.Content.RoleList[0].RoleID : 0);

        // 等待 InitSocket 成功连接后再继续
        try {
          await InitSocket(ws, socketAdd, token);
          const CacheServer = new ServerManager(User);
          const Runner = new Client(ws, CacheServer);
          const TestUser = { User, token, ws, Runner };
          batchUserList.push(TestUser);
        } catch (socketError) {
          logger.error(`Socket connection failed for user ${userName}:`, socketError);
        }
      }
    } catch (e) {
      logger.error(`Failed to login for user ${userName}:`, e);
    }
  }

  // 等待所有用户连接成功后再执行逻辑
  for (let testUser of batchUserList) {
    if (testUser.Runner && testUser.ws.IsConnected) {
      // 设置 WebSocket 回调
      testUser.Runner.setSocketCallBack(async function () {
        testUser.Runner.Execute();
      });
      testUser.Runner.Execute();
    }
  }
}

async function InitSocket(Socket, Address, Token) {
  try {
    await Socket.Connect(Address, Token);
  } catch (error) {
    logger.error('WebSocket connection failed:', error);
  }
}