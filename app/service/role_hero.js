'use strict'
const CoreService = require("../core/service_core");

class RoleHeroService extends CoreService {
  _roleHeroList = [];

  async Init(data) {
    if (data.hasOwnProperty('RoleHeroVo')) {
      this._roleHeroList = data.RoleHeroVo;
    }

    // this.logger.debug(JSON.stringify(this._roleHeroList));
  }

  get List() {
    return this._roleHeroList;
  }

  OneByHeroID(HeroID) {
    if (!Array.isArray(this._roleHeroList) || this._roleHeroList.length === 0) return;
    return this._roleHeroList.find(item => {
      return item.HeroID === HeroID;
    })
  }

  GetRoleHeroID(HeroID) {
    // this.logger.debug(JSON.stringify(this._roleHeroList));
    return this.OneByHeroID(HeroID).RoleHeroID;
  }

  AddHeroInfo(data) {
    if (data.hasOwnProperty('RoleHeroVo')) {
      if (Array.isArray(data.RoleHeroVo)) {
        for (let roleHero of data.RoleHeroVo) {
          this._roleHeroList.push(roleHero);
        }
      } else {
        this._roleHeroList.push(data.RoleHeroVo);
      }
    }
    // this.logger.debug(JSON.stringify(this._roleHeroList));
  }

  UpdateHeroInfo(data) {
    if (data.hasOwnProperty('RoleHeroVo')) {
      if (Array.isArray(data.RoleHeroVo)) {
        for (let roleHero of data.RoleHeroVo) {
          this.UpdateItemById(this._roleHeroList, roleHero, "RoleHeroID");
        }
      } else {
        this.UpdateItemById(this._roleHeroList, data.RoleHeroVo, "RoleHeroID");
      }
    }
  }
}

module.exports = RoleHeroService;