// const this.#ServiceManagerManager = require('../app/service_manager');
// /**
//  * @type this.#ServiceManagerManager this.#ServiceManager
//  */
// let this.#ServiceManager;
// -- 以上代码仅为了方便编写脚本命令（取消注释可以使用this.#ServiceManager及链式调用的代码提示，再运行前需要注释掉，否则会导致无法正常运行 --

[
    { Cmd: "world.worldMapList", Params: {}, Describe: '获取当前玩家地图列表', Immediate: true },
    { Cmd: "faction.getFactionTask", Params: {}, Describe: '查询势力任务', Immediate: true },
    { Cmd: "world.getFactionBranch", Params: {}, Describe: '获取当前阵营支城列表', Immediate: true },
    { Cmd: "world.getApplyList", Params: {}, Describe: '获取支城申请列表', Immediate: true },
    { Cmd: "world.getFiefdomCityList", Params: {}, Describe: '获取当前玩家所在军团的城池封地分配信息', Immediate: true },
    { Cmd: "faction.getCityWarLogList", Params: {}, Describe: '查询攻城战日志', Immediate: true },
    { Cmd: "army.getLineupInfo", Params: {}, Describe: '查询阵容录信息', Immediate: true, Handler: this.#ServiceManager.roleLineup.Init.bind(this.#ServiceManager.roleLineup) },
    { Cmd: "world.getWorldMarkInfo", Params: {}, Describe: '查询标记信息', Immediate: true, Handler: this.#ServiceManager.worldMark.Init.bind(this.#ServiceManager.worldMark) },
    { Cmd: "league.getAttend", Params: {}, Describe: '查询考勤', Immediate: true },
    { Cmd: "chat.getChat", Params: { "ChatType": 1, "ReceiverID": 0, "Start": 0, "Size": 20 }, Describe: '获取聊天信息', Immediate: true },
    { Cmd: "faction.getFactionInfo", Params: { "FactionID": this.#ServiceManager.role.GetFactionID.bind(this.#ServiceManager.role) }, Describe: '查询势力基础信息', Immediate: true },
    { Cmd: "chat.getChat", Params: { "ChatType": 2, "ReceiverID": 0, "Start": 0, "Size": 20 }, Describe: '获取聊天信息', Immediate: true },
    { Cmd: "chat.getChat", Params: { "ChatType": 3, "ReceiverID": 0, "Start": 0, "Size": 20 }, Describe: '获取聊天信息', Immediate: true },
    { Cmd: "roleBuilding.createBuild", Params: { "BuildingID": 2, "SerialNum": 0, "Pos": 0 }, Describe: '新建建筑', Immediate: true, Handler: [this.#ServiceManager.roleCoin.Init.bind(this.#ServiceManager.roleCoin), this.#ServiceManager.roleBuilding.AddBuildingInfo.bind(this.#ServiceManager.roleBuilding)] },
    { Cmd: "roleBuilding.upLevelFinish", Params: { "RoleBuildingID": this.#ServiceManager.roleBuilding.GetRoleBuildingID.bind(this.#ServiceManager.roleBuilding, 2) }, Describe: '验证建筑升级完成', Immediate: true },
    { Cmd: "roleBuilding.activeTown", Params: { "SerialNum": 1, "ArmyClass": 0 }, Describe: '町解锁/激活', Immediate: true },
    { Cmd: "roleBuilding.repairRoad", Params: { "SerialNum": 1, "RoleHeroID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 323) }, Describe: '修建道路', Immediate: true },
    { Cmd: "roleBuilding.finishRoad", Params: { "SerialNum": 1 }, Describe: '完成道路的修建', Immediate: true },
    { Cmd: "roleBuilding.createBuild", Params: { "BuildingID": 23, "SerialNum": 1, "Pos": 2 }, Describe: '新建建筑', Immediate: true, Handler: [this.#ServiceManager.roleCoin.Init.bind(this.#ServiceManager.roleCoin), this.#ServiceManager.roleBuilding.AddBuildingInfo.bind(this.#ServiceManager.roleBuilding)] },
    { Cmd: "roleBuilding.noviceUpLevelAcc", Params: { "RoleBuildingID": this.#ServiceManager.roleBuilding.GetRoleBuildingID.bind(this.#ServiceManager.roleBuilding, 23) }, Describe: '新手引导升级建筑加速完成', Immediate: true },
    { Cmd: "roleTask.drawSerial", Params: {}, Describe: '领取章节奖励', Immediate: true },
    { Cmd: "lottery.lottery", Params: { "LotteryClassID": 16, "Type": "Item", "Times": 2, "Trans": [1, 2], "TransType": "Copper" }, Describe: '抽卡', Immediate: true, Handler: [this.#ServiceManager.roleHero.AddHeroInfo.bind(this.#ServiceManager.roleHero), this.#ServiceManager.roleTask.UpdateTaskInfo.bind(this.#ServiceManager.roleTask)] },
    { Cmd: "army.createArmy", Params: { "ArmyClass": 1, "ArmType": 0 }, Describe: '创建空部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.AddArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 1), "ArmyClass": 1, "Manager": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 340), 1], "Second": null, "Third": null, "ArmyType": 1 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 1), "ArmyClass": 1, "Manager": null, "Second": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 323), 1], "Third": null, "ArmyType": 1 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.assignSoldiers", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 1), "ManagerNum": 0, "SecondNum": 0, "ThirdNum": 0 }, Describe: '补兵', Immediate: true, Handler: [this.#ServiceManager.roleCity.UpdateCityInfo.bind(this.#ServiceManager.roleCity), this.#ServiceManager.roleHero.UpdateHeroInfo.bind(this.#ServiceManager.roleHero)] },
    { Cmd: "world.getEvents", Params: {}, Describe: '拉取地图上所有部队调动信息', Immediate: true, Handler: this.#ServiceManager.roleEvent.Init.bind(this.#ServiceManager.roleEvent) },
    { Cmd: "world.getEntityList", Params: {}, Describe: '获取当前玩家地图建筑列表', Immediate: true, Handler: this.#ServiceManager.entity.Init.bind(this.#ServiceManager.entity) },
    { Cmd: "world.getMapSight", Params: { "CityIDList": [0, 0, 1, 2], "SightIDList": [0, 0, 1, 2] }, Describe: '地图视野', Immediate: true },
    { Cmd: "world.getMapArmy", Params: { "Pos": this.#ServiceManager.roleCity.GetPos.bind(this.#ServiceManager.roleCity, 21), "Idx": 0 }, Describe: '获取资源地，个人建筑怪物', Immediate: true },
    { Cmd: "world.createEvent", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 1), "RoleArmyIDs": null, "DestPos": this.#ServiceManager.roleCity.GetPos.bind(this.#ServiceManager.roleCity, 21), Params: { "Status": 25, "Num": 0, "Back": 1, "Idx": 22, "Trigger": 0, "SeekPos": this.#ServiceManager.roleCity.GetPos.bind(this.#ServiceManager.roleCity, 21), "NoviceGuide": 1, "goHome": 0, "Automatic": 0, "TargetPos": 0, "SameCityDis": 0 } }, Describe: '创建部队调动事件', Immediate: true, Handler: [this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy), this.#ServiceManager.roleHero.UpdateHeroInfo.bind(this.#ServiceManager.roleHero)] },
    { Cmd: "warReport.getDetail", Params: { "WarReportDetailID": 0, "WarReportID": this.#ServiceManager.fightNotice.GetWRID.bind(this.#ServiceManager.fightNotice) }, Describe: '获取详报信息', Immediate: true },
    { Cmd: "world.getMapSight", Params: { "CityIDList": [0, 1], "SightIDList": [0, 1] }, Describe: '地图视野', Immediate: true },
    { Cmd: "world.getMapArmy", Params: { "Pos": this.#ServiceManager.roleCity.GetPos.bind(this.#ServiceManager.roleCity, 22), "Idx": 0 }, Describe: '获取资源地，个人建筑怪物', Immediate: true },
    { Cmd: "world.createEvent", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 1), "RoleArmyIDs": null, "DestPos": this.#ServiceManager.roleCity.GetPos.bind(this.#ServiceManager.roleCity, 22), Params: { "Status": 25, "Num": 0, "Back": 1, "Idx": 23, "Trigger": 0, "SeekPos": this.#ServiceManager.roleCity.GetPos.bind(this.#ServiceManager.roleCity, 22), "NoviceGuide": 0, "goHome": 0, "Automatic": 0, "TargetPos": 0, "SameCityDis": 0 } }, Describe: '创建部队调动事件', Immediate: true, Handler: [this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy), this.#ServiceManager.roleHero.UpdateHeroInfo.bind(this.#ServiceManager.roleHero)] },
    { Cmd: "army.assignSoldiers", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 1), "ManagerNum": 300, "SecondNum": 300, "ThirdNum": 0 }, Describe: '补兵', Immediate: true, Handler: [this.#ServiceManager.roleCity.UpdateCityInfo.bind(this.#ServiceManager.roleCity), this.#ServiceManager.roleHero.UpdateHeroInfo.bind(this.#ServiceManager.roleHero)] },
    { Cmd: "role.finishGuide", Params: { "Guide": 0, "GuideStep": 8 }, Describe: '当前玩家完成新手引导', Immediate: true },
    { Cmd: "world.getMapSight", Params: { "CityIDList": [0, 1, 2], "SightIDList": [0, 1, 2] }, Describe: '地图视野', Immediate: true },
    { Cmd: "world.getMapRes", Params: { "Pos": this.#ServiceManager.roleCity.GetPos.bind(this.#ServiceManager.roleCity, 3) }, Describe: '获取资源地占地情况', Immediate: true },
    { Cmd: "world.getMapArmy", Params: { "Pos": this.#ServiceManager.roleCity.GetPos.bind(this.#ServiceManager.roleCity, 3), "Idx": 1 }, Describe: '获取资源地，个人建筑怪物', Immediate: true },
    { Cmd: "world.createEvent", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 1), "RoleArmyIDs": null, "DestPos": this.#ServiceManager.roleCity.GetPos.bind(this.#ServiceManager.roleCity), Params: { "Status": 9, "Num": 1, "Back": 1, "Idx": 1, "Trigger": 0, "SeekPos": 0, "NoviceGuide": 1, "goHome": 0, "Automatic": 0, "TargetPos": 0, "SameCityDis": 0 } }, Describe: '创建部队调动事件', Immediate: true, Handler: [this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy), this.#ServiceManager.roleHero.UpdateHeroInfo.bind(this.#ServiceManager.roleHero)] },
    { Cmd: "roleTask.drawSerial", Params: {}, Describe: '领取章节奖励', Immediate: true },
    { Cmd: "role.recruit", Params: { "Count": this.#ServiceManager.roleCity.NeedRecruitNum.bind(this.#ServiceManager.roleCity) }, Describe: '招募兵蜂', Immediate: true },
    { Cmd: "world.getMapSight", Params: { "CityIDList": [0, 1], "SightIDList": [0, 1] }, Describe: '地图视野', Immediate: true },
    { Cmd: "world.getMapArmy", Params: { "Pos": this.#ServiceManager.roleCity.GetPos.bind(this.#ServiceManager.roleCity, 23), "Idx": 0 }, Describe: '获取资源地，个人建筑怪物', Immediate: true },
    { Cmd: "world.createEvent", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 1), "RoleArmyIDs": null, "DestPos": this.#ServiceManager.roleCity.GetPos.bind(this.#ServiceManager.roleCity, 23), Params: { "Status": 25, "Num": 0, "Back": 1, "Idx": 24, "Trigger": 0, "SeekPos": this.#ServiceManager.roleCity.GetPos.bind(this.#ServiceManager.roleCity, 23), "NoviceGuide": 0, "goHome": 0, "Automatic": 0, "TargetPos": 0, "SameCityDis": 0 } }, Describe: '创建部队调动事件', Immediate: true, Handler: [this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy), this.#ServiceManager.roleHero.UpdateHeroInfo.bind(this.#ServiceManager.roleHero)] },
    { Cmd: "role.finishGuide", Params: { "Guide": 1, "GuideStep": 0 }, Describe: '当前玩家完成新手引导', Immediate: true },
    { Cmd: "roleTask.drawAward", Params: { "TaskID": 11 }, Describe: '领取任务奖励', Immediate: true }
]