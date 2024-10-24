'use strict'
const CoreService = require("../core/service_core");

class RoleCityService extends CoreService {
  _roleCity;

  async Init(data) {
    if (data.hasOwnProperty('RoleCityVo')) {
      this._roleCity = data.RoleCityVo;
    }

    // this.logger.debug(JSON.stringify(this._roleCity));
  }

  UpdateCityInfo(data) {
    if (data.hasOwnProperty('RoleCityVo')) {
      this.UpdateItemById([this._roleCity], data.RoleCityVo, "RoleID");
    }
  }

  NeedRecruitNum() {
    return 2500 - this._roleCity.Reservist;
  }

  GetPos(posInfo = 0) {
    if (posInfo == 0) {
      posInfo = Math.floor(Math.random() * 4) + 1
    }
    return this._roleCity.Pos + posInfo;
  }
}

module.exports = RoleCityService;