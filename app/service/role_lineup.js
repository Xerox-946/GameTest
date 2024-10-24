'use strict'
const CoreService = require("../core/service_core");

class RoleLineupService extends CoreService{
  _roleLineupList = [];

  async Init(data)
  {
    if (data.hasOwnProperty('RoleLineupVo')) {
      this._roleLineupList = data.RoleLineupVo;
    }
    // this.logger.debug(JSON.stringify(this._roleLineupList));
  }

  get List() {
    return this._roleLineupList;
  }

  OneByLineupID(LineupID)
  {
    if (! Array.isArray(this._roleLineupList) || this._roleLineupList.length === 0) return;
    return this._roleLineupList.find(item => {
      return item.LineupID === LineupID;
    })
  }

  getRoleLineupID(LineupID){
    return this.OneByLineupID(LineupID).RoleLineupID;
  }
}

module.exports = RoleLineupService;