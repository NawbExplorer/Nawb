import { handlePluginSearch, handleRender } from './manager';
import { is, installPackage, AM, RnBridge } from './utils';
const rnBridge = require('rn-bridge');

//node的执行目录切换到nodejs-project否则安装会安装到根目录
process.chdir(rnBridge.app.datadir() + '/nodejs-project');

try {
  rnBridge.channel.setMaxListeners(Infinity);
  //node 初始加载成功
  rnBridge.channel.post('global', {
    action: AM.NODEJS_INIT_SUCCESS,
    eventFrom: 'global',
  });
  rnBridge.channel.on('global', async (msg) => {
    console.log(msg, 'global@@@@@@');
    try {
      if (is.object(msg as any)) {
        switch (msg.action) {
          case AM.PLUGIN_RENDER:
            handleRender(msg);
            break;
          case AM.PLUGIN_SEARCH:
            handlePluginSearch(msg.name, msg.keywords);
            break;
          case AM.DEVICE_INFO:
            global.device = msg.deviceInfo;
            break;
          case AM.INSTALL_PKG:
            installPackage(msg.packageName);
            break;
          case AM.EXEC_JS:
            eval(msg.script);
            break;
          default:
            break;
        }
      }
    } catch (error) {
      console.error(error, 'error=======');
      rnBridge.channel.post('global', {
        action: AM.ERROR_REPORT,
        error: String(error),
      });
    }
  });
} catch (err) {
  rnBridge.channel.post('global', {
    action: AM.NODEJS_INIT_ERROR,
    error: String(err),
  });
}
