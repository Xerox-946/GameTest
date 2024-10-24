'use strict'
const CoreService = require("../core/service_core");

class RoleSettingService extends CoreService{
  _roleSettingList = [];

  async Init(data)
  {
    if (data.hasOwnProperty('RoleSettingVo')) {
      this._roleSettingList = data.RoleSettingVo;
    }
    // this.logger.debug(JSON.stringify(this._roleSettingList));
  }

  get List() {
    return this._roleSettingList;
  }

  OneBySettingName(SettingName)
  {
    if (! Array.isArray(this._roleSettingList) || this._roleSettingList.length === 0) return;
    return this._roleSettingList.find(item => {
      return item.Name === SettingName;
    })
  }
}

module.exports = RoleSettingService;