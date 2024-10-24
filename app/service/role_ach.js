'use strict'
const CoreService = require("../core/service_core");

class RoleAchService extends CoreService{
  _roleAchList = [];

  async Init(data)
  {
    if (data.hasOwnProperty('RoleAchVo')) {
      this._roleAchList = data.RoleAchVo;
    }
    // this.logger.debug(JSON.stringify(this._roleAchList));
  }

  get List() {
    return this._roleAchList;
  }

  OneByAchID(SysAchID)
  {
    if (! Array.isArray(this._roleAchList) || this._roleAchList.length === 0) return;
    return this._roleAchList.find(item => {
      return item.SysAchID === SysAchID;
    })
  }
}

module.exports = RoleAchService;