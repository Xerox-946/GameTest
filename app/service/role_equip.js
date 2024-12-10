'use strict'
const CoreService = require("../core/service_core");

class RoleEquipService extends CoreService {
  _roleEquipList = [];

  async Init(data) {
    if (data.hasOwnProperty('RoleEquipVo')) {
      this._roleEquipList = data.RoleEquipVo;
    }
    // this.logger.debug(JSON.stringify(this._roleEquipList));
  }

  get List() {
    return this._roleEquipList;
  }

  OneByEquipID(EquipID) {
    if (!Array.isArray(this._roleEquipList) || this._roleEquipList.length === 0) return;
    return this._roleEquipList.find(item => {
      return item.EquipID === EquipID;
    })
  }

  GetRoleEquipID(EquipID) {
    return this.OneByEquipID(EquipID).RoleEquipID;
  }

  AddEquipInfo(data) {
    if (data.hasOwnProperty('RoleEquipVo')) {
      if (Array.isArray(data.RoleEquipVo)) {
        for (let roleEquip of data.RoleEquipVo) {
          this._roleEquipList.push(roleEquip);
        }
      } else {
        this._roleEquipList.push(data.RoleEquipVo);
      }
    }
    // this.logger.debug(JSON.stringify(this._roleHeroList));
  }
}

module.exports = RoleEquipService;