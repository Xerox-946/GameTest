// const this.#ServiceManagerManager = require('../app/service_manager');
// /**
//  * @type this.#ServiceManagerManager this.#ServiceManager
//  */
// let this.#ServiceManager;
// -- 以上代码仅为了方便编写脚本命令（取消注释可以使用this.#ServiceManager及链式调用的代码提示，再运行前需要注释掉，否则会导致无法正常运行 --

[
    { Cmd: 'role.getMyRoleInfo', Params: {}, Describe: '获取当前玩家信息', Immediate: true },
    { Cmd: "dev.devAddCoin", Params: { "Num": 9999999 }, Describe: '增加资源', Immediate: true },
    { Cmd: "roleBuilding.upLevel", Params: { "RoleBuildingID": this.#ServiceManager.roleBuilding.GetRoleBuildingID.bind(this.#ServiceManager.roleBuilding, 1) }, Describe: '升级天守', Immediate: true },
    { Cmd: "roleBuilding.upLevelAcc", Params: { "RoleBuildingID": this.#ServiceManager.roleBuilding.GetRoleBuildingID.bind(this.#ServiceManager.roleBuilding, 1) }, Describe: '升级天守加速完成', Immediate: true },
    { Cmd: "roleBuilding.createBuild", Params: { "BuildingID": 2, "SerialNum": 0, "Pos": 0 }, Describe: '建造仓库', Immediate: true, IsInvalid: this.#ServiceManager.roleBuilding.CheckContainsBuilding.bind(this.#ServiceManager.roleBuilding, 2), Handler: [this.#ServiceManager.roleCoin.Init.bind(this.#ServiceManager.roleCoin), this.#ServiceManager.roleBuilding.AddBuildingInfo.bind(this.#ServiceManager.roleBuilding)] },
    { Cmd: "roleBuilding.upLevelAcc", Params: { "RoleBuildingID": this.#ServiceManager.roleBuilding.GetRoleBuildingID.bind(this.#ServiceManager.roleBuilding, 2) }, Describe: '升级仓库加速完成', Immediate: true, IsInvalid: this.#ServiceManager.roleBuilding.CheckContainsBuilding.bind(this.#ServiceManager.roleBuilding, 2) },
    { Cmd: "roleBuilding.upLevel", Params: { "RoleBuildingID": this.#ServiceManager.roleBuilding.GetRoleBuildingID.bind(this.#ServiceManager.roleBuilding, 2) }, Describe: '升级仓库', Immediate: true },
    { Cmd: "roleBuilding.upLevelAcc", Params: { "RoleBuildingID": this.#ServiceManager.roleBuilding.GetRoleBuildingID.bind(this.#ServiceManager.roleBuilding, 2) }, Describe: '升级仓库加速完成', Immediate: true },
    { Cmd: "dev.devAddCoin", Params: { "Num": 9999999 }, Describe: '增加资源', Immediate: true },
    { Cmd: "roleBuilding.createBuild", Params: { "BuildingID": 3, "SerialNum": 0, "Pos": 0 }, Describe: '建造工房', Immediate: true, IsInvalid: this.#ServiceManager.roleBuilding.CheckContainsBuilding.bind(this.#ServiceManager.roleBuilding, 3), Handler: [this.#ServiceManager.roleCoin.Init.bind(this.#ServiceManager.roleCoin), this.#ServiceManager.roleBuilding.AddBuildingInfo.bind(this.#ServiceManager.roleBuilding)] },
    { Cmd: "roleBuilding.upLevelAcc", Params: { "RoleBuildingID": this.#ServiceManager.roleBuilding.GetRoleBuildingID.bind(this.#ServiceManager.roleBuilding, 3) }, Describe: '升级工房加速完成', Immediate: true, IsInvalid: this.#ServiceManager.roleBuilding.CheckContainsBuilding.bind(this.#ServiceManager.roleBuilding, 3) },
    { Cmd: "roleBuilding.upLevel", Params: { "RoleBuildingID": this.#ServiceManager.roleBuilding.GetRoleBuildingID.bind(this.#ServiceManager.roleBuilding, 3) }, Describe: '升级工房', Immediate: true },
    { Cmd: "roleBuilding.upLevelAcc", Params: { "RoleBuildingID": this.#ServiceManager.roleBuilding.GetRoleBuildingID.bind(this.#ServiceManager.roleBuilding, 3) }, Describe: '升级工房加速完成', Immediate: true },
    { Cmd: "dev.devAddCoin", Params: { "Num": 9999999 }, Describe: '增加资源', Immediate: true },
    { Cmd: "roleBuilding.createBuild", Params: { "BuildingID": 4, "SerialNum": 0, "Pos": 0 }, Describe: '建造兵舍', Immediate: true, IsInvalid: this.#ServiceManager.roleBuilding.CheckContainsBuilding.bind(this.#ServiceManager.roleBuilding, 4), Handler: [this.#ServiceManager.roleCoin.Init.bind(this.#ServiceManager.roleCoin), this.#ServiceManager.roleBuilding.AddBuildingInfo.bind(this.#ServiceManager.roleBuilding)] },
    { Cmd: "roleBuilding.upLevelAcc", Params: { "RoleBuildingID": this.#ServiceManager.roleBuilding.GetRoleBuildingID.bind(this.#ServiceManager.roleBuilding, 4) }, Describe: '升级兵舍加速完成', Immediate: true, IsInvalid: this.#ServiceManager.roleBuilding.CheckContainsBuilding.bind(this.#ServiceManager.roleBuilding, 4) },
    { Cmd: "roleBuilding.upLevel", Params: { "RoleBuildingID": this.#ServiceManager.roleBuilding.GetRoleBuildingID.bind(this.#ServiceManager.roleBuilding, 4) }, Describe: '升级兵舍', Immediate: true },
    { Cmd: "roleBuilding.upLevelAcc", Params: { "RoleBuildingID": this.#ServiceManager.roleBuilding.GetRoleBuildingID.bind(this.#ServiceManager.roleBuilding, 4) }, Describe: '升级兵舍加速完成', Immediate: true },
    { Cmd: "dev.devAddCoin", Params: { "Num": 9999999 }, Describe: '增加资源', Immediate: true },
    { Cmd: "roleBuilding.createBuild", Params: { "BuildingID": 5, "SerialNum": 0, "Pos": 0 }, Describe: '建造铁炮藏', Immediate: true, IsInvalid: this.#ServiceManager.roleBuilding.CheckContainsBuilding.bind(this.#ServiceManager.roleBuilding, 5), Handler: [this.#ServiceManager.roleCoin.Init.bind(this.#ServiceManager.roleCoin), this.#ServiceManager.roleBuilding.AddBuildingInfo.bind(this.#ServiceManager.roleBuilding)] },
    { Cmd: "roleBuilding.upLevelAcc", Params: { "RoleBuildingID": this.#ServiceManager.roleBuilding.GetRoleBuildingID.bind(this.#ServiceManager.roleBuilding, 5) }, Describe: '升级铁炮藏加速完成', Immediate: true, IsInvalid: this.#ServiceManager.roleBuilding.CheckContainsBuilding.bind(this.#ServiceManager.roleBuilding, 5) },
    { Cmd: "roleBuilding.upLevel", Params: { "RoleBuildingID": this.#ServiceManager.roleBuilding.GetRoleBuildingID.bind(this.#ServiceManager.roleBuilding, 5) }, Describe: '升级铁炮藏', Immediate: true },
    { Cmd: "roleBuilding.upLevelAcc", Params: { "RoleBuildingID": this.#ServiceManager.roleBuilding.GetRoleBuildingID.bind(this.#ServiceManager.roleBuilding, 5) }, Describe: '升级铁炮藏加速完成', Immediate: true },
    { Cmd: "dev.devAddCoin", Params: { "Num": 9999999 }, Describe: '增加资源', Immediate: true },
    { Cmd: "roleBuilding.createBuild", Params: { "BuildingID": 6, "SerialNum": 0, "Pos": 0 }, Describe: '建造兵器库', Immediate: true, IsInvalid: this.#ServiceManager.roleBuilding.CheckContainsBuilding.bind(this.#ServiceManager.roleBuilding, 6), Handler: [this.#ServiceManager.roleCoin.Init.bind(this.#ServiceManager.roleCoin), this.#ServiceManager.roleBuilding.AddBuildingInfo.bind(this.#ServiceManager.roleBuilding)] },
    { Cmd: "roleBuilding.upLevelAcc", Params: { "RoleBuildingID": this.#ServiceManager.roleBuilding.GetRoleBuildingID.bind(this.#ServiceManager.roleBuilding, 6) }, Describe: '升级兵器库加速完成', Immediate: true, IsInvalid: this.#ServiceManager.roleBuilding.CheckContainsBuilding.bind(this.#ServiceManager.roleBuilding, 6) },
    { Cmd: "roleBuilding.upLevel", Params: { "RoleBuildingID": this.#ServiceManager.roleBuilding.GetRoleBuildingID.bind(this.#ServiceManager.roleBuilding, 6) }, Describe: '升级兵器库', Immediate: true },
    { Cmd: "roleBuilding.upLevelAcc", Params: { "RoleBuildingID": this.#ServiceManager.roleBuilding.GetRoleBuildingID.bind(this.#ServiceManager.roleBuilding, 6) }, Describe: '升级兵器库加速完成', Immediate: true },
    { Cmd: "dev.devAddCoin", Params: { "Num": 9999999 }, Describe: '增加资源', Immediate: true },
    { Cmd: "roleBuilding.createBuild", Params: { "BuildingID": 8, "SerialNum": 0, "Pos": 0 }, Describe: '建造城门', Immediate: true, IsInvalid: this.#ServiceManager.roleBuilding.CheckContainsBuilding.bind(this.#ServiceManager.roleBuilding, 8), Handler: [this.#ServiceManager.roleCoin.Init.bind(this.#ServiceManager.roleCoin), this.#ServiceManager.roleBuilding.AddBuildingInfo.bind(this.#ServiceManager.roleBuilding)] },
    { Cmd: "roleBuilding.upLevelAcc", Params: { "RoleBuildingID": this.#ServiceManager.roleBuilding.GetRoleBuildingID.bind(this.#ServiceManager.roleBuilding, 8) }, Describe: '升级城门加速完成', Immediate: true, IsInvalid: this.#ServiceManager.roleBuilding.CheckContainsBuilding.bind(this.#ServiceManager.roleBuilding, 8) },
    { Cmd: "roleBuilding.upLevel", Params: { "RoleBuildingID": this.#ServiceManager.roleBuilding.GetRoleBuildingID.bind(this.#ServiceManager.roleBuilding, 8) }, Describe: '升级城门', Immediate: true },
    { Cmd: "roleBuilding.upLevelAcc", Params: { "RoleBuildingID": this.#ServiceManager.roleBuilding.GetRoleBuildingID.bind(this.#ServiceManager.roleBuilding, 8) }, Describe: '升级城门加速完成', Immediate: true },
]