import { EM } from './event-mapper';
import { ReceiveBridgeAction } from './type';
// import Toast from 'react-native-simple-toast';
// import nodejs from 'nodejs-mobile-react-native';
import { sendPresetEnvToNodejs } from './set-nawb-env';

interface PluginBooterInitParams {
  mainEntryDevParams: string[];
  mainEntry: string;
}

export class PluginEnvBooter {
  private static _singleInstance: PluginEnvBooter;

  // public static start(args: PluginBooterInitParams): PluginEnvBooter {
  //   if (__DEV__) {
  //     nodejs.startWithParams(args.mainEntryDevParams);
  //   } else {
  //     nodejs.start(args.mainEntry);
  //   }

  //   if (this._singleInstance) {
  //     return this._singleInstance;
  //   } else {
  //     this._singleInstance = new PluginEnvBooter();
  //     return this._singleInstance;
  //   }
  // }

  private _handleBridgeMessage = async function (msg: ReceiveBridgeAction) {
    if (!msg) {
      return;
    }

    switch (msg.action) {
      case 'error_report':
        // Toast.show(msg.data?.error, Toast.LONG);
        break;
      case 'nodejs_init_success':
        sendPresetEnvToNodejs(EM.INIT_CARLA_ENV);
        console.log('nodejs init success');
        break;
      case 'nodejs_init_error':
        // Toast.show('NODEJS初始化失败', Toast.LONG);
        // Toast.show('NODEJS初始化失败' + msg.error, Toast.LONG);
        // handleShowToast(msg as any);
        break;
      case 'not_found_action':
        console.log(`not found action: ${msg.data?.actionName}`);
        // Toast.show('NODEJS初始化失败', Toast.LONG);
        // Toast.show('NODEJS初始化失败' + msg.error, Toast.LONG);
        // handleShowToast(msg as any);
        break;
    }
  };

  startMsgListener() {
    // nodejs.channel.addListener(EM.CARLA_BRIDGE, this._handleBridgeMessage);
  }

  removeMsgListener() {
    // nodejs.channel.removeListener(EM.CARLA_BRIDGE, this._handleBridgeMessage);
  }
}
