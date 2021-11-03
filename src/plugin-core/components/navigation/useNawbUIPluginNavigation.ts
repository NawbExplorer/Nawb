import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useContext, useEffect } from 'react';
import { PluginContext } from '../../../provider';
import { RootNavigatorStackParamList } from '../../../screen/type/navigation-type';

type PluginNavigationProps = StackNavigationProp<
  RootNavigatorStackParamList,
  'PluginRuntimeScreen'
>;

/**
 *
 * 相对于react-navigation重新维护一个路由栈，nawb  用于解决navigate同名
 * 的路由不跳转 所有插件路由都在PluginRuntimeScreen上
 *
 *
 * @param pluginName 插件名
 */
export const useNawbUIPluginNavigation = function (pluginName: string) {
  const pluginCtx = useContext(PluginContext);
  const navigation = useNavigation<PluginNavigationProps>();
  useEffect(() => {
    pluginCtx.setCurrentPluginName(pluginName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pluginName]);

  return {
    push(name, params?: Record<string, any>) {
      pluginCtx.pushPluginRoute(name);
      navigation.push('PluginRuntimeScreen', {
        pluginName,
        route: {
          name,
          params,
        },
      });
    },

    /**
     *
     * 如果添加的名字和栈底名字相同则不跳转，用于防止连点
     *
     * @param name
     * @param params
     */
    navigate(name, params?: Record<string, any>) {
      if (pluginCtx.addToPluginRoute(name)) {
        navigation.push('PluginRuntimeScreen', {
          pluginName,
          route: {
            name,
            params,
          },
        });
      }
    },
    //pop的路由数量至多到栈顶
    pop(count?: number) {
      const len = pluginCtx.currentPluginRoutes.length;

      if (count) {
        if (len > count) {
          navigation.pop(count);
        } else {
          navigation.pop(len - 1);
        }
      } else {
        navigation.pop();
      }
    },
    popToRoot() {
      const count = pluginCtx.getPopToRootCount();
      navigation.pop(count);
    },
    goBack() {
      if (navigation.canGoBack()) {
        pluginCtx.popPluginRoute();
        navigation.goBack();
      }
    },
    replace(name, params?: Record<string, any>) {
      pluginCtx.replacePluginRoute(name);
      navigation.replace('PluginRuntimeScreen', {
        pluginName,
        route: {
          name,
          params,
        },
      });
    },
    exit() {
      navigation.pop();
    },
    _popPluginRouteFromStack() {
      pluginCtx.popPluginRoute();
    },
  };
};
