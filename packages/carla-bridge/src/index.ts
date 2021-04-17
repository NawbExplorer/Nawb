import { handlePluginRender } from './handler/render-handler';
import { handleInstallPackage } from './handler/package-install-handler';
import { EM } from './core';
import {
  ReceiveReactNativeAction,
  PostReactNativeAction,
  RnBridge,
  SetEnvAction,
} from './type';
import {
  is,
  runSafeScript,
  reportErrorToReactNative,
  presetGlobalVariable,
} from './utils';
// 可以直接导入 因为 rn-bridge 的路径被加入到了NODE_PATH中
// 可见 native-lib.cpp
const rnBridge: RnBridge = require('rn-bridge');

const setCarlaGlobal = function (data: SetEnvAction['data']) {
  global.carla.device = data.device;
  global.carla.IS_ENV = data.IS_DEV;
  global.carla.env = data.env;
  global.carla.platform = data.platform;
  process.env.CARLA_ENV = data.env;
};

/**
 *  阻塞  先创建carla所要的环境
 */
const createCarlaEnv = function () {
  return new Promise((resolve, reject) => {
    rnBridge.channel.once(EM.INIT_CARLA_ENV, async (msg: SetEnvAction) => {
      if (is.object(msg)) {
        if (msg.action === 'set_env') {
          try {
            const data = msg.data;
            setCarlaGlobal(data);
            resolve(null);
          } catch (error) {
            reject(error);
          }
        } else {
          throw new Error('not found action');
        }
      }
    });
  });
};

const listenBridge = function () {
  try {
    rnBridge.channel.on(
      EM.CARLA_BRIDGE,
      async (msg: ReceiveReactNativeAction) => {
        console.log(msg, 'bridge receive messages ===========================');
        try {
          if (is.object(msg)) {
            switch (msg.action) {
              case 'exec_js':
                runSafeScript(msg.data?.script, msg.data?.useStrict);
                break;
              case 'install_pkg':
                await handleInstallPackage(msg.data?.packageName);
                break;
              case 'plugin_render':
                await handlePluginRender(msg.data);
                break;
              case 'set_env':
                const data = msg.data;
                setCarlaGlobal(data);
                break;
              case 'plugin_search':
                break;
              default:
                rnBridge.channel.post<PostReactNativeAction>(EM.CARLA_BRIDGE, {
                  action: 'not_found_action',
                  data: {
                    actionName: (msg as any).action,
                  },
                });
                break;
            }
          }
        } catch (error) {
          reportErrorToReactNative(error);
        }
      },
    );
  } catch (error) {
    reportErrorToReactNative(error);
  }
};

// bridge 入口
(async function () {
  try {
    // 把通信的事件数设置为不限制
    rnBridge.channel.setMaxListeners(Infinity);

    //node的执行目录切换到nodejs-project否则安装会安装到根目录
    process.chdir(rnBridge.app.datadir() + '/nodejs-project');

    presetGlobalVariable();

    //nodejs 初始加载成功
    rnBridge.channel.post<PostReactNativeAction>(EM.CARLA_BRIDGE, {
      action: 'nodejs_init_success',
    });

    let timer;
    timer = setTimeout(() => {
      reportErrorToReactNative('carla env init timeout');
    }, 5000);
    await createCarlaEnv().catch((error) => {
      reportErrorToReactNative(error);
    });
    clearTimeout(timer);
    await import('./utils/i18n').catch((error) => {
      reportErrorToReactNative(error);
    });

    // 之后的功能建立此bridge之上
    listenBridge();
  } catch (error) {
    reportErrorToReactNative(error);
  }
})();
