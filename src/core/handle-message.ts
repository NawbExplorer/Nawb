import { ReceiveBridgeAction } from './core-type';
import { sendDeviceInfoToNodejs } from './utils';
import Toast from 'react-native-simple-toast';

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

export const handleBridgeMessage = function (msg: ReceiveBridgeAction) {
  if (!msg) {
    return;
  }

  switch (msg.action) {
    case 'error_report':
      break;
    case 'nodejs_init_success':
      sendDeviceInfoToNodejs();
      break;
    case 'nodejs_init_error':
      Toast.show('NODEJS初始化失败', Toast.LONG);
      // Toast.show('NODEJS初始化失败' + msg.error, Toast.LONG);
      // handleShowToast(msg as any);
      break;
  }
};
