import { handleRender } from './handler/render-handler';
import { handleInstallPackage } from './handler/package-install-handler';
import { EM } from './core';
import {
  ReceiveReactNativeAction,
  PostReactNativeAction,
  RnBridge,
} from './type';
import {
  is,
  installPackage,
  runSafeScript,
  reportErrorToReactNative,
} from './utils';
// 可以直接导入 因为 rn-bridge 的路径被加入到了NODE_PATH中
// 可见 native-lib.cpp
const rnBridge: RnBridge = require('rn-bridge');

//node的执行目录切换到nodejs-project否则安装会安装到根目录
process.chdir(rnBridge.app.datadir() + '/nodejs-project');

try {
  // 把通信的事件数设置为不限制
  rnBridge.channel.setMaxListeners(Infinity);

  //nodejs 初始加载成功
  rnBridge.channel.post<PostReactNativeAction>(EM.CARLA_BRIDGE, {
    action: 'nodejs_init_success',
  });

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
              await handleRender(msg.data);
              break;

            // handleRender(msg);

            // case AM.in
            // case AM.PLUGIN_SEARCH:
            //   // handlePluginSearch(msg.name, msg.keywords);
            //   break;
            // case AM.SET_DEVICE_INFO:
            //   if (!data.deviceInfo) {
            //     throw new Error('device info get null');
            //   }

            //   // 在插件中可以直接访问全局变量device
            //   global.device = data.deviceInfo;
            //   break;
            // case AM.INSTALL_PKG:
            //   installPackage(data.packageName);
            //   break;
            // case AM.EXEC_JS:
            //   runSafeScript(data.script, data.useStrict);
            //   break;
            // default:
            //   break;
          }
        }
      } catch (error) {
        reportErrorToReactNative(error);
        // rnBridge.channel.post(EM.CARLA_BRIDGE, {
        //   action: 'error_report',
        //   error: String(error),
        // });
      }
    },
  );
} catch (error) {
  rnBridge.channel.post(EM.CARLA_BRIDGE, {
    action: 'error_report',
    error: String(error),
  });
}
