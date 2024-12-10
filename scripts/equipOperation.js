// const this.#ServiceManagerManager = require('../app/service_manager');
// /**
//  * @type this.#ServiceManagerManager this.#ServiceManager
//  */
// let this.#ServiceManager;
// -- 以上代码仅为了方便编写脚本命令（取消注释可以使用this.#ServiceManager及链式调用的代码提示，再运行前需要注释掉，否则会导致无法正常运行 --

[
    { Cmd: "equip.forgeEquip", Params: { Grade: 1, SubType: 1 }, Describe: '家宝打造', Immediate: true, Handler: this.#ServiceManager.roleEquip.AddEquipInfo.bind(this.#ServiceManager.roleEquip) },
    { Cmd: "equip.accelerate", Params: {}, Describe: "家宝打造加速", Immediate: true },
    { Cmd: "equip.upLevel", Params: { RoleEquipID: this.#ServiceManager.roleEquip.GetRoleEquipID.bind(this.#ServiceManager.roleEquip, 1) }, Describe: "家宝强化", Immediate: true },
    { Cmd: "equip.resetEquip", Params: { RoleEquipID: this.#ServiceManager.roleEquip.GetRoleEquipID.bind(this.#ServiceManager.roleEquip, 1) }, Describe: "家宝强化重置", Immediate: true },
    // { Cmd: "equip.upEquip", Params: { RoleEquipID: this.#ServiceManager.roleEquip.GetRoleEquipID.bind(this.#ServiceManager.roleEquip, 1), RoleHeroID: this.#ServiceManager.roleHero.GetRoleHeroID.bind(this.#ServiceManager.roleHero, 340) }, Describe: "家宝穿戴", Immediate: true },
    // { Cmd: "equip.downEquip", Params: { RoleEquipID: this.#ServiceManager.roleEquip.GetRoleEquipID.bind(this.#ServiceManager.roleEquip, 1) }, Describe: "家宝卸下", Immediate: true },
    { Cmd: "equip.destroyEquip", Params: { RoleEquipIDs: [this.#ServiceManager.roleEquip.GetRoleEquipID.bind(this.#ServiceManager.roleEquip, 1)] }, Describe: "家宝出售", Immediate: true },
]