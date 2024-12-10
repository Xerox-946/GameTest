// const this.#ServiceManagerManager = require('../app/service_manager');
// /**
//  * @type this.#ServiceManagerManager this.#ServiceManager
//  */
// let this.#ServiceManager;
// -- 以上代码仅为了方便编写脚本命令（取消注释可以使用this.#ServiceManager及链式调用的代码提示，再运行前需要注释掉，否则会导致无法正常运行 --

[
    { Cmd: 'role.getMyRoleInfo', Params: {}, Describe: '获取当前玩家信息', Immediate: true },
    { Cmd: "dev.devConscript", "Params": { "Soldiers": 9999999 }, Describe: '补兵', Immediate: true },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 1), "ManagerID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 9), "SecondID": 0, "ThirdID": 0, "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 1), "ManagerID": 0, "SecondID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 29), "ThirdID": 0, "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 1), "ManagerID": 0, "SecondID": 0, "ThirdID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 41), "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 1), "ArmyClass": 1, "Manager": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 9), 1], "Second": null, "Third": null, "ArmyType": 2 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 1), "ArmyClass": 1, "Manager": null, "Second": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 29), 1], "Third": null, "ArmyType": 2 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 1), "ArmyClass": 1, "Manager": null, "Second": null, "Third": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 41), 1], "ArmyType": 2 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.assignSoldiers", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 1), "ManagerNum": 0, "SecondNum": 0, "ThirdNum": 0 }, Describe: '补兵', Immediate: true, Handler: [this.#ServiceManager.roleCity.UpdateCityInfo.bind(this.#ServiceManager.roleCity), this.#ServiceManager.roleHero.UpdateHeroInfo.bind(this.#ServiceManager.roleHero)] },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 2), "ManagerID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 22), "SecondID": 0, "ThirdID": 0, "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 2), "ManagerID": 0, "SecondID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 35), "ThirdID": 0, "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 2), "ManagerID": 0, "SecondID": 0, "ThirdID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 40), "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 2), "ArmyClass": 2, "Manager": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 22), 1], "Second": null, "Third": null, "ArmyType": 5 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 2), "ArmyClass": 2, "Manager": null, "Second": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 35), 1], "Third": null, "ArmyType": 5 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 2), "ArmyClass": 2, "Manager": null, "Second": null, "Third": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 40), 1], "ArmyType": 5 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.assignSoldiers", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 2), "ManagerNum": 0, "SecondNum": 0, "ThirdNum": 0 }, Describe: '补兵', Immediate: true, Handler: [this.#ServiceManager.roleCity.UpdateCityInfo.bind(this.#ServiceManager.roleCity), this.#ServiceManager.roleHero.UpdateHeroInfo.bind(this.#ServiceManager.roleHero)] },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 3), "ManagerID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 63), "SecondID": 0, "ThirdID": 0, "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 3), "ManagerID": 0, "SecondID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 66), "ThirdID": 0, "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 3), "ManagerID": 0, "SecondID": 0, "ThirdID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 67), "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 3), "ArmyClass": 3, "Manager": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 63), 1], "Second": null, "Third": null, "ArmyType": 3 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 3), "ArmyClass": 3, "Manager": null, "Second": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 66), 1], "Third": null, "ArmyType": 3 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 3), "ArmyClass": 3, "Manager": null, "Second": null, "Third": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 67), 1], "ArmyType": 3 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.assignSoldiers", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 3), "ManagerNum": 0, "SecondNum": 0, "ThirdNum": 0 }, Describe: '补兵', Immediate: true, Handler: [this.#ServiceManager.roleCity.UpdateCityInfo.bind(this.#ServiceManager.roleCity), this.#ServiceManager.roleHero.UpdateHeroInfo.bind(this.#ServiceManager.roleHero)] },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 4), "ManagerID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 15), "SecondID": 0, "ThirdID": 0, "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 4), "ManagerID": 0, "SecondID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 78), "ThirdID": 0, "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 4), "ManagerID": 0, "SecondID": 0, "ThirdID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 103), "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 4), "ArmyClass": 4, "Manager": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 15), 1], "Second": null, "Third": null, "ArmyType": 4 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 4), "ArmyClass": 4, "Manager": null, "Second": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 78), 1], "Third": null, "ArmyType": 4 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 4), "ArmyClass": 4, "Manager": null, "Second": null, "Third": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 103), 1], "ArmyType": 4 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.assignSoldiers", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 4), "ManagerNum": 0, "SecondNum": 0, "ThirdNum": 0 }, Describe: '补兵', Immediate: true, Handler: [this.#ServiceManager.roleCity.UpdateCityInfo.bind(this.#ServiceManager.roleCity), this.#ServiceManager.roleHero.UpdateHeroInfo.bind(this.#ServiceManager.roleHero)] },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 5), "ManagerID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 1), "SecondID": 0, "ThirdID": 0, "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 5), "ManagerID": 0, "SecondID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 2), "ThirdID": 0, "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 5), "ManagerID": 0, "SecondID": 0, "ThirdID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 10), "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 5), "ArmyClass": 5, "Manager": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 1), 1], "Second": null, "Third": null, "ArmyType": 1 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 5), "ArmyClass": 5, "Manager": null, "Second": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 2), 1], "Third": null, "ArmyType": 1 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 5), "ArmyClass": 5, "Manager": null, "Second": null, "Third": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 10), 1], "ArmyType": 1 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.assignSoldiers", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 5), "ManagerNum": 0, "SecondNum": 0, "ThirdNum": 0 }, Describe: '补兵', Immediate: true, Handler: [this.#ServiceManager.roleCity.UpdateCityInfo.bind(this.#ServiceManager.roleCity), this.#ServiceManager.roleHero.UpdateHeroInfo.bind(this.#ServiceManager.roleHero)] },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 1), "ManagerID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 9), "SecondID": 0, "ThirdID": 0, "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 1), "ArmyClass": 1, "Manager": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 9), 1], "Second": null, "Third": null, "ArmyType": 2 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 1), "ManagerID": 0, "SecondID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 29), "ThirdID": 0, "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 1), "ArmyClass": 1, "Manager": null, "Second": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 29), 1], "Third": null, "ArmyType": 2 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 1), "ManagerID": 0, "SecondID": 0, "ThirdID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 41), "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 1), "ArmyClass": 1, "Manager": null, "Second": null, "Third": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 41), 1], "ArmyType": 2 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.assignSoldiers", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 1), "ManagerNum": 0, "SecondNum": 0, "ThirdNum": 0 }, Describe: '补兵', Immediate: true, Handler: [this.#ServiceManager.roleCity.UpdateCityInfo.bind(this.#ServiceManager.roleCity), this.#ServiceManager.roleHero.UpdateHeroInfo.bind(this.#ServiceManager.roleHero)] },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 2), "ManagerID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 22), "SecondID": 0, "ThirdID": 0, "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 2), "ArmyClass": 2, "Manager": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 22), 1], "Second": null, "Third": null, "ArmyType": 5 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 2), "ManagerID": 0, "SecondID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 35), "ThirdID": 0, "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 2), "ArmyClass": 2, "Manager": null, "Second": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 35), 1], "Third": null, "ArmyType": 5 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 2), "ManagerID": 0, "SecondID": 0, "ThirdID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 40), "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 2), "ArmyClass": 2, "Manager": null, "Second": null, "Third": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 40), 1], "ArmyType": 5 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.assignSoldiers", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 2), "ManagerNum": 0, "SecondNum": 0, "ThirdNum": 0 }, Describe: '补兵', Immediate: true, Handler: [this.#ServiceManager.roleCity.UpdateCityInfo.bind(this.#ServiceManager.roleCity), this.#ServiceManager.roleHero.UpdateHeroInfo.bind(this.#ServiceManager.roleHero)] },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 3), "ManagerID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 63), "SecondID": 0, "ThirdID": 0, "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 3), "ArmyClass": 3, "Manager": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 63), 1], "Second": null, "Third": null, "ArmyType": 3 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 3), "ManagerID": 0, "SecondID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 66), "ThirdID": 0, "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 3), "ArmyClass": 3, "Manager": null, "Second": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 66), 1], "Third": null, "ArmyType": 3 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 3), "ManagerID": 0, "SecondID": 0, "ThirdID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 67), "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 3), "ArmyClass": 3, "Manager": null, "Second": null, "Third": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 67), 1], "ArmyType": 3 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.assignSoldiers", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 3), "ManagerNum": 0, "SecondNum": 0, "ThirdNum": 0 }, Describe: '补兵', Immediate: true, Handler: [this.#ServiceManager.roleCity.UpdateCityInfo.bind(this.#ServiceManager.roleCity), this.#ServiceManager.roleHero.UpdateHeroInfo.bind(this.#ServiceManager.roleHero)] },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 4), "ManagerID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 15), "SecondID": 0, "ThirdID": 0, "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 4), "ArmyClass": 4, "Manager": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 15), 1], "Second": null, "Third": null, "ArmyType": 4 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 4), "ManagerID": 0, "SecondID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 78), "ThirdID": 0, "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 4), "ArmyClass": 4, "Manager": null, "Second": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 78), 1], "Third": null, "ArmyType": 4 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 4), "ManagerID": 0, "SecondID": 0, "ThirdID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 103), "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 4), "ArmyClass": 4, "Manager": null, "Second": null, "Third": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 103), 1], "ArmyType": 4 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.assignSoldiers", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 4), "ManagerNum": 0, "SecondNum": 0, "ThirdNum": 0 }, Describe: '补兵', Immediate: true, Handler: [this.#ServiceManager.roleCity.UpdateCityInfo.bind(this.#ServiceManager.roleCity), this.#ServiceManager.roleHero.UpdateHeroInfo.bind(this.#ServiceManager.roleHero)] },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 5), "ManagerID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 1), "SecondID": 0, "ThirdID": 0, "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 5), "ArmyClass": 5, "Manager": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 1), 1], "Second": null, "Third": null, "ArmyType": 1 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 5), "ManagerID": 0, "SecondID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 2), "ThirdID": 0, "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 5), "ArmyClass": 5, "Manager": null, "Second": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 2), 1], "Third": null, "ArmyType": 1 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.downHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 5), "ManagerID": 0, "SecondID": 0, "ThirdID": this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 10), "ReReservist": 1 }, Describe: '下阵解散部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.upHero", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 5), "ArmyClass": 5, "Manager": null, "Second": null, "Third": [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 10), 1], "ArmyType": 1 }, Describe: '上阵创建部队', Immediate: true, Handler: this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy) },
    { Cmd: "army.assignSoldiers", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 5), "ManagerNum": 0, "SecondNum": 0, "ThirdNum": 0 }, Describe: '补兵', Immediate: true, Handler: [this.#ServiceManager.roleCity.UpdateCityInfo.bind(this.#ServiceManager.roleCity), this.#ServiceManager.roleHero.UpdateHeroInfo.bind(this.#ServiceManager.roleHero)] },
]