'use strict'
const CoreService = require("../core/service_core");

class WorldMapService extends CoreService {
  _worldMapList = [];
  _cityIDs = [];

  async Init(data) {
    if (data.hasOwnProperty('WorldMapStr')) {
      this._worldMapList = data.WorldMapStr;
      this._worldMapList.forEach(element => {
        const parts = element.split('|');
        const cityID = Math.floor(Number(parts[1]) / 100);
        if (!this._cityIDs.includes(cityID)) {
          this._cityIDs.push(cityID);
        }
      });
    }
    // this.logger.debug(JSON.stringify(this._cityIDs));
  }

  get List() {
    return this._worldMapList;
  }

  GetAllCityIDs() {
    return this._cityIDs;
  }

}

module.exports = WorldMapService;