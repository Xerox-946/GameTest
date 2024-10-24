'use strict'
const CoreService = require("../core/service_core");

class WorldCityService extends CoreService {
  _worldCityList = [];

  async Init(data) {
    if (data.hasOwnProperty('WorldCityVo')) {
      this._worldCityList = data.WorldCityVo;
    }
    // this.logger.debug(JSON.stringify(this._worldCityList));
  }

  get List() {
    return this._worldCityList;
  }

  GetFactionID(CityID) {
    return this._worldCityList.filter((item) => item.CityID == CityID)[0].FactionID;
  }

}

module.exports = WorldCityService;