import { GlobalCarlaMgmt } from './utils/GlobalCarlaMgmt';
import { EM } from './common';
import { PostReactNativeAction, RnBridge, SetEnvAction } from './type';
import { is, reportErrorToReactNative } from './utils';
import { MessageHandler } from './handler';

const rnBridge: RnBridge = require('rn-bridge');

interface InitEnvParams {
  retryCount: number;
  onRetry: (count: number) => void;
}

export class CarlaEnvBuilder {
  public static messageHandler: MessageHandler;
  private static _retryCounter = 0;

  public static initEnv({
    retryCount = 0,
    onRetry,
  }: InitEnvParams): Promise<MessageHandler> {
    const self = this;
    return new Promise(async function (resolve, reject) {
      if (!self.messageHandler) {
        self._retryCounter++;
        (function () {
          this.setEnv()
            .then(() => {
              self._retryCounter = 0;
              self.messageHandler = new MessageHandler();
              resolve(this.messageHandler);
            })
            .catch(err => {
              if (retryCount <= self._retryCounter) {
                onRetry(self._retryCounter);
                arguments.callee();
              } else {
                reject(err);
              }
            });
        })();
      }
    });
  }

  public static async setEnv() {
    this.nodejsBootSuccess();
    await this.createCarlaGlobalEnv();
    // init i18n 出错不会影响startListener;
    await this.initI18n();
  }

  public static async restartEnv(arg: InitEnvParams) {
    rnBridge.channel.removeAllListeners();
    GlobalCarlaMgmt.resetCarlaGlobalVariable();
    this._retryCounter = 0;
    return this.initEnv(arg);
  }

  public static prepareNodejsEnv() {
    this.setUnLimitListener();
    this.changeCwdToAppFilesPath();
  }

  /**
   * node的执行目录切换到nodejs-project否则 安装包时会安装到根目录
   */
  private static changeCwdToAppFilesPath() {
    process.chdir(rnBridge.app.datadir() + '/nodejs-project');
  }

  /**把通信的事件数设置为不限制 */
  private static setUnLimitListener() {
    rnBridge.channel.setMaxListeners(Infinity);
  }

  private static nodejsBootSuccess() {
    rnBridge.channel.post<PostReactNativeAction>(EM.CARLA_BRIDGE, {
      action: 'nodejs_init_success',
    });
  }

  public static async initI18n() {
    await import('./utils/i18n').catch(error => {
      reportErrorToReactNative(error);
    });
  }

  public static setCarlaGlobal(data: SetEnvAction['data']) {
    global.carla.device = data.device;
    global.carla.IS_DEV = data.IS_DEV;
    global.carla.env = data.env;
    global.carla.platform = data.platform;
    process.env.CARLA_ENV = data.env;
  }

  /**
   *  阻塞  先创建carla所要的环境
   */
  private static async createCarlaGlobalEnv() {
    await new Promise((resolve, reject) => {
      let timer;
      timer = setTimeout(() => {
        reject('carla env init timeout');
      }, 5000);
      rnBridge.channel.once(EM.INIT_CARLA_ENV, async (msg: SetEnvAction) => {
        if (is.object(msg) && msg.action === 'set_env') {
          try {
            const data = msg.data;
            CarlaEnvBuilder.setCarlaGlobal(data);
            resolve(null);
            clearTimeout(timer);
          } catch (error) {
            reject(error);
          }
        } else {
          reject('action needs to be set_env');
        }
      });
    });
  }
}
