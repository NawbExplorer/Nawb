import { EM } from '../common/event-mapper';
import { RnBridge, PostReactNativeAction } from '../type';
import { installPackage } from '../utils';
const rnBridge: RnBridge = require('rn-bridge');

export const handleInstallPackage = async function (packageName?: string) {
  const result = await installPackage(packageName);

  rnBridge.channel.post<PostReactNativeAction>(EM.CARLA_BRIDGE, {
    action: result ? 'install_pkg_success' : 'install_pkg_error',
  });
};
