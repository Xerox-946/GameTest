'use strict'
const CoreService = require("../core/service_core");

class SimpleStructService extends CoreService {
    _simpleLeagueList = [];
    _simpleFactionList = [];
    _simpleRoleList = [];

    async Init(data) {
        if (data.hasOwnProperty('SimpleLeagueVo')) {
            this._simpleLeagueList = data.SimpleLeagueVo;
        }
        // this.logger.debug(JSON.stringify(this._simpleLeagueList));

        if (data.hasOwnProperty('SimpleFactionVo')) {
            this._simpleFactionList = data.SimpleFactionVo;
        }
        // this.logger.debug(JSON.stringify(this._simpleFactionList));

        if (data.hasOwnProperty('SimpleRoleVo')) {
            this._simpleRoleList = data.SimpleRoleVo;
        }
        // this.logger.debug(JSON.stringify(this._simpleRoleList));
    }

    get LeagueList() {
        return this._simpleLeagueList;
    }

    get FactionList() {
        return this._simpleFactionList;
    }

    get RoleList() {
        return this._simpleRoleList;
    }

    LeagueByL(L) {
        if (!Array.isArray(this._simpleLeagueList) || this._simpleLeagueList.length === 0) return;
        return this._simpleLeagueList.find(item => {
            return item.L === L;
        })
    }

    FactionByF(F) {
        if (!Array.isArray(this._simpleFactionList) || this._simpleFactionList.length === 0) return;
        return this._simpleFactionList.find(item => {
            return item.F === F;
        })
    }

    RoleByR(R) {
        if (!Array.isArray(this._simpleRoleList) || this._simpleRoleList.length === 0) return;
        return this._simpleRoleList.find(item => {
            return item.R === R;
        })
    }

    UpdateInfo(data) {
        if (data.hasOwnProperty('SimpleLeagueVo')) {
            if (Array.isArray(data.SimpleLeagueVo)) {
                this._simpleLeagueList = data.SimpleLeagueVo;
            } else {
                this.UpdateItemById(this._simpleLeagueList, data.SimpleLeagueVo, "L");
            }
        }

        if (data.hasOwnProperty('SimpleFactionVo')) {
            if (Array.isArray(data.SimpleFactionVo)) {
                this._simpleFactionList = data.SimpleFactionVo;
            } else {
                this.UpdateItemById(this._simpleFactionList, data.SimpleFactionVo, "F");
            }
        }

        if (data.hasOwnProperty('SimpleRoleVo')) {
            if (Array.isArray(data.SimpleRoleVo)) {
                this._simpleRoleList = data.SimpleRoleVo;
            } else {
                this.UpdateItemById(this._simpleRoleList, data.SimpleRoleVo, "R");
            }
        }
    }
}

module.exports = SimpleStructService;