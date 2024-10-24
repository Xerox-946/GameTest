'use strict'
const Role = require('./role');
const RoleAch = require('./role_ach');
const RoleArmy = require('./role_army');
const RoleCity = require('./role_city');
const RoleCoin = require('./role_coin');
const RoleHero = require('./role_hero');
const RoleOutput = require('./role_output');
const RoleStore = require('./role_store');
const RoleBuilding = require('./role_building');

const RoleVo = new Role();
const RoleAchVo = new RoleAch();
const RoleArmyVo = new RoleArmy();
const RoleCityVo = new RoleCity();
const RoleCoinVo = new RoleCoin();
const RoleHeroVo = new RoleHero();
const RoleOutputVo = new RoleOutput();
const RoleStoreVo = new RoleStore();
const RoleBuildingVo = new RoleBuilding();


class CacheServer {
  constructor() {
  }

  updateCache(Content) {
    if (Content) {
      if (typeof Content === 'string') {
        Content = JSON.parse(Content);
      }
      for (let key of Object.keys(Content)) {
        const Value = Content[key];
        switch (key) {
          case "RoleVo":
            RoleVo.updateCache({ Value });
            break;
          case "RoleAchVo":
            RoleAchVo.updateCache({ Value });
            break;
          case "RoleArmyVo":
            RoleArmyVo.updateCache({ Value });
            break;
          case "RoleCityVo":
            RoleCityVo.updateCache({ Value });
            break;
          case "RoleCoinVo":
            RoleCoinVo.updateCache({ Value });
            break;
          case "RoleHeroVo":
            RoleHeroVo.updateCache({ Value });
            break;
          case "RoleOutputVo":
            RoleOutputVo.updateCache({ Value });
            break;
          case "RoleStoreVo":
            RoleStoreVo.updateCache({ Value });
            break;
          case "RoleBuildingVo":
            RoleBuildingVo.updateCache({ Value });
            break;
        }
      }
    }
  }

  oneByKey({ UserID, Key, Param = '' }) {
    if (UserID) {
      const role = RoleVo.one({ UserID });
      switch (Key) {
        case "RoleVo":
          return role;
        case "RoleBuildingVo":
          RoleBuildingVo.one({ RoleID: role.RoleID, BuildingID: Param });
          break;
        case "RoleAchVo":
          RoleAchVo.one({ RoleID: role.RoleID, SysAchID: Param });
          break;
        case "RoleArmyVo":
          RoleArmyVo.one({ RoleID: role.RoleID, ArmyClass: Param });
          break;
        case "RoleCityVo":
          return RoleCityVo.one({ RoleID: role.RoleID, CityID: Param });
        case "RoleCoinVo":
          return RoleCoinVo.one({ RoleID: role.RoleID });
        case "RoleHeroVo":
          RoleHeroVo.one({ RoleID: role.RoleID, RoleHeroID: Param });
          break;
        case "RoleOutputVo":
          RoleOutputVo.one({ RoleID: role.RoleID });
          break;
        case "RoleStoreVo":
          RoleStoreVo.one({ RoleID: role.RoleID, StoreID: Param });
          break;
      }
    }
  }

}

module.exports = CacheServer;