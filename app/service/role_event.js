'use strict'
const CoreService = require("../core/service_core");

class RoleEventService extends CoreService {
  _roleEventList = [];

  async Init(data) {
    if (data.hasOwnProperty('RoleEventVo')) {
      this._roleEventList = data.RoleEventVo;
    }

    // this.logger.debug(JSON.stringify(this._roleEventList));
  }

  get List() {
    return this._roleEventList;
  }

  OneByEventID(EventID) {
    if (!Array.isArray(this._roleEventList) || this._roleEventList.length === 0) return;
    return this._roleEventList.find(item => {
      return item.EventID === EventID;
    })
  }

  GetRoleEventID(EventID) {
    return this.OneByEventID(EventID).RoleEventID;
  }

  AddEventInfo(data) {
    if (data.hasOwnProperty('RoleEventVo')) {
      if (Array.isArray(data.RoleEventVo)) {
        for (let roleEvent of data.RoleEventVo) {
          this._roleEventList.push(roleEvent);
        }
      } else {
        this._roleEventList.push(data.RoleEventVo);
      }
    }
    // this.logger.debug(JSON.stringify(this._roleEventList));
  }

  OnEventCallback(data) {
    if (data.hasOwnProperty('RoleEventVo')) {
      this.SetDelay(data.RoleEventVo.EndMSTime - data.RoleEventVo.StartMSTime);
    }
  }
}

module.exports = RoleEventService;