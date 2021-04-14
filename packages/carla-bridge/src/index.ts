import { handleRender } from './handler/render-handler';
import { handleInstallPackage } from './handler/package-install-handler';
import { EM } from './core';
import {
  ReceiveReactNativeAction,
  PostReactNativeAction,
  RnBridge,
} from './type';
import { is, runSafeScript, reportErrorToReactNative } from './utils';
// 可以直接导入 因为 rn-bridge 的路径被加入到了NODE_PATH中
// 可见 native-lib.cpp
const rnBridge: RnBridge = require('rn-bridge');

const presetGlobalVariable = function () {
  /**
   *
   * 这里全局变量会被覆盖
   */

  // 创建carla全局对象
  if (!global.carla) {
    global.carla = {} as any;
  }

  // 创建 device全局对象
  if (!global.device) {
    global.device = {} as any;
  }
};

try {
  //node的执行目录切换到nodejs-project否则安装会安装到根目录
  process.chdir(rnBridge.app.datadir() + '/nodejs-project');

  // 把通信的事件数设置为不限制
  rnBridge.channel.setMaxListeners(Infinity);

  //nodejs 初始加载成功
  rnBridge.channel.post<PostReactNativeAction>(EM.CARLA_BRIDGE, {
    action: 'nodejs_init_success',
  });

  rnBridge.channel.on(
    EM.CARLA_BRIDGE,
    async (msg: ReceiveReactNativeAction) => {
      // 每次事件都检查 如果没有就初始化
      presetGlobalVariable();

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
              await handleRender(msg.data);
              break;
            case 'set_device_info':
              global.device = msg.data?.device;
              break;
            case 'set_env':
              global.IS_ENV = msg.data?.IS_DEV;
              process.env.CARLA_ENV = msg.data?.env;
              break;
            case 'plugin_search':
              break;
            default:
              rnBridge.channel.post<PostReactNativeAction>(EM.CARLA_BRIDGE, {
                action: 'not_found_action',
                data: {
                  actionName: msg.action,
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
