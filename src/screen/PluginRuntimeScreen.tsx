import React, { FC, ReactNode, useContext, useEffect, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import nodejs from 'nodejs-mobile-react-native';
import { observer } from 'mobx-react-lite';
import 'react-native-get-random-values';
import { View } from 'react-native';
import { nanoid } from 'nanoid';
import { AM, renderCarlaToReact } from '../core';
import { PluginContext, pluginProvider } from '../provider';

export const PluginRuntimeScreen: FC<StackScreenProps<any>> = observer(
  function (props) {
    const { route, navigation } = props;
    const [renderMiao, setRenderMiao] = useState<ReactNode>(null);
    const { params } = route;
    const ctx = useContext(PluginContext);

    console.log(
      pluginProvider.pluginRouteLocker,
      'PluginScreen',
      nodejs.channel,
    );
    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', (e) => {});

      if (params?.pluginName) {
        if (!ctx.pluginSourceLocker && !ctx.sourceHolderName) {
          ctx.setPluginSourceLocker(true);
          ctx.setSourceHolderName(route.key);
        }

        const eventName = 'render-' + nanoid(16);

        nodejs.channel.once('pluginRoute', (msg) => {
          console.log(msg);
          navigation.push('PluginRuntimeScreen', {
            pluginName: '/data/local/tmp/century-comic',
            route: msg.route,
          });
        });

        nodejs.channel.once('pluginRender', (msg) => {
          // console.log(
          //   '============================pluginRender===================',
          // );
          // console.log(msg);
          const entry = renderCarlaToReact(msg.data);
          setRenderMiao(entry);
        });

        nodejs.channel.post('global', {
          action: AM.PLUGIN_RENDER,
          ...params,
          eventName,
        });
      }

      return () => {
        if (route.key === ctx.sourceHolderName && ctx.pluginSourceLocker) {
          nodejs.channel.removeAllListeners('pluginRender');
          nodejs.channel.removeAllListeners('pluginRoute');
          ctx.setSourceHolderName(null);
          ctx.setPluginSourceLocker(false);
          unsubscribe();
        }
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <View style={{ flex: 1 }}>
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
  },
);
