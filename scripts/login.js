// const this.#ServiceManagerManager = require('../app/service_manager');
// /**
//  * @type this.#ServiceManagerManager this.#ServiceManager
//  */
// let this.#ServiceManager;
// -- 以上代码仅为了方便编写脚本命令（取消注释可以使用this.#ServiceManager及链式调用的代码提示，再运行前需要注释掉，否则会导致无法正常运行 --

[
    { Cmd: 'role.factionList', Params: {}, Describe: '获取出生势力列表', Immediate: true },
    { Cmd: 'role.getMyRoleInfo', Params: {}, Describe: '获取当前玩家信息', Immediate: true },
    { Cmd: 'lottery.fetchLotteryList', Params: {}, Describe: '获取卡池列表', Immediate: true, Handler: this.#ServiceManager.roleLottery.Init.bind(this.#ServiceManager.roleLottery) },
    { Cmd: 'role.getRoleSetting', Params: {}, Describe: '获取玩家配置列表', Immediate: true, Handler: this.#ServiceManager.roleSetting.Init.bind(this.#ServiceManager.roleSetting) },
    { Cmd: 'equip.getEquipList', Params: {}, Describe: '家宝列表', Immediate: true, Handler: this.#ServiceManager.roleEquip.Init.bind(this.#ServiceManager.roleEquip) },
    { Cmd: 'skill.fetchSkillList', Params: {}, Describe: '获取技能列表', Immediate: true, Handler: this.#ServiceManager.roleSkill.Init.bind(this.#ServiceManager.roleSkill) },
    { Cmd: 'roleItem.getItemList', Params: {}, Describe: '获取玩家道具列表', Immediate: true, Handler: this.#ServiceManager.roleItem.Init.bind(this.#ServiceManager.roleItem) },
    { Cmd: 'trial.getTrialInfo', Params: {}, Describe: '获取试炼信息', Immediate: true },
    { Cmd: 'roleTask.getRoleTaskList', Params: {}, Describe: '查询角色任务列表', Immediate: true, Handler: [this.#ServiceManager.roleTaskSerial.Init.bind(this.#ServiceManager.roleTaskSerial), this.#ServiceManager.roleTask.Init.bind(this.#ServiceManager.roleTask)] },
    // { Cmd: 'role.getSimpleInfo', Params: {}, Describe: '获取所有玩家的简易信息', Immediate: true, Handler: this.#ServiceManager.simpleStruct.Init.bind(this.#ServiceManager.simpleStruct) },
    { Cmd: 'league.getRoleLeagueInfo', Params: {}, Describe: '获取当前玩家所有家族功能相关信息', Immediate: true, Handler: this.#ServiceManager.leagueApply.Init.bind(this.#ServiceManager.leagueApply) },
    { Cmd: 'trend.getTrendInfo', Params: {}, Describe: '天下布武任务信息', Immediate: true, Handler: this.#ServiceManager.trendStruct.Init.bind(this.#ServiceManager.trendStruct) },
    { Cmd: 'activity.getInfo', Params: {}, Describe: '获取当前角色的所有活动数据信息', Immediate: true, Handler: this.#ServiceManager.roleActivity.Init.bind(this.#ServiceManager.roleActivity) },
    { Cmd: 'chat.getWhispers', Params: {}, Describe: '获取联系人列表（私聊）', Immediate: true },
    { Cmd: 'faction.getRelationList', Params: {}, Describe: '查询所在势力与其他势力的关系', Immediate: true },
]