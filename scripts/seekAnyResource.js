// const this.#ServiceManagerManager = require('../app/service_manager');
// /**
//  * @type this.#ServiceManagerManager this.#ServiceManager
//  */
// let this.#ServiceManager;
// -- 以上代码仅为了方便编写脚本命令（取消注释可以使用this.#ServiceManager及链式调用的代码提示，再运行前需要注释掉，否则会导致无法正常运行 --

[
    { Cmd: 'role.getMyRoleInfo', Params: {}, Describe: '获取当前玩家信息', Immediate: true },
    { Cmd: "dev.devUnlockFog", Params: {}, Describe: '指定玩家解锁所有迷雾', Immediate: true },
    { Cmd: "world.createEvent", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 1), "RoleArmyIDs": null, "DestPos": this.#ServiceManager.GetSecondResource.bind(this.#ServiceManager), Params: { "Status": 25, "Num": 0, "Back": 1, "Idx": 1 } }, Describe: '创建部队调动事件', Immediate: true, Handler: [this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy), this.#ServiceManager.roleHero.UpdateHeroInfo.bind(this.#ServiceManager.roleHero)] },
    { Cmd: "world.createEvent", Params: { "RoleArmyID": this.#ServiceManager.roleArmy.GetRoleArmyID.bind(this.#ServiceManager.roleArmy, 1), "RoleArmyIDs": null, "DestPos": this.#ServiceManager.GetSecondResource.bind(this.#ServiceManager), Params: { "Status": 25, "Num": 0, "Back": 1, "Idx": 1, "Trigger": 1 } }, Describe: '创建部队调动事件', Immediate: true, Handler: [this.#ServiceManager.roleArmy.UpdateArmyInfo.bind(this.#ServiceManager.roleArmy), this.#ServiceManager.roleHero.UpdateHeroInfo.bind(this.#ServiceManager.roleHero)] },
]