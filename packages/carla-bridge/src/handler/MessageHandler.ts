import { CarlaEnvBuilder } from 'src/CarlaEnvBuilder';
import { EM } from 'src/common';
import {
  ReceiveReactNativeAction,
  PostReactNativeAction,
  RnBridge,
} from 'src/type';
import { is, reportErrorToReactNative } from 'src/utils';
import { handleInstallPackage } from './package-install-handler';
import { handlePluginRender } from './render-handler';
const rnBridge: RnBridge = require('rn-bridge');

export class MessageHandler {
  public startListener() {
    try {
      rnBridge.channel.on(
        EM.CARLA_BRIDGE,
        async (msg: ReceiveReactNativeAction) => {
          console.log(
            msg,
            'bridge receive messages ===========================',
          );
          try {
            if (is.object(msg)) {
              switch (msg.action) {
                case 'install_pkg':
                  await handleInstallPackage(msg.data?.packageName);
                  break;
                case 'plugin_render':
                  await handlePluginRender(msg.data);
                  break;
                case 'set_env':
                  const data = msg.data;
                  CarlaEnvBuilder.setCarlaGlobal(data);
                  break;
                case 'plugin_search':
                  break;
                default:
                  rnBridge.channel.post<PostReactNativeAction>(
                    EM.CARLA_BRIDGE,
                    {
                      action: 'not_found_action',
                      data: {
                        actionName: (msg as any).action,
                      },
                    },
                  );
                  break;
              }
            }
          } catch (error) {
            reportErrorToReactNative(error);
          }
        },
      );
    } catch (error) {
      reportErrorToReactNative(error);
    }
  }
}
