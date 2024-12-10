'use strict'
const CoreService = require("../core/service_core");

class RoleLotteryService extends CoreService {
  _roleLotteryList = [];

  async Init(data) {
    if (data.hasOwnProperty('RoleLotteryVo')) {
      this._roleLotteryList = data.RoleLotteryVo;
    }
    // this.logger.debug(JSON.stringify(this._roleLotteryList));
  }

  get List() {
    return this._roleLotteryList;
  }

  OneByLotteryClassID(LotteryClassID) {
    if (!Array.isArray(this._roleLotteryList) || this._roleLotteryList.length === 0) return;
    return this._roleLotteryList.find(item => {
      return item.LotteryClassID === LotteryClassID;
    })
  }

  CheckLotteryExit(LotteryClassID) {
    if (!Array.isArray(this._roleLotteryList) || this._roleLotteryList.length === 0) return true;
    return this.OneByLotteryClassID(LotteryClassID) == undefined;
  }
}

module.exports = RoleLotteryService;