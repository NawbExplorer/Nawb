import { ExecJsAction } from './core';
import { EM, ReceiveReactNativeAction, PostReactNativeAction } from './core';
import { handlePluginSearch, handleRender } from './handler';
import { is, installPackage, RnBridge, runSafeScript } from './utils';
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
      try {
        if (is.object(msg)) {
          switch (msg.action) {
            case 'exec_js':
              runSafeScript(msg.data.script, msg.data.useStrict);
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
        console.error(error, 'error=======');
        rnBridge.channel.post('global', {
          action: 'error_report',
          error: String(error),
        });
      }
    },
  );
} catch (err) {
  rnBridge.channel.post('global', {
    action: 'error_report',
    error: String(err),
  });
}
