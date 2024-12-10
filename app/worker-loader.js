'use strict';

const workerpool = require('workerpool');
const GameLogger = require('../utils/logger');
const logger = new GameLogger('Thread');

// 添加计算函数到worker池中
workerpool.worker({
  wait: async function (data) {
    return new Promise(resolve => {
      if (data.Delay == 0) {
        workerpool.workerEmit({ status: true });
        resolve();
      }
      let timer = setTimeout(() => {
        logger.info('wait来自main的消息：', data);
        clearTimeout(timer);
        workerpool.workerEmit({ status: true });
        resolve();
      }, (data.Delay ?? 1) * 1000);
    })
  },
});