import { RnBridge, makeUniqueName, PostReactNativeAction } from '../../common';
import { Context } from '../../provider';
const rnBridge: RnBridge = require('rn-bridge');

export type Route = {
  name: string;
  params?: Record<string, any>;
};

export const navigation = {
  push(name: string, params?: Record<string, any>) {
    if (!name) {
      throw new Error('name can not be null');
    }

    const routeName = makeUniqueName('pluginRoute', Context.value.renderId);

    rnBridge.channel.post<PostReactNativeAction>(routeName, {
      action: 'plugin_route_push',
      data: {
        name,
        params,
      },
    });
  },
  /**
   *
   * @param {number} count - page 出栈数量
   */
  pop(count?: number) {
    const routeName = makeUniqueName('pluginRoute', Context.value.renderId);
    rnBridge.channel.post<PostReactNativeAction>(routeName, {
      action: 'plugin_route_pop',
      data: {
        count,
      },
    });
  },
  popToRoot() {
    const routeName = makeUniqueName('pluginRoute', Context.value.renderId);
    rnBridge.channel.post<PostReactNativeAction>(routeName, {
      action: 'plugin_route_popToRoot',
    });
  },
  navigate() {},
};
