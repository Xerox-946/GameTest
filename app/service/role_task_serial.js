'use strict'

const CoreService = require("../core/service_core");

class RoleTaskSerialService extends CoreService{
  _roleTaskSerial;
  
  async Init(data)
  {
    if (data.hasOwnProperty('RoleTaskSerialVo')) {
      this._roleTaskSerial = data.RoleTaskSerialVo;
    }
    // this.logger.debug(JSON.stringify(this._roleTaskSerial));
  }
}

module.exports = RoleTaskSerialService;