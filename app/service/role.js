'use strict'

const CoreService = require("../core/service_core");

class RoleService extends CoreService {
  _role;

  async Init(data) {
    if (data.hasOwnProperty('RoleVo')) {
      this._role = data.RoleVo;
    }
    // this.logger.debug(JSON.stringify(this._role));
  }

  GetRoleID() {
    return this._role.RoleID;
  }

  GetFactionID() {
    return this._role.FactionID;
  }
}

module.exports = RoleService;