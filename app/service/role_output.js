'use strict'
const CoreService = require("../core/service_core");

class RoleOutputService extends CoreService {
  _roleOutput;

  async Init(data)
  {
    if (data.hasOwnProperty('RoleOutputVo')) {
      this._roleOutput = data.RoleOutputVo;
    }

    // this.logger.debug(JSON.stringify(this._roleOutput));
  }
}

module.exports = RoleOutputService;