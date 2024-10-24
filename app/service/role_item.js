'use strict'
const CoreService = require("../core/service_core");

class RoleItemService extends CoreService{
  _roleItemList = [];

  async Init(data)
  {
    if (data.hasOwnProperty('RoleItemVo')) {
      this._roleItemList = data.RoleItemVo;
    }
    // this.logger.debug(JSON.stringify(this._roleItemList));
  }

  get List() {
    return this._roleItemList;
  }

  OneByItemID(ItemID)
  {
    if (! Array.isArray(this._roleItemList) || this._roleItemList.length === 0) return;
    return this._roleItemList.find(item => {
      return item.ItemID === ItemID;
    })
  }
}

module.exports = RoleItemService;