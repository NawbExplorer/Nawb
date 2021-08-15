import 'react-native-get-random-values';
import { observer } from 'mobx-react-lite';
import { Button, Platform, View } from 'react-native';
// import { PluginContext } from '../../provider';
// import { makeUniqueName } from '../../common/utils';
// import Toast from 'react-native-simple-toast';
// import nodejs from 'nodejs-mobile-react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootNavigatorStackParamList } from '../type/navigation-type';
import React, { FC, ReactNode, useContext, useEffect, useState } from 'react';
// import { nanoid } from 'nanoid';
// import { useNawbUIPluginNavigation } from '../../plugin-core/components';
// import {
//   renderNawbToReact,
//   EM,
//   PostBridgeAction,
//   PluginRenderReceiver,
//   ReceiveBridgeAction,
// } from '../../plugin-core';

export const PluginRuntimeScreen: FC<
  StackScreenProps<RootNavigatorStackParamList, 'PluginRuntimeScreen'>
> = observer(function (props) {
  // const { route, navigation } = props;
  // const { params } = route;
  // // const [nawbUI, setNawbUI] = useState<ReactNode>(null);
  // const pluginCtx = useContext(PluginContext);

  // const pluginNavigation = useNawbUIPluginNavigation(params.pluginName);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('beforeRemove', e => {
  //     if (e.data.action.type === 'POP') {
  //       pluginNavigation._popPluginRouteFromStack();
  //     }
  //   });

  //   // 每次渲染一个 page都会有一个 renderId, nawb没有局部渲染
  //   // renderId 用来表示每个 page用于路由跳转等等
  //   // const renderId = nanoid(16);
  //   // const routeName = makeUniqueName('pluginRoute', renderId);
  //   // const renderName = makeUniqueName('pluginRender', renderId);
  //   // const removeEventName = makeUniqueName('removeEvent', renderId);

  //   if (params?.pluginName) {
  //     const { pluginName } = params;

  //     if (!pluginCtx.pluginHolderKey) {
  //       pluginCtx.setPluginHolderKey(route.key);
  //     }

  //     // if (!pluginCtx.currentPluginName) {
  //     //   pluginCtx.setCurrentPluginName(params.pluginName);
  //     // }

  //     // nodejs.channel.addListener(routeName, (m: ReceiveBridgeAction) => {
  //     //   console.log(m);
  //     //   switch (m.action) {
  //     //     case 'plugin_route_push':
  //     //       m?.data?.name && pluginNavigation.push(m.data.name, m.data.params);
  //     //       break;
  //     //     case 'plugin_route_navigate':
  //     //       m?.data?.name &&
  //     //         pluginNavigation.navigate(m.data.name, m.data.params);
  //     //       break;
  //     //     case 'plugin_route_pop':
  //     //       pluginNavigation.pop(m?.data.count);
  //     //       // pluginNavigation.
  //     //       // pluginCtx.popFromCurrentPluginRoutes(m?.data.count);
  //     //       // navigation.pop(m?.data.count);
  //     //       break;
  //     //     case 'plugin_route_popToRoot':
  //     //       pluginNavigation.popToRoot();
  //     //       // navigation.pop(pluginCtx.popToRootFromCurrentPluginRoutes());
  //     //       break;
  //     //     case 'plugin_route_goBack':
  //     //       // pluginNavigation
  //     //       break;
  //     //     case 'plugin_route_replace':
  //     //       pluginNavigation.replace(m.data.name, m.data.params);
  //     //       break;
  //     //     default:
  //     //       break;
  //     //   }
  //     // });

  //     // nodejs.channel.once(renderName, (msg: PluginRenderReceiver) => {
  //     //   if (route.key === pluginCtx.pluginHolderKey) {
  //     //     pluginCtx.pushPluginRoute(msg.pageName);
  //     //   }

  //     //   console.log(msg, '===============================');
  //     //   const entry = renderNawbToReact(msg.uiTree);

  //     //   setNawbUI(entry);
  //     // });

  //     // nodejs.channel.post<PostBridgeAction>(EM.CARLA_BRIDGE, {
  //     //   action: 'plugin_render',
  //     //   data: {
  //     //     renderName,
  //     //     renderId,
  //     //     pluginName: params.pluginName,
  //     //     route: params.route,
  //     //   },
  //     // });
  //   } else {
  //     // Toast.show('nodejs', Toast.SHORT);
  //   }

  //   return () => {
  //     // nodejs.channel.removeAllListeners(renderName);
  //     // nodejs.channel.removeAllListeners(routeName);

  //     // // 释放退栈销毁当前页 nodejs中的所有事件
  //     // nodejs.channel.post(removeEventName);

  //     // 如果栈推到插件更目录 丢掉插件占用
  //     // if (route.key === pluginCtx.pluginHolderKey) {
  //     //   pluginCtx.exitPlugin();
  //     //   pluginCtx.setPluginHolderKey(null);
  //     // }
  //     // unsubscribe();
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Click"
        color="green"
        onPress={() => {
          // console.log(pluginCtx.currentPluginRoutes);
          // navigation.push('PluginRuntimeScreen', {
          //   pluginName,
          //   // route: msg.route,
          // });
          // navigation.push('PluginRuntimeScreen');
        }}
      />
      <Button
        title="Click"
        color="blue"
        onPress={() => {
          // nodejs.channel.post('nawb_bridge', {
          //   action: 'exec_js',
          //   data: {
          //     script: `console.log(bridge.channel)`,
          //   },
          // });
          // navigation.push('PluginRuntimeScreen', {
          //   pluginName,
          //   // route: msg.route,
          // });
          // navigation.push('PluginRuntimeScreen');
        }}
      />
      {/* <Text>{String(pluginCtx.pluginSourceLocker)}</Text> */}
      {/* <Button
          title="demo"
          onPress={() => {
            // pluginCtx.setPluginSourceLocker(!pluginCtx.pluginSourceLocker);
          }}
        /> */}
    </View>
  );
});
