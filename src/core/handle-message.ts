import { PostBridgeAction } from './type';
import { EM } from './event-mapper';
import { ReceiveBridgeAction } from './type';
import { sendDeviceInfoToNodejs } from './carla-env';
import Toast from 'react-native-simple-toast';
import nodejs from 'nodejs-mobile-react-native';

interface ToastOptions {
  //毫秒
  duration: string;
  gravity?: string;
  message: string;
}

const handleShowToast = function (msg: ToastOptions) {
  if (msg.gravity) {
    Toast.showWithGravity(msg.message, Toast[msg.duration], Toast[msg.gravity]);
  } else {
    Toast.show(msg.message, Toast[msg.duration]);
  }
};

export const handleBridgeMessage = async function (msg: ReceiveBridgeAction) {
  if (!msg) {
    return;
  }

  switch (msg.action) {
    case 'error_report':
      Toast.show(msg.data?.error, Toast.LONG);
      break;
    case 'nodejs_init_success':
      sendDeviceInfoToNodejs(EM.INIT_CARLA_ENV);
      console.log('nodejs init success');
      break;
    case 'nodejs_init_error':
      Toast.show('NODEJS初始化失败', Toast.LONG);
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
