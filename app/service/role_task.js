'use strict'
const CoreService = require("../core/service_core");

class RoleTaskService extends CoreService {
  _roleTaskList = [];

  async Init(data) {
    if (data.hasOwnProperty('RoleTaskVo')) {
      this._roleTaskList = data.RoleTaskVo;
    }
    // this.logger.debug(JSON.stringify(this._roleTaskList));
  }

  get List() {
    return this._roleTaskList;
  }

  OneByTaskID(TaskID) {
    if (!Array.isArray(this._roleTaskList) || this._roleTaskList.length === 0) return;
    return this._roleTaskList.find(item => {
      return item.TaskID === TaskID;
    })
  }

  UpdateTaskInfo(data) {
    if (data.hasOwnProperty('RoleTaskVo')) {
      if (Array.isArray(data.RoleTaskVo)) {
        this._roleTaskList = data.RoleTaskVo;
      } else {
        this.UpdateItemById(this._roleTaskList, data.RoleTaskVo, "TaskID");
      }
    }
  }
}

module.exports = RoleTaskService;