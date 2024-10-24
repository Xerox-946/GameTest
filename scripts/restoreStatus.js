// const this.#ServiceManagerManager = require('../app/service_manager');
// /**
//  * @type this.#ServiceManagerManager this.#ServiceManager
//  */
// let this.#ServiceManager;
// -- 以上代码仅为了方便编写脚本命令（取消注释可以使用this.#ServiceManager及链式调用的代码提示，再运行前需要注释掉，否则会导致无法正常运行 --

[
    { Cmd: "dev.devConscript", Params: { "Soldiers": 9999999 }, Describe: '补兵', Immediate: true },
    { Cmd: "army.assignSoldiers", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 1), "ManagerNum": 0, "SecondNum": 0, "ThirdNum": 0 }, Describe: '补兵', Immediate: true, Handler: [this.#ServiceManager.roleCity.UpdateCityInfo.bind(this.#ServiceManager.roleCity), this.#ServiceManager.roleHero.UpdateHeroInfo.bind(this.#ServiceManager.roleHero)] },
    { Cmd: "army.assignSoldiers", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 2), "ManagerNum": 0, "SecondNum": 0, "ThirdNum": 0 }, Describe: '补兵', Immediate: true, Handler: [this.#ServiceManager.roleCity.UpdateCityInfo.bind(this.#ServiceManager.roleCity), this.#ServiceManager.roleHero.UpdateHeroInfo.bind(this.#ServiceManager.roleHero)] },
    { Cmd: "army.assignSoldiers", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 3), "ManagerNum": 0, "SecondNum": 0, "ThirdNum": 0 }, Describe: '补兵', Immediate: true, Handler: [this.#ServiceManager.roleCity.UpdateCityInfo.bind(this.#ServiceManager.roleCity), this.#ServiceManager.roleHero.UpdateHeroInfo.bind(this.#ServiceManager.roleHero)] },
    { Cmd: "army.assignSoldiers", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 4), "ManagerNum": 0, "SecondNum": 0, "ThirdNum": 0 }, Describe: '补兵', Immediate: true, Handler: [this.#ServiceManager.roleCity.UpdateCityInfo.bind(this.#ServiceManager.roleCity), this.#ServiceManager.roleHero.UpdateHeroInfo.bind(this.#ServiceManager.roleHero)] },
    { Cmd: "army.assignSoldiers", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 5), "ManagerNum": 0, "SecondNum": 0, "ThirdNum": 0 }, Describe: '补兵', Immediate: true, Handler: [this.#ServiceManager.roleCity.UpdateCityInfo.bind(this.#ServiceManager.roleCity), this.#ServiceManager.roleHero.UpdateHeroInfo.bind(this.#ServiceManager.roleHero)] },
]