import { is } from 'src/utils';
/**
 * 初始化 carla 所有的全局变量
 * device  设备信息
 * env 运行环境
 */

import { RnBridge, SetEnvAction } from 'src/type';
const rnBridge: RnBridge = require('rn-bridge');

export class GlobalCarlaMgmt {
  private static _init() {
    global.carla = {
      _device: {},
      _env: null,
      _IS_DEV: null,
      _platform: null,
      _currentPlugin: null,
      get currentPlugin() {
        return this._currentPlugin;
      },
      set currentPlugin(val) {
        this._currentPlugin = val;
      },
      set device(value) {
        if (is.object(value)) {
          this._device = value;
        } else {
          // throw new Error('carla:device get null');
        }
      },
      get device() {
        return this._device;
      },
      set env(value) {
        if (is.string(value)) {
          this._env = value;
        } else {
          // throw new Error('carla:env get null');
        }
      },
      get env() {
        return this._env;
      },
      set IS_DEV(value) {
        if (is.boolean(value)) {
          this._IS_DEV = value;
        } else {
          // throw new Error('carla:IS_DEV get null');
        }
      },
      get IS_DEV() {
        return this._IS_DEV;
      },
      set platform(value) {
        if (is.object(value)) {
          this._platform = value;
        } else {
          // throw new Error('carla:platform get null');
        }
      },
      get platform() {
        return this._platform;
      },
    };
  }

  /**
   * 使carla全局不会被置为null
   */
  public static makeCarlaNotBeNull() {
    Object.defineProperty(global, 'carla', {
      //@ts-ignore
      _v: null,
      get() {
        return this._v;
      },
      set(v) {
        if (v) {
          this._v = v;
        }
      },
    });
    return this;
  }

  public static setCarlaGlobal(data: SetEnvAction['data']) {
    global.carla.device = data.device;
    global.carla.IS_DEV = data.IS_DEV;
    global.carla.env = data.env;
    global.carla.platform = data.platform;
    process.env.CARLA_ENV = data.env;
  }

  public static resetCarlaGlobalVariable() {
    this._init();
  }

  public static presetCarlaAsGlobalVariable() {
    this._init();
  }
}
