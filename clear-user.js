'use strict';
const game = require('./utils/game');
const config = require('./config.json');
const argv = process.argv.splice(2);
const GroupName = argv[0];
const TestNumStart = argv[1];
const TestNumEnd = argv[2];

// 使用立即执行的异步函数来封装逻辑
(async () => {
    try {
        try {
            for (let testNumStart = Number(TestNumStart); testNumStart < Number(TestNumEnd) + 1; testNumStart += Math.min(Math.floor(TestNumEnd - testNumStart), 49) + 1) {
                const response = await game.gameHttp(config.serverUrl, "dev.removeTestRole", `{"Prefix":'${GroupName}',"StartIdx":'${testNumStart}',"EndIdx":'${Math.min(testNumStart + 49, Number(TestNumEnd))}'}`);
                if (response && response.Code === 0) {
                    console.log(response);
                }
            }
        } catch (e) {
            console.log(e);
        }
    } catch (err) {
        console.log('Unexpected error:', err);
    }
})();