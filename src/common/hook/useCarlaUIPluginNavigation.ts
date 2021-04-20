import { StackActions, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useContext } from 'react';
import { PluginContext } from '../../provider';
import { RootNavigatorStackParamList } from '../../screen/type/navigation-type';

type PluginNavigationProps = StackNavigationProp<
  RootNavigatorStackParamList,
  'PluginRuntimeScreen'
>;

export const useCarlaUIPluginNavigation = function () {
  const pluginCtx = useContext(PluginContext);
  const navigation = useNavigation<PluginNavigationProps>();

  return {
    push(name, params?: Record<string, any>) {
      pluginCtx.pushToCurrentPluginRoutes(name);
      navigation.push('PluginRuntimeScreen', {
        pluginName: pluginCtx.currentPluginName,
        route: {
          name,
          params,
        },
      });
    },
  };
};
