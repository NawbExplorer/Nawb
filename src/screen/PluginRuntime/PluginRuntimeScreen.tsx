import 'react-native-get-random-values';
import { observer } from 'mobx-react-lite';
import { Button, View } from 'react-native';
import { PluginContext } from '../../provider';
import { makeUniqueName } from '../../utils';
import Toast from 'react-native-simple-toast';
import nodejs from 'nodejs-mobile-react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootNavigatorStackParamList } from '../type/stack-type';
import { renderCarlaToReact, EM, PostBridgeAction } from '../../core';
import React, { FC, ReactNode, useContext, useEffect, useState } from 'react';

export const PluginRuntimeScreen: FC<
  StackScreenProps<RootNavigatorStackParamList, 'PluginRuntimeScreen'>
> = observer(function (props) {
  const { route, navigation } = props;
  const { params } = route;
  const [renderMiao, setRenderMiao] = useState<ReactNode>(null);
  const ctx = useContext(PluginContext);

  useEffect(() => {
    // const unsubscribe = navigation.addListener('transitionEnd', (e) => {
    //   console.log(ctx.pluginRouteLocker, Date.now(), 'blur');
    //   ctx.setPluginRouteLocker(false);
    // });

    if (params?.pluginName) {
      if (!ctx.pluginHolderName) {
        ctx.setPluginHolderName(route.key);
      }

      const renderName = makeUniqueName('pluginRender');

      // 添加到当前插件渲染的队列中
      ctx.addCurrentPluginRender(renderName);

      nodejs.channel.once(renderName, (msg) => {
        console.log(msg);
        const entry = renderCarlaToReact(msg.data);
        setRenderMiao(entry);

        nodejs.channel.addListener(msg.option.pageName, (msg) => {
          console.log(ctx.pluginRouteLocker, Date.now());

          if (!ctx.pluginRouteLocker) {
            ctx.setPluginRouteLocker(true);

            navigation.push('PluginRuntimeScreen', {
              pluginName: '/data/local/tmp/century-comic',
              // route: msg.route,
            });
          }
        });
      });

      nodejs.channel.post<PostBridgeAction>(EM.CARLA_BRIDGE, {
        action: 'plugin_render',
        data: {
          pluginName: params.pluginName,
          renderName,
        },
      });
    } else {
      Toast.show('nodejs', Toast.SHORT);
    }

    return () => {
      for (const name of ctx.currentPluginRenderers) {
        nodejs.channel.removeAllListeners(name);
        ctx.clearCurrentPluginRender(name);
      }

      // 如果栈推到插件更目录 丢掉插件占用
      if (route.key === ctx.pluginHolderName) {
        ctx.setPluginHolderName(null);
      }

      // unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Click"
        color="green"
        onPress={() => {
          console.log(nodejs.channel);
          // navigation.push('DialogScreen');
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
