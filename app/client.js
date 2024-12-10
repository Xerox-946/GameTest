'use strict'
const Execute = require('../execute-config.json');
const path = require("path");
const fs = require("fs");
const GameLogger = require("../utils/logger");
const { Logger } = require("log4js");
const ErrCode = require("./sysdata/sys_lan_err.json");
const { WorkerManager } = require("./worker-manager");

class Client {
  #SocketHandler;
  #ServiceManager;
  Seq = 1;
  OrderList = [];
  LoopOrderList = [];
  IsContinue = true;
  /**@type Logger */
  logger = new GameLogger("Index");
  constructor(socket, serviceManager, index) {
    this.clear();
    this.#ServiceManager = serviceManager;
    this.#SocketHandler = socket;
    this.Seq = 1;
    this.IsContinue = true;
    this.OrderList = Execute.filter(item => index == item.ID)[0].Normal.slice();
  }

  // 初始化执行列表
  // ResetExecute() {
  //   this.OrderList = [{ "methodName": "DoTaskList", "args": ["login"] }];
  //   // this.LoopOrderList = ["PlayerAction_RollDice", "PlayerAction_DoneIndex"];
  // }

  async DevAddCoin(type, num) {
    const api = { Cmd: 'dev.devAddCoin', Params: { "Type": type, "Num": num }, Describe: '增加资源' };
    await this.DoTask(api, this.#ServiceManager.roleCoin.Init.bind(this.#ServiceManager.roleCoin)).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async DevFinishTrend() {
    const api = { Cmd: 'dev.devFinishTrend', Params: {}, Describe: '结束当前章节，开启下一章节' };
    await this.DoTask(api, this.#ServiceManager.trendStruct.Init.bind(this.#ServiceManager.trendStruct)).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async ResetTrend() {
    const api = { Cmd: 'dev.resetTrend', Params: {}, Describe: '重置天下布武章节信息' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async ReloadBandit(banditID) {
    const api = { Cmd: 'dev.reloadBandit', Params: { "BanditID": banditID }, Describe: '重载游荡怪物信息' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async ResetHeroCareer() {
    const api = { Cmd: 'dev.resetHeroCareer', Params: {}, Describe: '重置所有角色武将职业与武将默认职业不同的武将职业(职业解锁消耗直接移除)' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  //TODO 尚未验证
  async SendSysTemMail(module, roleList, award, param) {
    const api = { Cmd: 'dev.sendSysTemMail', Params: { "Module": module, "RoleList": roleList, "Award": award, "Param": param }, Describe: '系统邮件发送' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async SendSysTemMsg(targetID, module, param, all) {
    const api = { Cmd: 'dev.sendSysTemMsg', Params: { "TargetID": targetID, "Module": module, "Param": param, "All": all }, Describe: '消息提醒发送' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async ClearChatInfo(chatType, targetID) {
    const api = { Cmd: 'dev.clearChatInfo', Params: { "ChatType": chatType, "TargetID": targetID }, Describe: '清理当前角色的指定聊天类型信息' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async DevSendChat(roleID, chatType, receiverID, groupID, message) {
    const api = { Cmd: 'dev.devSendChat', Params: { "RoleID": roleID, "ChatType": chatType, "ReceiverID": receiverID, "Message": message, "GroupID": groupID }, Describe: '聊天信息发送' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async AcceptSerial(roleID, taskSerialID) {
    const api = { Cmd: 'dev.acceptSerial', Params: { "RoleID": roleID, "TaskSerialID": taskSerialID }, Describe: '接收指定章节任务' };
    await this.DoTask(api, [this.#ServiceManager.roleTaskSerial.Init.bind(this.#ServiceManager.roleTaskSerial), this.#ServiceManager.roleTask.Init.bind(this.#ServiceManager.roleTask)]).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async AcceptTask(taskID) {
    const api = { Cmd: 'dev.acceptTask', Params: { "TaskID": taskID }, Describe: '接收支线任务' };
    await this.DoTask(api, this.#ServiceManager.roleTask.Init.bind(this.#ServiceManager.roleTask)).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async ClearRedis(type) {
    const api = { Cmd: 'dev.clearRedis', Params: { "Type": type }, Describe: '清理指定类型的Redis信息' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async GetRoleCityInfo() {
    const api = { Cmd: 'dev.getRoleCityInfo', Params: {}, Describe: '获取角色主城相关信息(包含一揆、村民事件信息)' };
    await this.DoTask(api, this.#ServiceManager.roleCity.Init.bind(this.#ServiceManager.roleCity)).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async CityRecycle(roleID, type) {
    const api = { Cmd: 'dev.cityRecycle', Params: { "RoleID": roleID, "Type": type }, Describe: '基地回收' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async ReloadFactionSimpleInfo(factionID) {
    const api = { Cmd: 'dev.reloadFactionSimpleInfo', Params: { "FactionID": factionID }, Describe: '重载指定势力的简易结构' };
    await this.DoTask(api, this.#ServiceManager.simpleStruct.UpdateInfo.bind(this.#ServiceManager.simpleStruct)).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async ReloadFactionTask(reset) {
    const api = { Cmd: 'dev.reloadFactionTask', Params: { "Reset": reset }, Describe: '重置势力章节任务' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async ResetSerial(reset) {
    const api = { Cmd: 'dev.resetSerial', Params: { "Reset": reset }, Describe: '重置章节任务' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async ReloadWorldEntity() {
    const api = { Cmd: 'dev.reloadWorldEntity', Params: {}, Describe: '重置WorldEntity数据' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async ChangeCityFaction(cityIDList, factionID) {
    const api = { Cmd: 'dev.changeCityFaction', Params: { "CityIDList": cityIDList, "FactionID": factionID }, Describe: '设置指定城市归属于指定势力' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async DevReviseFogInfo() {
    const api = { Cmd: 'dev.devReviseFogInfo', Params: {}, Describe: '修正迷雾数据的格式' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async DevFLLog(factionID, leagueID) {
    const api = { Cmd: 'dev.devFLLog', Params: { "FactionID": factionID, "LeagueID": leagueID }, Describe: '生成势力军团日志(非规范数据,所有信息使用1填充)' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async DevAddItem(itemID, num) {
    const api = { Cmd: 'dev.devAddItem', Params: { "ItemID": itemID, "Num": num }, Describe: '增加玩家道具' };
    await this.DoTask(api, this.#ServiceManager.roleItem.Init.bind(this.#ServiceManager.roleItem)).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async DevRoleExtend() {
    const api = { Cmd: 'dev.devRoleExtend', Params: {}, Describe: '修正扩展信息(代官加成信息格式)' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async DevUpdateFence(isFull) {
    const api = { Cmd: 'dev.devUpdateFence', Params: { "IsFull": isFull }, Describe: '修改城市围城值' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async DevSettleDutyTask(onlyCampaign) {
    const api = { Cmd: 'dev.devSettleDutyTask', Params: { "OnlyCampaign": onlyCampaign }, Describe: '结算役职活动' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async DevMarch(destpos, status, delayTime) {
    const api = { Cmd: 'dev.devMarch', Params: { "DestPos": destpos, "Status": status, "DelayTime": delayTime }, Describe: '测试行军' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async DevReloadJob(jobLogID) {
    const api = { Cmd: 'dev.devReloadJob', Params: { "JobLogID": jobLogID }, Describe: '重新加载指定定时任务' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async DevPower(roleID) {
    const api = { Cmd: 'dev.devPower', Params: { "RoleID": roleID }, Describe: '重载战力' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async DevLoadCityLair(cityID) {
    const api = { Cmd: 'dev.devLoadCityLair', Params: { "CityID": cityID }, Describe: '重载指定城市的守军部队' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async DevFinishCityWar(cityID) {
    const api = { Cmd: 'dev.devFinishCityWar', Params: { "CityID": cityID }, Describe: '结束指定城市的城战并发送城战日志' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async DevRoleExpireJob() {
    const api = { Cmd: 'dev.devRoleExpireJob', Params: {}, Describe: '重新加载玩家的过期定时任务' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async DevAddEquip(equipID) {
    const api = { Cmd: 'dev.devAddEquip', Params: { "EquipID": equipID }, Describe: '增加家宝' };
    await this.DoTask(api, this.#ServiceManager.roleEquip.AddEquipInfo.bind(this.#ServiceManager.roleEquip)).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async DevRecruit(heroID, level) {
    const api = { Cmd: 'dev.devRecruit', Params: { "HeroID": heroID, "Level": level }, Describe: '招募指定武将' };
    await this.DoTask(api, this.#ServiceManager.roleHero.AddHeroInfo.bind(this.#ServiceManager.roleHero)).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async DevConscript(roleID, soldiers) {
    const api = { Cmd: 'dev.devConscript', Params: { "RoleID": roleID, "Soldiers": soldiers }, Describe: '征兵' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async ReloadRoleSimpleInfo(roleID) {
    const api = { Cmd: 'dev.reloadRoleSimpleInfo', Params: { "RoleID": roleID }, Describe: '重载角色的简易结构' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async ReloadLeagueSimpleInfo(leagueIDList) {
    const api = { Cmd: 'dev.reloadLeagueSimpleInfo', Params: { "LeagueIDList": leagueIDList }, Describe: '重载指定家族的简易结构' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async DevSetLockHero(roleID) {
    const api = { Cmd: 'dev.devSetLockHero', Params: { "RoleID": roleID }, Describe: '重载指定玩家的武将繁忙（委任中、上阵中等）信息' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async DevUnlockFog(roleID) {
    const api = { Cmd: 'dev.devUnlockFog', Params: { "RoleID": roleID }, Describe: '指定玩家解锁所有迷雾' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async GetMyRoleInfo() {
    const api = { Cmd: 'role.getMyRoleInfo', Params: {}, Describe: '获取当前玩家信息' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async AttackAnyResource() {
    const api = { Cmd: "world.createEvent", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 1), "DestPos": this.#ServiceManager.GetSecondResource.bind(this.#ServiceManager, 1), "Params": { "Status": 25, "Num": 0, "Back": 1, "Idx": 1 } }, Describe: '创建部队调动事件' };
    await this.DoTask(api, [this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy), this.#ServiceManager.roleHero.UpdateHeroInfo.bind(this.#ServiceManager.roleHero), this.#ServiceManager.roleArmy.OnArmyCallback.bind(this.#ServiceManager.roleArmy)]).then(async () => {
      await this.WaitForResponse(api.Cmd, this.#ServiceManager.roleArmy);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async HeartSync() {
    const api = { Cmd: 'role.heartSync', Params: {}, Describe: '心跳同步' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async CityAction(status, cityID = 0) {
    var RoleArmyIDs = [];
    if (status == 12) {
      RoleArmyIDs = this.#ServiceManager.roleArmy.GetAllGuardRoleArmyIDs.bind(this.#ServiceManager.roleArmy);
    } else {
      RoleArmyIDs = this.#ServiceManager.roleArmy.GetAllRoleArmyIDs.bind(this.#ServiceManager.roleArmy);
    }
    var pos = 0;
    if (cityID == 0) {
      pos = this.#ServiceManager.GetNextAttackCity.bind(this.#ServiceManager);
    } else {
      pos = cityID * 100;
    }
    const api = { Cmd: "world.createEvents", Params: { "RoleArmyIDs": RoleArmyIDs, "DestPos": pos, "Params": { "Status": status, "Num": -1, "Back": 1, "Automatic": 0, "TargetPos": 0 } }, Describe: '创建部队调动事件', Immediate: true };
    await this.DoTask(api, [this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy), this.#ServiceManager.roleHero.UpdateHeroInfo.bind(this.#ServiceManager.roleHero), this.#ServiceManager.roleArmy.OnArmyCallback.bind(this.#ServiceManager.roleArmy)]).then(async () => {
      await this.WaitForResponse(api.Cmd, this.#ServiceManager.roleArmy);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async ResourceAction(status, cityID = 0) {
    var RoleArmyIDs = [];
    if (status == 12) {
      RoleArmyIDs = this.#ServiceManager.roleArmy.GetAllGuardRoleArmyIDs.bind(this.#ServiceManager.roleArmy);
    } else {
      RoleArmyIDs = this.#ServiceManager.roleArmy.GetAllRoleArmyIDs.bind(this.#ServiceManager.roleArmy);
    }
    var pos = 0;
    if (cityID == 0) {
      pos = this.#ServiceManager.GetNextAttackCity.bind(this.#ServiceManager);
    } else {
      pos = cityID * 100;
    }
    const api = { Cmd: "world.createEvents", Params: { "RoleArmyIDs": RoleArmyIDs, "DestPos": pos + 1, "Params": { "Status": status, "Num": -1, "Back": 1, "Automatic": 0, "TargetPos": 0, "Idx": 1 } }, Describe: '创建部队调动事件', Immediate: true };
    await this.DoTask(api, [this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy), this.#ServiceManager.roleHero.UpdateHeroInfo.bind(this.#ServiceManager.roleHero), this.#ServiceManager.roleArmy.OnArmyCallback.bind(this.#ServiceManager.roleArmy)]).then(async () => {
      await this.WaitForResponse(api.Cmd, this.#ServiceManager.roleArmy);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async SkillActivateSkill(heroID) {
    const api = { Cmd: "skill.activateSkill", Params: { RoleHeroID: this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, heroID) }, Describe: "传授战法" }
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async RemakeHero(heroID, heroID1, heroId2) {
    const api = { Cmd: "roleHero.remakeHero", Params: { RoleHeroID: this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, heroID), HeroList: [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, heroID1), this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, heroId2)] }, Describe: '兵种改造' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async UpgradeSkill(heroID, pos) {
    const api = { Cmd: "skill.upgradeSkill", Params: { RoleHeroID: this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, heroID), Pos: pos, Describe: "升级技能" } };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async WorldSweep(armyID, level) {
    const api = { Cmd: "world.sweep", Params: { RoleArmyID: this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, armyID), Level: level }, Describe: "扫荡山贼" };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async AssignSolider(armyID) {
    const api = { Cmd: "army.assignSoldiers", Params: { RoleArmyID: this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, armyID), ManagerNum: 0, SecondNum: 0, ThirdNum: 0 }, Describe: "补兵" };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async ChangeArm(armyID, armType) {
    const api = { Cmd: "army.changeArm", Params: { RoleArmyID: this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, armyID), ArmType: armType }, Describe: '变更兵种' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async ChangeFormation(armyID, formationID) {
    const api = { Cmd: "army.changeFormation", Params: { RoleArmyID: this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, armyID), FormationID: formationID }, Describe: '更新阵型' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  async AssignPoint(heroID) {
    const api = { Cmd: "roleHero.assignPoint", Params: { RoleHeroID: this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, heroID), Strength: 0, Chief: 0, Strategy: 50, Speed: 0, Politics: 0 }, Describe: '分配自由点' };
    await this.DoTask(api).then(async () => {
      await this.WaitForResponse(api.Cmd);
    }).catch((error) => {
      this.logger.error(error);
    });
  }

  clear() {
    this.#SocketHandler = null;
    this.#ServiceManager = null;
  }

  async setSocketCallBack(method) {
    // 设置message回调
    if (typeof method === 'function') {
      await this.#SocketHandler.setDataUpdateCallback(this.#ServiceManager.OnDataUpdate.bind(this.#ServiceManager));
    }
  }

  async UpdateData(Cmd, Content) {
    if (await this.#ServiceManager.OnDataUpdate(Cmd, Content)) {
      this.ResetExecute();
    }
    // 如果打过了第三关，就停止
    // return await this.#ServiceManager.ConfirmWhetherToContinue()
  }

  async Execute() {
    if (this.OrderList.length === 0) {
      await WorkerManager.TerminatePool();
      this.#SocketHandler.Close();
      return;
    }
    if (this.OrderList.length > 0) {
      const { methodName, args } = this.OrderList.shift();
      this.logger.debug(`${methodName} start`);
      if (typeof this[methodName] === 'function') {
        await this[methodName](...args);
      } else {
        this.logger.error(`方法 ${methodName} 不存在，跳过此任务。`);
      }
    }
    await this.Execute();
  }

  async TimedExecute(Method) {
    if (typeof this[Method] === 'function') {
      setInterval(async () => {
        await this.WaitForResponse(api.Cmd);
        this[Method](1);
      }, 60000);
    }
  }

  async DoTaskList(...Script) {
    for (let index in Script) {
      this.logger.debug(`${Script[index].charAt(0).toUpperCase()}${Script[index].slice(1)}` + " start ====== " + index);
      const TaskFile = path.dirname(__dirname) + `/scripts/${Script[index]}.js`;
      try {
        const TaskList = eval(fs.readFileSync(TaskFile, "utf8"));
        for (let Task of TaskList) {
          // 使用for...of遍历数组
          const {
            Cmd,
            Params,
            Describe,
            Handler,
            ErrHandler,
            BeforeHandler,
            DelayTime,
            IsInvalid,
            Immediate,
            DelayService
          } = Task;
          var nowInvalid = false;
          if (IsInvalid && typeof IsInvalid === "function") {
            nowInvalid = IsInvalid();
          }
          if (nowInvalid) {
            continue;
          }
          // 执行任务
          await this.DoTask(
            { Cmd, Params, Describe, Immediate },
            Handler,
            ErrHandler
          );
          await this.WaitForResponse(Cmd, DelayService);

        }
      } catch (e) {
        this.logger.error(`执行任务失败: ${e.message}`);
      }
    }
  }

  /**
   *
   * @param {GameSocket} Socket
   * @param {*} Task
   */
  async DoTask(Task, Handler = [], ErrHandler = []) {
    this.logger.info(
      `正在执行【${Task["Describe"] != undefined && Task["Describe"].length > 0 ? Task["Describe"] : Task["Cmd"]}】... `
    );
    return new Promise((resolve, reject) => {
      Handler = Handler ?? [];
      ErrHandler = ErrHandler ?? [];
      if (Handler) {
        Handler = Array.isArray(Handler) ? Handler : [Handler];
      }
      if (ErrHandler) {
        ErrHandler = Array.isArray(ErrHandler) ? ErrHandler : [ErrHandler];
      }
      Handler.push((data) => {
        resolve(true);
      });
      ErrHandler.push((err) => {
        this.logger.error(
          `Code: ${err.Code}, Cn: ${ErrCode[err.Code] ?? "未知错误"}`,
          err
        );
        reject(false);
      });
      if (typeof Task.Params === "function") {
        this.logger.warn("Task.Params 是一个函数!!!");
        Task.Params = Task.Params();
      } else if (typeof Task.Params === "object") {
        for (let Prop in Task.Params) {
          if (typeof Task.Params[Prop] === "function") {
            Task.Params[Prop] = Task.Params[Prop]();
          } else if (Array.isArray(Task.Params[Prop])) {
            const tmp = Task.Params[Prop];
            for (let k = 0; k < tmp.length; k++) {
              if (typeof tmp[k] === "function") {
                tmp[k] = tmp[k]();
              }
            }
          } else if (typeof Task.Params[Prop] === "object") {
            for (let Prop1 in Task.Params[Prop]) {
              if (typeof Task.Params[Prop][Prop1] === "function") {
                Task.Params[Prop][Prop1] = Task.Params[Prop][Prop1]();
              } else if (Array.isArray(Task.Params[Prop][Prop1])) {
                const tmp = Task.Params[Prop][Prop1];
                for (let k = 0; k < tmp.length; k++) {
                  if (typeof tmp[k] === "function") {
                    tmp[k] = tmp[k]();
                  }
                }
              }
            }
          }
        }
      }
      this.#SocketHandler.Send(Object.assign({}, Task, { Handler, ErrHandler }));
      this.Seq++;
      if (Task.Immediate === true) {
        resolve(Task.Immediate);
      } else if (Task.Immediate === false) {
        reject(Task.Immediate);
      }
      resolve(true);
    });
  }

  async WaitForResponse(Cmd, DelayService = null) {
    return new Promise((resolve) => {
      // let maxWaitTimeoutId;
      const checkResponse = async () => {
        if (this.#SocketHandler._messageCode === 0) {
          // 若有延迟任务
          if (DelayService) {
            await new Promise((delayResolve) => {
              this.logger.info(
                `${Cmd} hit wait: ${DelayService ? DelayService.GetDelay() : 10
                }`
              );
              WorkerManager.ExecAsEmit(
                "wait",
                [{ Delay: DelayService ? DelayService.GetDelay() : 10 }],
                {
                  on: ((payload) => {
                    if (payload.status === true) {
                      delayResolve();
                    }
                  }).bind(this),
                }
              );
            });
          }
          resolve();
        } else {
          setTimeout(checkResponse, 50);
        }
      };
      checkResponse();
    });
  }
}
module.exports = Client;
