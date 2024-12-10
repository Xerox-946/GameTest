// const this.#ServiceManagerManager = require('../app/service_manager');
// /**
//  * @type this.#ServiceManagerManager this.#ServiceManager
//  */
// let this.#ServiceManager;
// -- 以上代码仅为了方便编写脚本命令（取消注释可以使用this.#ServiceManager及链式调用的代码提示，再运行前需要注释掉，否则会导致无法正常运行 --

[
    { Cmd: 'role.getMyRoleInfo', Params: {}, Describe: '获取当前玩家信息', Immediate: true },
    { Cmd: "skill.upgradeSkill", Params: { RoleHeroID: this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 340), Pos: 1 } },
    { Cmd: "skill.upgradeSkill", Params: { RoleHeroID: this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 323), Pos: 1 } },
]