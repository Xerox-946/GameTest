// const this.#ServiceManagerManager = require('../app/service_manager');
// /**
//  * @type this.#ServiceManagerManager this.#ServiceManager
//  */
// let this.#ServiceManager;
// -- 以上代码仅为了方便编写脚本命令（取消注释可以使用this.#ServiceManager及链式调用的代码提示，再运行前需要注释掉，否则会导致无法正常运行 --

[
    { Cmd: "dev.devAddItem", Params: { "ItemID": 44, "Num": 10000 }, Immediate: true, Handler: this.#ServiceManager.roleItem.AddItemInfo.bind(this.#ServiceManager.roleItem) },
    { Cmd: "dev.devAddItem", Params: { "ItemID": 300, "Num": 10000 }, Immediate: true, Handler: this.#ServiceManager.roleItem.AddItemInfo.bind(this.#ServiceManager.roleItem) },
    { Cmd: "dev.devAddItem", Params: { "ItemID": 301, "Num": 10000 }, Immediate: true, Handler: this.#ServiceManager.roleItem.AddItemInfo.bind(this.#ServiceManager.roleItem) },
    { Cmd: "dev.devAddItem", Params: { "ItemID": 302, "Num": 10000 }, Immediate: true, Handler: this.#ServiceManager.roleItem.AddItemInfo.bind(this.#ServiceManager.roleItem) },
    // { Cmd: "dev.devAddItem", Params: { "ItemID": 303, "Num": 10000 }, Immediate: true, Handler: this.#ServiceManager.roleItem.AddItemInfo.bind(this.#ServiceManager.roleItem) },
    // { Cmd: "dev.devAddItem", Params: { "ItemID": 304, "Num": 10000 }, Immediate: true, Handler: this.#ServiceManager.roleItem.AddItemInfo.bind(this.#ServiceManager.roleItem) },
    // { Cmd: "dev.devAddItem", Params: { "ItemID": 305, "Num": 10000 }, Immediate: true, Handler: this.#ServiceManager.roleItem.AddItemInfo.bind(this.#ServiceManager.roleItem) },
    // { Cmd: "dev.devAddItem", Params: { "ItemID": 306, "Num": 10000 }, Immediate: true, Handler: this.#ServiceManager.roleItem.AddItemInfo.bind(this.#ServiceManager.roleItem) },
    { Cmd: "roleItem.useItem", Params: { "RoleItemID": this.#ServiceManager.roleItem.GetRoleItemID.bind(this.#ServiceManager.roleItem, 44), "Params": { "Num": 10 } }, Immediate: true },
    { Cmd: "roleItem.useItem", Params: { "RoleItemID": this.#ServiceManager.roleItem.GetRoleItemID.bind(this.#ServiceManager.roleItem, 44), "Params": { "Num": 10 } }, Immediate: true },
    { Cmd: "roleItem.useItem", Params: { "RoleItemID": this.#ServiceManager.roleItem.GetRoleItemID.bind(this.#ServiceManager.roleItem, 300), "Params": { "Num": 9999 } }, Immediate: true },
    { Cmd: "roleItem.useItem", Params: { "RoleItemID": this.#ServiceManager.roleItem.GetRoleItemID.bind(this.#ServiceManager.roleItem, 44), "Params": { "Num": 10 } }, Immediate: true },
    { Cmd: "roleItem.useItem", Params: { "RoleItemID": this.#ServiceManager.roleItem.GetRoleItemID.bind(this.#ServiceManager.roleItem, 44), "Params": { "Num": 10 } }, Immediate: true },
    { Cmd: "roleItem.useItem", Params: { "RoleItemID": this.#ServiceManager.roleItem.GetRoleItemID.bind(this.#ServiceManager.roleItem, 301), "Params": { "Num": 9999 } }, Immediate: true },
    { Cmd: "roleItem.useItem", Params: { "RoleItemID": this.#ServiceManager.roleItem.GetRoleItemID.bind(this.#ServiceManager.roleItem, 44), "Params": { "Num": 10 } }, Immediate: true },
    { Cmd: "roleItem.useItem", Params: { "RoleItemID": this.#ServiceManager.roleItem.GetRoleItemID.bind(this.#ServiceManager.roleItem, 44), "Params": { "Num": 10 } }, Immediate: true },
    { Cmd: "roleItem.useItem", Params: { "RoleItemID": this.#ServiceManager.roleItem.GetRoleItemID.bind(this.#ServiceManager.roleItem, 302), "Params": { "Num": 9999 } }, Immediate: true },
    { Cmd: "roleItem.useItem", Params: { "RoleItemID": this.#ServiceManager.roleItem.GetRoleItemID.bind(this.#ServiceManager.roleItem, 44), "Params": { "Num": 10 } }, Immediate: true },
    { Cmd: "roleItem.useItem", Params: { "RoleItemID": this.#ServiceManager.roleItem.GetRoleItemID.bind(this.#ServiceManager.roleItem, 44), "Params": { "Num": 10 } }, Immediate: true },
    // { Cmd: "roleItem.useItem", Params: { "RoleItemID": this.#ServiceManager.roleItem.GetRoleItemID.bind(this.#ServiceManager.roleItem, 303), "Params": { "Num": 9999 } }, Immediate: true },
    // { Cmd: "roleItem.useItem", Params: { "RoleItemID": this.#ServiceManager.roleItem.GetRoleItemID.bind(this.#ServiceManager.roleItem, 304), "Params": { "Num": 9999 } }, Immediate: true },
    // { Cmd: "roleItem.useItem", Params: { "RoleItemID": this.#ServiceManager.roleItem.GetRoleItemID.bind(this.#ServiceManager.roleItem, 305), "Params": { "Num": 9999 } }, Immediate: true },
    // { Cmd: "roleItem.useItem", Params: { "RoleItemID": this.#ServiceManager.roleItem.GetRoleItemID.bind(this.#ServiceManager.roleItem, 306), "Params": { "Num": 9999 } }, Immediate: true },
    {
        Cmd: "roleItem.destroyItem", Params: {
            "RoleItemIDs": [
                this.#ServiceManager.roleItem.GetRoleItemID.bind(this.#ServiceManager.roleItem, 44),
                this.#ServiceManager.roleItem.GetRoleItemID.bind(this.#ServiceManager.roleItem, 300),
                this.#ServiceManager.roleItem.GetRoleItemID.bind(this.#ServiceManager.roleItem, 301),
                this.#ServiceManager.roleItem.GetRoleItemID.bind(this.#ServiceManager.roleItem, 302),
                // this.#ServiceManager.roleItem.GetRoleItemID.bind(this.#ServiceManager.roleItem, 303),
                // this.#ServiceManager.roleItem.GetRoleItemID.bind(this.#ServiceManager.roleItem, 304),
                // this.#ServiceManager.roleItem.GetRoleItemID.bind(this.#ServiceManager.roleItem, 305),
                // this.#ServiceManager.roleItem.GetRoleItemID.bind(this.#ServiceManager.roleItem, 306)
            ]
        }, Immediate: true
    }
]