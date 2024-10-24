'use strict';
const game = require('./utils/game');
const userInfoPath = './test-user.json';
const list = require(userInfoPath);
const config = require('./config.json');
const Execute = require('./execute-config.json');
const GameLogger = require("./utils/logger");
const Client = require('./app/client');
const ServerManager = require('./app/service_manager');
const GameSocket = require("./app/socket");
const fs = require('fs');
const argv = process.argv.splice(2);
const executeIndex = argv[0];
const GroupName = argv[1];
const TestNumStart = argv[2];
var TestNumEnd = argv[3];
var args = [];
const UserList = [];
const logger = new GameLogger('Main');
const delay = 100; // 毫秒
const batchSize = 50; // 每批处理的数量
const minBatchSize = 10; // 最小批次
const maxBatchSize = 30; // 最大批次
const minDelay = 100; // 最小毫秒
const maxDelay = 1000; // 最大毫秒

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
        list[GroupName].push(`${GroupName}` + Math.floor(Number(TestNumStart) + i));
      }
      logger.debug(`已成功生成${TestNumEnd - TestNumStart + 1}个用户`);
    }
    for (let userName of list[GroupName]) {
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
            const Runner = new Client(ws, CacheServer, executeIndex);
            const TestUser = { User, token, ws, Runner };
            UserList.push(TestUser);
          } catch (socketError) {
            logger.error(`Socket connection failed for user ${userName}:`, socketError);
          }
        }
      } catch (e) {
        logger.error(`Failed to login for user ${userName}:`, e);
      }
    }

    // 所有连接成功后再执行后续代码
    await Execute[executeIndex].slice().forEach((item) => {
      args.push(item.methodName);
      item.args.forEach((item1) => {
        args.push(item1);
      })
    })
    if (args.includes("attackResource") || args.includes("CityAction")) {
      // for (let i = 0; i < UserList.length; i++) {
      //   const testUser = UserList[i];
      //   if (testUser.Runner && testUser.ws.IsConnected) {
      //     testUser.Runner.setSocketCallBack(async function () {
      //       testUser.Runner.Execute();
      //     });
      //     setTimeout(() => {
      //       testUser.Runner.Execute();
      //     }, Math.floor(i / batchSize) * batchSize * delay + (i % batchSize) * delay);
      //   }
      // }


      // for (let j = 0; j < UserList.length;) {
      //   // 随机生成 batchSize
      //   let randomBatchSize = Math.floor(Math.random() * (maxBatchSize - minBatchSize + 1)) + minBatchSize;
      //   // 确保 randomBatchSize 不超过剩余的用户数量
      //   if (j + randomBatchSize >= UserList.length) {
      //     randomBatchSize = UserList.length - j; // 修改为剩余的用户数量
      //   }
      //   // 随机生成 delay
      //   const randomDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
      //   for (let i = 0; i < randomBatchSize; i++) {
      //     const testUser = UserList[j + i];
      //     if (testUser.Runner && testUser.ws.IsConnected) {
      //       testUser.Runner.setSocketCallBack(async function () {
      //         testUser.Runner.Execute();
      //       });
      //       // 设置延迟执行
      //       setTimeout(() => {
      //         testUser.Runner.Execute();
      //       }, Math.floor((j + i) / randomBatchSize) * randomBatchSize * randomDelay + ((j + i) % randomBatchSize) * randomDelay);
      //     }
      //   }
      //   // 更新 j 以跳过已处理的用户
      //   j += randomBatchSize;
      // }

      var totalTime = 0;
      for (let j = 0; j < UserList.length;) {
        const randomDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
        const testUser = UserList[j];
        totalTime += randomDelay;
        if (testUser.Runner && testUser.ws.IsConnected) {
          testUser.Runner.setSocketCallBack(async function () {
            testUser.Runner.Execute();
          });
          // 设置延迟执行
          setTimeout(() => {
            testUser.Runner.Execute();
          }, totalTime);
        }
        // 更新 j 以跳过已处理的用户
        j += 1;
      }


      // let currentBatchIndex = 0;
      // const executeNextBatch = () => {
      //     const currentBatchSize = Math.min(batchSize, UserList.length - currentBatchIndex);
      //     for (let i = 0; i < currentBatchSize; i++) {
      //         const testUser = UserList[currentBatchIndex + i];
      //         if (testUser.Runner && testUser.ws.IsConnected) {
      //             testUser.Runner.setSocketCallBack(async function () {
      //                 testUser.Runner.Execute();
      //             });
      //             testUser.Runner.Execute();
      //         }
      //     }
      //     currentBatchIndex += currentBatchSize;
      //     // 如果还有更多用户，设置下一个批次的延迟执行
      //     if (currentBatchIndex < UserList.length) {
      //         setTimeout(executeNextBatch, delay);
      //     }
      // };
      // executeNextBatch(); // 启动执行

    } else {
      for (let testUser of UserList) {
        if (testUser.Runner && testUser.ws.IsConnected) {
          testUser.Runner.setSocketCallBack(async function () {
            testUser.Runner.Execute();
          });
          testUser.Runner.Execute();
        }
      }
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

async function InitSocket(Socket, Address, Token) {
  try {
    await Socket.Connect(Address, Token);
  } catch (error) {
    logger.error('WebSocket connection failed:', error);
  }
}
