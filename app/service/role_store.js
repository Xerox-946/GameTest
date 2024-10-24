'use strict'
const CoreService = require("../core/service_core");

class RoleStoreService extends CoreService{
  _roleStoreList = [];

  async Init(data)
  {
    if (data.hasOwnProperty('RoleStoreVo')) {
      this._roleStoreList = data.RoleStoreVo;
    }

    // this.logger.debug(JSON.stringify(this._roleStoreList));
  }

  get List() {
    return this._roleStoreList;
  }

  OneByStoreID(StoreID)
  {
    if (! Array.isArray(this._roleStoreList) || this._roleStoreList.length === 0) return;
    return this._roleStoreList.find(item => {
      return item.StoreID === StoreID;
    })
  }
}

module.exports = RoleStoreService;