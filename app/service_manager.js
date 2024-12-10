'use strict'
const RoleService = require('./service/role');
const RoleBuildingService = require('./service/role_building');
const RoleAchService = require('./service/role_ach');
const RoleArmyService = require('./service/role_army');
const RoleCityService = require('./service/role_city');
const RoleCoinService = require('./service/role_coin');
const RoleHeroService = require('./service/role_hero');
const RoleOutputService = require('./service/role_output');
const RoleStoreService = require('./service/role_store');
const RoleLotteryService = require('./service/role_lottery');
const RoleSettingService = require('./service/role_setting');
const RoleEquipService = require('./service/role_equip');
const RoleSkillService = require('./service/role_skill');
const RoleItemService = require('./service/role_item');
const RoleTaskService = require('./service/role_task');
const RoleTaskSerialService = require('./service/role_task_serial');
const SimpleStructService = require('./service/simple_struct');
const LeagueApplyService = require('./service/league_apply');
const TrendStructService = require('./service/trend_struct');
const RoleActivityService = require('./service/role_activity');
const RoleLineupService = require('./service/role_lineup');
const WorldMarkService = require('./service/world_mark');
const EntityService = require('./service/entity');
const RoleEventService = require('./service/role_event');
const FightNoticeService = require('./service/fight_notice');
const WorldCityService = require('./service/world_city');
const WorldMapService = require('./service/world_map');

const FactionToCity = require("./sysdata/sys_faction_to_city.json");
const SysWorldCity = require("./sysdata/sys_world_city.json");
const SysWorldRes = require("./sysdata/sys_world_res.json");

class ServiceManager {

  // 当前登陆账户对象
  _user;
  /**@type RoleService */
  role;
  /**@type RoleBuildingService */
  roleBuilding;
  /**@type RoleAchService */
  roleAch;
  /**@type RoleArmyService */
  roleArmy;
  /**@type RoleCityService */
  roleCity;
  /**@type RoleCoinService */
  roleCoin;
  /**@type RoleHeroService */
  roleHero;
  /**@type RoleOutputService */
  roleOutput;
  /**@type RoleStoreService */
  roleStore;
  /**@type RoleLotteryService */
  roleLottery;
  /**@type RoleSettingService */
  roleSetting;
  /**@type RoleEquipService */
  roleEquip;
  /**@type RoleSkillService */
  roleSkill;
  /**@type RoleItemService */
  roleItem;
  /**@type RoleTaskService */
  roleTask;
  /**@type RoleTaskSerialService */
  roleTaskSerial;
  /**@type SimpleStructService */
  simpleStruct;
  /**@type LeagueApplyService */
  leagueApply;
  /**@type TrendStructService */
  trendStruct;
  /**@type RoleActivityService */
  roleActivity;
  /**@type RoleLineupService */
  roleLineup;
  /**@type WorldMarkService */
  worldMark;
  /**@type EntityService */
  entity;
  /**@type RoleEventService */
  roleEvent;
  /**@type FightNoticeService */
  fightNotice;
  /**@type WorldCityService */
  worldCity;
  /**@type WorldMapService */
  worldMap;

  constructor(User) {
    this._user = User;

    this.role = new RoleService;
    this.roleBuilding = new RoleBuildingService;
    this.roleAch = new RoleAchService;
    this.roleArmy = new RoleArmyService;
    this.roleCity = new RoleCityService;
    this.roleCoin = new RoleCoinService;
    this.roleHero = new RoleHeroService;
    this.roleOutput = new RoleOutputService;
    this.roleStore = new RoleStoreService;
    this.roleLottery = new RoleLotteryService;
    this.roleSetting = new RoleSettingService;
    this.roleEquip = new RoleEquipService;
    this.roleSkill = new RoleSkillService;
    this.roleItem = new RoleItemService;
    this.roleTask = new RoleTaskService;
    this.roleTaskSerial = new RoleTaskSerialService;
    this.simpleStruct = new SimpleStructService;
    this.leagueApply = new LeagueApplyService;
    this.trendStruct = new TrendStructService;
    this.roleActivity = new RoleActivityService;
    this.roleLineup = new RoleLineupService;
    this.worldMark = new WorldMarkService;
    this.entity = new EntityService;
    this.roleEvent = new RoleEventService;
    this.fightNotice = new FightNoticeService;
    this.worldCity = new WorldCityService;
    this.worldMap = new WorldMapService;
  }

  async OnDataUpdate(Cmd, Content) {
    if (Cmd === 'role.getMyRoleInfo') {
      if (Content.hasOwnProperty('RoleVo')) {
        await this.role.Init(Content);
      }
      if (Content.hasOwnProperty('RoleBuildingVo')) {
        await this.roleBuilding.Init(Content);
      }
      if (Content.hasOwnProperty('RoleAchVo')) {
        await this.roleAch.Init(Content);
      }
      if (Content.hasOwnProperty('RoleCityVo')) {
        await this.roleCity.Init(Content);
      }
      if (Content.hasOwnProperty('RoleCoinVo')) {
        await this.roleCoin.Init(Content);
      }
      if (Content.hasOwnProperty('RoleHeroVo')) {
        await this.roleHero.Init(Content);
      }
      if (Content.hasOwnProperty('RoleOutputVo')) {
        await this.roleOutput.Init(Content);
      }
      if (Content.hasOwnProperty('RoleStoreVo')) {
        await this.roleStore.Init(Content);
      }
      if (Content.hasOwnProperty('WorldCityVo')) {
        await this.worldCity.Init(Content);
      }
      if (Content.hasOwnProperty('RoleArmyVo')) {
        await this.roleArmy.Init(Content);
      }
      if (Content.hasOwnProperty('WorldMapStr')) {
        await this.worldMap.Init(Content);
      }
    }
    if (Cmd === 'role.roleLogin') {
      if (Content.hasOwnProperty('RoleVo')) {
        await this.role.Init(Content);
      }
      if (Content.hasOwnProperty('RoleOutputVo')) {
        await this.roleOutput.Init(Content);
      }
    }

    if (Cmd === 'sync.send') {
      if (Content.hasOwnProperty('RoleArmyVo')) {
        await this.roleArmy.UpdateArmyInfo(Content);
      }
      // if (Content.hasOwnProperty('FightNoticeVo')) {
      //   await this.fightNotice.Init(Content);
      // }
    }

    return false;
  }

  GetNextCityID() {
    const factionID = this.role.GetFactionID();
    const cities = FactionToCity[factionID];
    const cityID = cities.find(id => this.worldCity.GetFactionID(id) !== factionID);
    return cityID || 0;
  }

  GetNextResourceCityID() {
    var cityID = 0;
    const factionID = this.role.GetFactionID();
    const cities = FactionToCity[factionID];
    const attackedCities = this.worldMap.GetAllCityIDs();
    for (let i = 0; i < cities.length; i++) {
      if (!attackedCities.includes(cities[i])) {
        cityID = cities[i];
        break;
      }
    }
    return cityID;
  }

  GetNextAttackResource(resID) {
    return this.GetNextResourceCityID() * 100 + resID;
  }

  GetNextAttackCity() {
    return this.GetNextCityID() * 100;
  }

  GetSecondResource() {
    const factionID = this.role.GetFactionID();
    const cities = FactionToCity[factionID];
    return cities[1] * 100 + 26;
  }

  GetCurStatus() {
    const belongFactionID = this.worldCity.GetFactionID(this.GetNextCityID());
    if (belongFactionID != 99 && belongFactionID != this.role.GetFactionID()) {
      return 26;
    } else {
      return 9;
    }
  }

  CheckInvalid(resID, idx) {
    const resourceID = SysWorldCity[this.GetNextResourceCityID()][resID];
    if (resourceID == 0) {
      return true;
    } else {
      const worldResList = SysWorldRes[resourceID];
      if (worldResList == undefined) {
        return true;
      }
      if (worldResList.length == 4 || worldResList.length == 7) {
        if (idx >= worldResList.length) {
          return true;
        }
      } else {
        if (idx > worldResList.length) {
          return true;
        }
      }
    }
    return false;
  }

}

module.exports = ServiceManager;