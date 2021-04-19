import 'react-native-get-random-values';
import { observer } from 'mobx-react-lite';
import { Button, Platform, View } from 'react-native';
import { PluginContext } from '../../provider';
import { makeUniqueName } from '../../utils';
import Toast from 'react-native-simple-toast';
import nodejs from 'nodejs-mobile-react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootNavigatorStackParamList } from '../type/navigation-type';
import React, { FC, ReactNode, useContext, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import {
  renderCarlaToReact,
  EM,
  PostBridgeAction,
  PluginRenderReceiver,
  ReceiveBridgeAction,
} from '../../core';

export const PluginRuntimeScreen: FC<
  StackScreenProps<RootNavigatorStackParamList, 'PluginRuntimeScreen'>
> = observer(function (props) {
  const { route, navigation } = props;
  const { params } = route;
  const [renderMiao, setRenderCarlaPlugin] = useState<ReactNode>(null);
  const ctx = useContext(PluginContext);
  const [state, setstate] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('transitionEnd', e => {
      ctx.setPluginRouteMutex(false);
    });

    // 每次渲染一个 page都会有一个 renderId, carla没有局部渲染
    // renderId 用来表示每个 page用于路由跳转等等
    const renderId = nanoid(16);
    const routeName = makeUniqueName('pluginRoute', renderId);
    const renderName = makeUniqueName('pluginRender', renderId);
    const removeEventName = makeUniqueName('removeEvent', renderId);
    setstate(removeEventName);

    if (params?.pluginName) {
      if (!ctx.pluginHolderName) {
        ctx.setPluginHolderName(route.key);
      }

      nodejs.channel.addListener(routeName, (m: ReceiveBridgeAction) => {
        console.log(m, ctx.pluginRouteMutex);
        if (!ctx.pluginRouteMutex) {
          ctx.setPluginRouteMutex(true);
          switch (m.action) {
            case 'plugin_route_push':
              navigation.push('PluginRuntimeScreen', {
                pluginName: '/data/local/tmp/century-comic',
                route: {
                  name: m?.data.name,
                  params: m?.data.params,
                },
              });
              break;
            default:
              break;
          }
        }
      });

      nodejs.channel.once(renderName, (msg: PluginRenderReceiver) => {
        console.log(msg);
        const entry = renderCarlaToReact(msg.uiTree);
        setRenderCarlaPlugin(entry);
      });

      nodejs.channel.post<PostBridgeAction>(EM.CARLA_BRIDGE, {
        action: 'plugin_render',
        data: {
          renderName,
          renderId,
          pluginName: params.pluginName,
          route: params.route,
        },
      });
    } else {
      Toast.show('nodejs', Toast.SHORT);
    }

    return () => {
      nodejs.channel.removeAllListeners(renderName);
      nodejs.channel.removeAllListeners(routeName);

      // 释放退栈销毁当前页 nodejs的所有事件
      nodejs.channel.post(removeEventName);

      // 如果栈推到插件更目录 丢掉插件占用
      if (route.key === ctx.pluginHolderName) {
        ctx.setPluginHolderName(null);
      }

      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Click"
        color="green"
        onPress={() => {
          // navigation.push('PluginRuntimeScreen', {
          //   pluginName: '/data/local/tmp/century-comic',
          //   // route: msg.route,
          // });
          // navigation.push('PluginRuntimeScreen');
        }}
      />
      <Button
        title="Click"
        color="blue"
        onPress={() => {
          console.log(nodejs.channel);
          // nodejs.channel.post('carla_bridge', {
          //   action: 'exec_js',
          //   data: {
          //     script: `console.log(bridge.channel)`,
          //   },
          // });
          // navigation.push('PluginRuntimeScreen', {
          //   pluginName: '/data/local/tmp/century-comic',
          //   // route: msg.route,
          // });
          // navigation.push('PluginRuntimeScreen');
        }}
      />
      {/* <Text>{String(ctx.pluginSourceLocker)}</Text> */}
      {/* <Button
          title="demo"
          onPress={() => {
            // ctx.setPluginSourceLocker(!ctx.pluginSourceLocker);
          }}
        /> */}
      {renderMiao}
    </View>
  );
});
