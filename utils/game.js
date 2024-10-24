const request =require("./request");
const GameLogger = require("./logger");

const logger = new GameLogger('Game');

function gameHttp(url, api, params) {
  var _url = `${url}?Content={"Cmd":"${api}","Params":${params}}`;
  logger.info(_url);
  return request.service({ url: _url, method: "get" });
}

module.exports = { gameHttp };