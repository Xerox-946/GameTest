'use strict'
const CoreService = require("../core/service_core");

const RoleArmyService = require('./role_army');

class FightNoticeService extends CoreService {
  _wrID = 0;
  roleArmy = new RoleArmyService;

  async Init(data) {
    if (this._wrID != 0) return;
    if (data.hasOwnProperty('FightNoticeVo')) {
      if(data.FightNoticeService.RoleArmyID==this.roleArmy.RoleArmyID){
        this._wrID = data.FightNoticeService.WRID;
      }
    }
    // this.logger.debug(JSON.stringify(this._fightNoticeList));
  }

  GetWRID() {
    return this._wrID;
  }
}

module.exports = FightNoticeService;