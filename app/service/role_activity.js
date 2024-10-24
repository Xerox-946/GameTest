'use strict'
const CoreService = require("../core/service_core");

class RoleActivityService extends CoreService{
  _roleActivityList = [];

  async Init(data)
  {
    if (data.hasOwnProperty('RoleActivityVo')) {
      this._roleActivityList = data.RoleActivityVo;
    }
    // this.logger.debug(JSON.stringify(this._roleActivityList));
  }

  get List() {
    return this._roleActivityList;
  }

  OneByActivityID(ActivityID)
  {
    if (! Array.isArray(this._roleActivityList) || this._roleActivityList.length === 0) return;
    return this._roleActivityList.find(item => {
      return item.ActivityID === ActivityID;
    })
  }
}

module.exports = RoleActivityService;