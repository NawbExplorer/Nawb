/**
 * 初始化 carla 所有的全局变量
 * device  设备信息
 * env 运行环境
 */
export const presetGlobalVariable = function () {
  if (!global.carla) {
    global.carla = {
      _device: {},
      _env: null,
      _IS_ENV: null,
      set device(value) {
        if (!!value) {
          this._device = value;
        } else {
          throw new Error('carla:device get null');
        }
      },
      get device() {
        return this._device;
      },
      set env(value) {
        if (!!value) {
          this._env = value;
        } else {
          throw new Error('carla:env get null');
        }
      },
      get env() {
        return this._device;
      },
      set IS_ENV(value) {
        if (!!value) {
          this._IS_ENV = value;
        } else {
          throw new Error('carla:IS_ENV get null');
        }
      },
      get IS_ENV() {
        return this._device;
      },
    };
  }
};
