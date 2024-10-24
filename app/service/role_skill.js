'use strict'
const CoreService = require("../core/service_core");

class RoleSkillService extends CoreService{
  _roleSkillList = [];

  async Init(data)
  {
    if (data.hasOwnProperty('RoleSkillVo')) {
      this._roleSkillList = data.RoleSkillVo;
    }
    // this.logger.debug(JSON.stringify(this._roleSkillList));
  }

  get List() {
    return this._roleSkillList;
  }

  OneBySkillID(SkillID)
  {
    if (! Array.isArray(this._roleSkillList) || this._roleSkillList.length === 0) return;
    return this._roleSkillList.find(item => {
      return item.SkillID === SkillID;
    })
  }
}

module.exports = RoleSkillService;