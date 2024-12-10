// const this.#ServiceManagerManager = require('../app/service_manager');
// /**
//  * @type this.#ServiceManagerManager this.#ServiceManager
//  */
// let this.#ServiceManager;
// -- 以上代码仅为了方便编写脚本命令（取消注释可以使用this.#ServiceManager及链式调用的代码提示，再运行前需要注释掉，否则会导致无法正常运行 --

[
    { Cmd: 'lottery.fetchLotteryList', Params: {}, Describe: '获取卡池列表', Immediate: true, Handler: this.#ServiceManager.roleLottery.Init.bind(this.#ServiceManager.roleLottery) },
    // { Cmd: "lottery.lottery", Params: { LotteryClassID: 16, Type: "Item", Times: 3, Trans: "[1,2]", TransType: "Copper" }, Describe: '抽卡', Immediate: true, IsInvalid: this.#ServiceManager.roleLottery.CheckLotteryExit.bind(this.#ServiceManager.roleLottery, 16) },
    { Cmd: "lottery.lottery", Params: { LotteryClassID: 2, Type: "Free", Times: 1, Trans: "[1,2]", TransType: "Copper" }, Describe: '抽卡', Immediate: true, IsInvalid: this.#ServiceManager.roleLottery.CheckLotteryExit.bind(this.#ServiceManager.roleLottery, 2) },
    { Cmd: "lottery.lottery", Params: { LotteryClassID: 2, Type: "Half", Times: 1, Trans: "[1,2]", TransType: "Copper" }, Describe: '抽卡', Immediate: true, IsInvalid: this.#ServiceManager.roleLottery.CheckLotteryExit.bind(this.#ServiceManager.roleLottery, 2) },
    { Cmd: "lottery.lottery", Params: { LotteryClassID: 2, Type: "One", Times: 1, Trans: "[1,2]", TransType: "Copper" }, Describe: '抽卡', Immediate: true, IsInvalid: this.#ServiceManager.roleLottery.CheckLotteryExit.bind(this.#ServiceManager.roleLottery, 2) },
    { Cmd: "lottery.lottery", Params: { LotteryClassID: 1, Type: "More", Times: 1, Trans: "[1,2]", TransType: "Copper" }, Describe: '抽卡', Immediate: true, IsInvalid: this.#ServiceManager.roleLottery.CheckLotteryExit.bind(this.#ServiceManager.roleLottery, 1) },
    { Cmd: "lottery.lottery", Params: { LotteryClassID: 1, Type: "One", Times: 1, Trans: "[1,2]", TransType: "Copper" }, Describe: '抽卡', Immediate: true, IsInvalid: this.#ServiceManager.roleLottery.CheckLotteryExit.bind(this.#ServiceManager.roleLottery, 1) },
]