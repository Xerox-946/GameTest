'use strict'
const CoreService = require("../core/service_core");

class RoleCoinService extends CoreService {
  _roleCoin;

  async Init(data)
  {
    if (data.hasOwnProperty('RoleCoinVo')) {
      this._roleCoin = data.RoleCoinVo;
    }
    // this.logger.debug(JSON.stringify(this._roleCoin)); 
  }
}

module.exports = RoleCoinService;