const { configure, getLogger } = require('log4js');
const config = require('../config/config');

configure({
  appenders: {
    console: {
      type: 'console',
    },
    app: {
      type: 'dateFile',
      filename: config.APP_LOG_PATH,
      pattern: 'yyyy-MM-dd',
      keepFileExt: true,
      maxLogSize: 30 * 1024 * 1024,
      // daysToKeep: 30,
      alwaysIncludePattern: true,
    }
  },
  categories: { 
    default: { appenders: [ 'app', 'console' ], level: 'All' },
    // app: { appenders: ['app', 'console'], level: 'Debug' },
  }
});

class GameLogger
{
  constructor(LogName)
  {
    return getLogger(LogName ?? 'default');
  }
}

module.exports = GameLogger;