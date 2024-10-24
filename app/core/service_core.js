'use strict';

const GameLogger = require("../../utils/logger");
const { Logger } = require('log4js');

class CoreService {
  _delay = 1;
  /**@type Logger */
  logger;

  constructor() {
    this.logger = new GameLogger(this.constructor.name ?? 'default');
  }

  async Init(data) {

  }

  SetDelay(val) {
    this._delay = val ?? 1;
  }

  GetDelay() {
    return this._delay;
  }

  UpdateItemById(items, newItem, type) {
    for (let i = 0; i < items.length; i++) {
      if (items[i][type] === newItem[type]) {
        for (let key in newItem) {
          if (newItem.hasOwnProperty(key)) {
            items[i][key] = newItem[key];
          }
        }
        break;
      }
    }
  }
}

module.exports = CoreService;