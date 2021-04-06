var rnBridge = require('rn-bridge');
const { AM } = require('./src/utils/action-mapper');
const { is, installPackage } = require('./src/utils/helper');

//node的执行目录切换到nodejs-project否则安装会安装到根目录
process.chdir(rnBridge.app.datadir() + '/nodejs-project');

try {
  rnBridge.channel.setMaxListeners(Infinity);
  //node 初始加载成功
  rnBridge.channel.send({ action: 'nodejsInitSuccess' });
  rnBridge.channel.on('message', async (msg) => {
    console.log(msg, '@@@@@@');
    try {
      if (is.object(msg)) {
        switch (msg.action) {
          case AM.DEVICE_INFO:
            global.deviceInfo = msg.deviceInfo;
            global;
            break;
          case AM.INSTALL_PKG:
            installPackage(msg.packageName);
            break;
          case AM.EXEC_JS:
            // eslint-disable-next-line no-eval
            eval(msg.script);
            break;
          default:
            break;
        }
      }
    } catch (error) {
      console.error(error, 'error=======');
      rnBridge.channel.send({
        action: 'errorReport',
        error: String(error),
      });
    }
  });
} catch (err) {
  rnBridge.channel.send({
    action: 'nodejsInitError',
    error: err,
  });
}
