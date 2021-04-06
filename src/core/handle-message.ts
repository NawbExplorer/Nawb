import Toast from 'react-native-simple-toast';
import { AM } from './action-mapper';

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

interface CommonMessage {
  action?: keyof typeof AM;
  [key: string]: any;
}

export const handleMessage = function (msg: CommonMessage) {
  console.log(msg, 'global =====');

  if (!msg) {
    return;
  }

  switch (msg.action) {
    case AM.NODEJS_INIT_ERROR:
      Toast.show('NODEJS初始化失败' + msg.error, Toast.LONG);
      break;
    case AM.SHOW_TOAST:
      handleShowToast(msg as any);
      break;
  }
};
