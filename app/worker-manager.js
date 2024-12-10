'use strict';

const workerpool = require('workerpool');

/**
 * Worker管理器
 * 用于单例化workpool，以便在任意service中调度使用
 */
class WorkerManager {
  /**
   * @type workerpool.Pool
   */
  #pool;

  constructor() {
    this.Init();
  }

  Init() {
    this.#pool = workerpool.pool(`${__dirname}/worker-loader.js`, {
      minWorkers: 'max',
      maxWorkers: 50,
      workerType: 'thread',
      onCreateWorker: o => {
        console.log('A new worker has been created');
      },
      onTerminateWorker: err => {
        console.log('A worker has been terminated');
      },
    });
  }

  get pool() {
    return this.#pool;
  }

  async Exec(Method = '', Params = [], Options = {}) {
    return await this.#pool.exec(Method, Params, Options).then(res => res).catch(e => {
      if (typeof e === 'object' && e.hasOwnProperty('code')) {
        throw e;
      } else {
        // throw { code: 500, message: 'unknown error' };
        throw e;
      }
    });
  }

  ExecAsEmit(Method = '', Params = [], Options = {}) {
    return this.#pool.exec(Method, Params, Options).catch(e => {
      if (typeof e === 'object' && e.hasOwnProperty('code')) {
        throw e;
      } else {
        // throw { code: 500, message: 'unknown error' };
        throw e;
      }
    });
  }

  async TerminatePool() {
    await this.#pool.terminate();
  }
}

module.exports = {
  WorkerManager: new WorkerManager()
};