'use strict'
const CoreService = require("../core/service_core");

class WorldMarkService extends CoreService{
  _worldMarkList = [];

  async Init(data)
  {
    if (data.hasOwnProperty('WorldMarkVo')) {
      this._worldMarkList = data.WorldMarkVo;
    }
    // this.logger.debug(JSON.stringify(this._worldMarkList));
  }

  get List() {
    return this._worldMarkList;
  }

  OneByWorldMarkID(WorldMarkID)
  {
    if (! Array.isArray(this._worldMarkList) || this._worldMarkList.length === 0) return;
    return this._worldMarkList.find(item => {
      return item.WorldMarkID === WorldMarkID;
    })
  }
}

module.exports = WorldMarkService;