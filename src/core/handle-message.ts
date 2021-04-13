import { ReceiveBridgeAction } from './type';
import { sendDeviceInfoToNodejs } from './device';
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

export const handleBridgeMessage = async function (msg: ReceiveBridgeAction) {
  if (!msg) {
    return;
  }

  switch (msg.action) {
    case 'error_report':
      Toast.show(msg.data?.error, Toast.LONG);
      break;
    case 'nodejs_init_success':
      await sendDeviceInfoToNodejs();
      console.debug('nodejs init success');
      break;
    case 'nodejs_init_error':
      Toast.show('NODEJS初始化失败', Toast.LONG);
      // Toast.show('NODEJS初始化失败' + msg.error, Toast.LONG);
      // handleShowToast(msg as any);
      break;
  }
};
