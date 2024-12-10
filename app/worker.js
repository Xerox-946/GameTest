'use strict';

const { isMainThread, parentPort } = require('worker_threads');
const GameLogger = require('../utils/logger');
const { Logger } = require('log4js');

if (! isMainThread) {

  /**@type Logger */
  const logger = new GameLogger('Thread');

  parentPort.on('message', data => {
    const IsInited = data.IsInited ?? false;
    if (IsInited) {
      parentPort.postMessage({ IsReady: true });
    } else {
      setTimeout(() => {
        logger.info('来自main的消息：', data);
        parentPort.postMessage({ Done: true });
      }, (data.Delay ?? 1) * 1000);
    }
  })
}
