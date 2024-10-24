'use strict'
const CoreService = require("../core/service_core");

class FactionMemberService extends CoreService {
  _factionMember;

  async Init(data)
  {
    if (data.hasOwnProperty('FactionMemberVo')) {
      this._factionMember = data.FactionMemberVo;
    }

    this.logger.debug(JSON.stringify(this._factionMember));
  }
}

module.exports = FactionMemberService;