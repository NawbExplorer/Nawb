import { RnBridge, makeUniqueName, PostReactNativeAction } from '../../common';
import { Context } from '../../provider';
const rnBridge: RnBridge = require('rn-bridge');

export type Route = {
  name: string;
  params?: Record<string, any>;
};

export const navigation = {
  /**
   *
   * 不论是否存在都会加到路由栈中
   * @param name
   * @param params
   */
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

  /**
   *
   *
   * @param {string} name
   * @param params
   */
  replace(name: string, params?: Record<string, any>) {
    if (!name) {
      throw new Error('name can not be null');
    }

    const routeName = makeUniqueName('pluginRoute', Context.value.renderId);

    rnBridge.channel.post<PostReactNativeAction>(routeName, {
      action: 'plugin_route_replace',
      data: {
        name,
        params,
      },
    });
  },
  /**
   *
   *
   * @param {string} name
   * @param params
   */
  navigate(name: string, params?: Record<string, any>) {
    if (!name) {
      throw new Error('name can not be null');
    }

    const routeName = makeUniqueName('pluginRoute', Context.value.renderId);

    rnBridge.channel.post<PostReactNativeAction>(routeName, {
      action: 'plugin_route_navigate',
      data: {
        name,
        params,
      },
    });
  },
};
