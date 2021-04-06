import React, { FC, ReactNode, useContext, useEffect, useState } from 'react';
import {
  StackScreenProps,
  createStackNavigator,
} from '@react-navigation/stack';
import nodejs from 'nodejs-mobile-react-native';
import { observer } from 'mobx-react-lite';
import 'react-native-get-random-values';
import { Button, Text, View } from 'react-native';
import { nanoid } from 'nanoid';
import { AM, renderMiaoToReact } from '../core';
import { PluginContext } from '../provider';

export const PluginRuntimeScreen: FC<StackScreenProps<any>> = observer(
  function (props) {
    const { route, navigation } = props;
    const [renderMiao, setRenderMiao] = useState<ReactNode>(null);
    const { params } = route;
    const ctx = useContext(PluginContext);

    useEffect(() => {
      if (params?.pluginName) {
        if (!ctx.pluginSourceLocker && !ctx.sourceHolderName) {
          ctx.setPluginSourceLocker(true);
          ctx.setSourceHolderName(route.key);
        }

        const eventName = 'render-' + nanoid(16);
        // navigation.addListener('transitionEnd', (e) => {
        //   if (!root) {
        //     root = e.target;
        //   }
        //   if (e.data.closing) {
        //     if (root === e.target) {
        //       root = null;
        //     }
        //   } else {
        //   }
        // });

        nodejs.channel.once('pluginRoute', (msg) => {
          navigation.push('PluginRuntimeScreen', {
            pluginName: '/data/local/tmp/century-comic',
          });
        });

        nodejs.channel.once('pluginRender', (msg) => {
          console.log(
            '============================pluginRender===================',
          );
          console.log(msg);
          const entry = renderMiaoToReact(msg.data);
          setRenderMiao(entry);
        });

        nodejs.channel.post('global', {
          action: AM.PLUGIN_RENDER,
          pluginName: params!.pluginName,
          eventName,
        });
      }

      return () => {
        if (route.key === ctx.sourceHolderName && ctx.pluginSourceLocker) {
          nodejs.channel.removeAllListeners('pluginRender');
          nodejs.channel.removeAllListeners('pluginRoute');
          ctx.setSourceHolderName(null);
          ctx.setPluginSourceLocker(false);
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
