'use strict'

const CoreService = require("../core/service_core");

class EntityService extends CoreService {
  _entity;

  async Init(data) {
    if (data.hasOwnProperty('EntityVo')) {
      this._entity = data.EntityVo;
    }
    // this.logger.debug(JSON.stringify(this._entity));
  }

  GetEntityID() {
    this._entity.RNo;
  }

  GetFactionID() {
    this._entity.FactionID;
  }
}

module.exports = EntityService;