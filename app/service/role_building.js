'use strict'
const CoreService = require("../core/service_core");

class RoleBuildingService extends CoreService{
  _roleBuildingList = [];

  async Init(data)
  {
    if (data.hasOwnProperty('RoleBuildingVo')) {
      this._roleBuildingList = data.RoleBuildingVo;
    }
    // this.logger.debug(JSON.stringify(this._roleBuildingList));
  }

  get List() {
    return this._roleBuildingList;
  }

  OneByBuildingID(BuildingID)
  {
    if (! Array.isArray(this._roleBuildingList) || this._roleBuildingList.length === 0) return;
    return this._roleBuildingList.find(item => {
      return item.BuildingID === BuildingID;
    })
  }

  GetRoleBuildingID(BuildingID){
    return this.OneByBuildingID(BuildingID).RoleBuildingID;
  }

  AddBuildingInfo(data){
    if (data.hasOwnProperty('RoleBuildingVo')) {
      this._roleBuildingList.push(data.RoleBuildingVo);
    }
    // this.logger.debug(JSON.stringify(this._roleBuildingList));
  }
}

module.exports = RoleBuildingService;