'use strict';
const axios = require('axios');
const list = require('./test-account.json');
const SocketServer = require('./app/socket');
const Client = require('./app/client');
// const socket_io = new SocketServer();
const argv = process.argv.splice(2);
const GroupName = argv[0];
const ExecuteMethod = argv.splice(1);
const AccountList = [];
const AppID = "111";
console.log(list[GroupName]);


new Promise(async resolve => {
  for (let OpenID of list[GroupName]) {
    await axios.get('http://127.0.0.1:7501/get/{"Cmd":"Server.Login","Req":0,"Params":{"OpenID":"' + OpenID + '","AppID":"' + AppID + '"}}').then(function (response) {
      if (response.data && response.data.Code === 0){
        console.log("AppID: " + AppID + ", OpenID: " + OpenID + " 连接成功！");
        const AccountVo = response.data.Content.AccountVo;
        const Token = response.data.Content.Token;
        const SocketHandler = SocketServer(Token);
        const Runner = new Client(SocketHandler);
        const TestAccount = { AccountVo, Token, SocketHandler, Runner };
        AccountList.push(TestAccount);
      }
    }).catch(function (error) {
      console.log(error);
    });
  }
  resolve();
}).then(async execute => {
  console.log(AccountList.length)
  for (let testAccount of AccountList) {
    // 设置message回调
    testAccount.Runner.setSocketCallBack(function (data) {
      data = JSON.parse(data);
      if (data.Code === 0) {
        console.log('id: ' + testAccount.SocketHandler.id + ' 调用成功! '+ data.Cmd + ' Seq: ' + data.Seq);
      } else {
        console.log('失败! msg: ', data);
      }
    });
    testAccount.Runner.TimedExecute('Login');
  }
});
