'use strict'
const CoreService = require("../core/service_core");

class RoleEquipService extends CoreService{
  _roleEquipList = [];

  async Init(data)
  {
    if (data.hasOwnProperty('RoleEquipVo')) {
      this._roleEquipList = data.RoleEquipVo;
    }
    // this.logger.debug(JSON.stringify(this._roleEquipList));
  }

  get List() {
    return this._roleEquipList;
  }

  OneByEquipID(RoleEquipID)
  {
    if (! Array.isArray(this._roleEquipList) || this._roleEquipList.length === 0) return;
    return this._roleEquipList.find(item => {
      return item.RoleEquipID === RoleEquipID;
    })
  }
}

module.exports = RoleEquipService;