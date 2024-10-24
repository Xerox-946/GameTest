'use strict'
const CoreService = require("../core/service_core");

class LeagueApplyService extends CoreService{
  _leagueApplyList = [];

  async Init(data)
  {
    if (data.hasOwnProperty('LeagueApplyVo')) {
      this._leagueApplyList = data.LeagueApplyVo;
    }
    // this.logger.debug(JSON.stringify(this._leagueApplyList));
  }

  get List() {
    return this._leagueApplyList;
  }

  OneByLeagueID(LeagueID)
  {
    if (! Array.isArray(this._leagueApplyList) || this._leagueApplyList.length === 0) return;
    return this._leagueApplyList.find(item => {
      return item.LeagueID === LeagueID;
    })
  }
}

module.exports = LeagueApplyService;