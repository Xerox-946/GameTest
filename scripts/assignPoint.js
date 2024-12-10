// const this.#ServiceManagerManager = require('../app/service_manager');
// /**
//  * @type this.#ServiceManagerManager this.#ServiceManager
//  */
// let this.#ServiceManager;
// -- 以上代码仅为了方便编写脚本命令（取消注释可以使用this.#ServiceManager及链式调用的代码提示，再运行前需要注释掉，否则会导致无法正常运行 --

[
    { Cmd: "dev.devRecruit", Params: { HeroID: 1, Level: 50 }, Describe: '招募指定武将', Immediate: true, Handler: this.#ServiceManager.roleHero.AddHeroInfo.bind(this.#ServiceManager.roleHero) },
    { Cmd: "roleHero.assignPoint", Params: { RoleHeroID: this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 1), Strength: 0, Chief: 0, Strategy: 50, Speed: 0, Politics: 0 }, Describe: '分配自由点', Immediate: true }
]