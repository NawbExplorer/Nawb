import { EM, RnBridge, PostReactNativeAction } from '../../../common';

const rnBridge: RnBridge = require('rn-bridge');

interface ToastOptions {
  //毫秒
  duration?: number;
  gravity?: string;
}

interface ToastArgs {
  (message: string, options?: ToastOptions): void;
}

export const TOAST = {
  LONG: 'LONG',
  SHORT: 'SHORT',
  TOP: 'TOP',
  BOTTOM: 'BOTTOM',
  CENTER: 'CENTER',
};

export const toast: ToastArgs = function (message, options) {
  rnBridge.channel.post<PostReactNativeAction>(EM.CARLA_BRIDGE, {
    action: 'show_toast',
  });
};
