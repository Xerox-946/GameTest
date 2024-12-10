// const this.#ServiceManagerManager = require('../app/service_manager');
// /**
//  * @type this.#ServiceManagerManager this.#ServiceManager
//  */
// let this.#ServiceManager;
// -- 以上代码仅为了方便编写脚本命令（取消注释可以使用this.#ServiceManager及链式调用的代码提示，再运行前需要注释掉，否则会导致无法正常运行 --

[
    { Cmd: "dev.devRecruit", Params: { HeroID: 1, Level: 1 }, Describe: '招募指定武将', Immediate: true, Handler: this.#ServiceManager.roleHero.AddHeroInfo.bind(this.#ServiceManager.roleHero) },
    { Cmd: "roleHero.lockHero", Params: { RoleHeroID: this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 1), IsLock: 0 }, Describe: '设置兵种锁定', Immediate: true },
    { Cmd: "roleHero.tranHero", Params: { RoleHeroIDs: [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 1)], TransType: "Copper" }, Describe: '兵种转化技能点', Immediate: true },
    { Cmd: "dev.devRecruit", Params: { HeroID: 300, Level: 1 }, Describe: '招募指定武将', Immediate: true, Handler: this.#ServiceManager.roleHero.AddHeroInfo.bind(this.#ServiceManager.roleHero) },
    { Cmd: "roleHero.tranHero", Params: { RoleHeroIDs: [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 300)], TransType: "Copper" }, Describe: '兵种转化技能点', Immediate: true },
    { Cmd: "dev.devRecruit", Params: { HeroID: 386, Level: 1 }, Describe: '招募指定武将', Immediate: true, Handler: this.#ServiceManager.roleHero.AddHeroInfo.bind(this.#ServiceManager.roleHero) },
    { Cmd: "roleHero.tranHero", Params: { RoleHeroIDs: [this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 386)], TransType: "Copper" }, Describe: '兵种转化技能点', Immediate: true },
]