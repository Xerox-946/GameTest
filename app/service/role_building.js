'use strict'
const CoreService = require("../core/service_core");

class RoleBuildingService extends CoreService {
  _roleBuildingList = [];
  nowInsert = false;

  async Init(data) {
    if (data.hasOwnProperty('RoleBuildingVo')) {
      this._roleBuildingList = data.RoleBuildingVo;
    }
  }

  get List() {
    return this._roleBuildingList;
  }

  OneByBuildingID(BuildingID) {
    if (!Array.isArray(this._roleBuildingList) || this._roleBuildingList.length === 0) return;
    return this._roleBuildingList.find(item => {
      return item.BuildingID === BuildingID;
    })
  }

  GetRoleBuildingID(BuildingID) {
    return this.OneByBuildingID(BuildingID)?.RoleBuildingID;
  }

  AddBuildingInfo(data) {
    if (data.hasOwnProperty('RoleBuildingVo')) {
      this._roleBuildingList.push(data.RoleBuildingVo);
      this.nowInsert = true;
    }
  }

  CheckContainsBuilding(BuildingID) {
    if (!Array.isArray(this._roleBuildingList) || this._roleBuildingList.length === 0) return true;
    return !this.nowInsert && this.OneByBuildingID(BuildingID) != undefined;
  }

  async UpdateBuildingInfo(data) {
    if (data.hasOwnProperty('RoleBuildingVo')) {
      if (Array.isArray(data.RoleBuildingVo)) {
        for (let roleBuilding of data.RoleBuildingVo) {
          this.UpdateItemById(this._roleBuildingList, roleBuilding, "BuildingID");
        }
      } else {
        this.UpdateItemById(this._roleBuildingList, data.RoleBuildingVo, "BuildingID");
      }
    }
    // this.logger.debug(JSON.stringify(this._roleArmyList));
  }
}

module.exports = RoleBuildingService;