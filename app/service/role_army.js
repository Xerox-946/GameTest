'use strict'
const CoreService = require("../core/service_core");

class RoleArmyService extends CoreService {
  _roleArmyList = [];

  async Init(data) {
    if (data.hasOwnProperty('RoleArmyVo')) {
      this._roleArmyList = data.RoleArmyVo;
    }
    // this.logger.debug(JSON.stringify(this._roleArmyList));
  }

  get List() {
    return this._roleArmyList;
  }

  OneByArmyClass(ArmyClass) {
    if (!Array.isArray(this.List) || this.List.length === 0) return;
    return this.List.find(item => {
      return item.ArmyClass === ArmyClass;
    })
  }

  GetRoleArmyID(ArmyClass) {
    return this.OneByArmyClass(ArmyClass).RoleArmyID;
  }

  GetAllRoleArmyIDs() {
    return this.List.filter(roleArmy => roleArmy.Status === 1 || roleArmy.Status === 17).map(roleArmy => roleArmy.RoleArmyID);
  }

  GetAllGuardRoleArmyIDs() {
    return this.List.filter(roleArmy => roleArmy.Status === 17).map(roleArmy => roleArmy.RoleArmyID);
  }

  AddArmyInfo(data) {
    if (data.hasOwnProperty('RoleArmyVo')) {
      this._roleArmyList.push(data.RoleArmyVo);
    }
    // this.logger.debug(JSON.stringify(this._roleArmyList));
  }

  async UpdateArmyInfo(data) {
    if (data.hasOwnProperty('RoleArmyVo')) {
      if (Array.isArray(data.RoleArmyVo)) {
        for (let roleArmy of data.RoleArmyVo) {
          this.UpdateItemById(this._roleArmyList, roleArmy, "ArmyClass");
        }
      } else {
        this.UpdateItemById(this._roleArmyList, data.RoleArmyVo, "ArmyClass");
      }
    }
    // this.logger.debug(JSON.stringify(this._roleArmyList));
  }

  CheckArmyStatus() {
    return this.List.some((roleArmy) => {
      return roleArmy.Status === 1 || roleArmy.Status === 17;
    });
  }

  CheckAllArmyStatus() {
    return this.List.every((roleArmy) => {
      return roleArmy.Status === 1 || roleArmy.Status === 17;
    });
  }

}

module.exports = RoleArmyService;