'use strict'
const CoreService = require("../core/service_core");

class TrendStructService extends CoreService {
    _trendRecordList = [];
    _trendGoal;

    async Init(data) {
        if (data.hasOwnProperty('TrendRecordVo')) {
            this._trendRecordList = data.TrendRecordVo;
        }
        // this.logger.debug(JSON.stringify(this._trendRecordList));

        if (data.hasOwnProperty('TrendGoalRecordVo')) {
            this._trendGoal = data.TrendGoalRecordVo;
        }
        // this.logger.debug(JSON.stringify(this._trendGoal));

    }

    get TrendRecordList() {
        return this._trendRecordList;
    }

    TrendRecordByOrder(TrendOrder) {
        if (!Array.isArray(this._trendRecordList) || this._trendRecordList.length === 0) return;
        return this._trendRecordList.find(item => {
            return item.TrendOrder === TrendOrder;
        })
    }
}

module.exports = TrendStructService;