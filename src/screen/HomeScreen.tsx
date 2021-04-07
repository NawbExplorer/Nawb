import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
  useWindowDimensions,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import nodejs from 'nodejs-mobile-react-native';
import { MiaoIcon } from '../components';
import { PluginContext, pluginProvider } from '../provider';
// const Icon = require('react-native-vector-icons/FontAwesome');

const Demo = function () {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export const HomeScreen: FC<StackScreenProps<any>> = observer(function (props) {
  const { navigation } = props;
  const { width } = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const ref = useRef<TextInput>(null);
  const [renderMiao, setRenderMiao] = useState<React.ReactNode>(null);
  const ctx = useContext(PluginContext);

  // useEffect(() => {
  //   nodejs.channel.addListener(
  //     'render-/data/local/tmp/century-comic',
  //     (msg) => {
  //       console.log(msg, '================================');
  //       const a = renderCarlaToReact(msg.data);
  //       console.log(a);
  //       setRenderMiao(a);
  //     },
  //   );
  // }, []);
  console.log(pluginProvider.pluginRouteLocker, 'HomeScreen');

  return (
    <View style={{ flex: 1, height: 400 }}>
      <Text>{process.env.NODE_ENV}</Text>
      <Button
        title="demo"
        onPress={() => {
          // console.log(Icon.default);

          navigation.push('PluginRuntimeScreen', {
            pluginName: '/data/local/tmp/century-comic',
            // init: true,
          });
          // nodejs.channel.post('global', {
          //   action: AM.PLUGIN_RENDER,
          //   name: '/data/local/tmp/century-comic',
          //   route: {
          //     params: 'dsdnasidhsajdpa',
          //   },
          // });
          // nodejs.channel.post('global', {
          //   action: 'execJs',
          //   script: `
          //   console.log(rnBridge.channel.removeAllListeners);
          //   `,
          // });
        }}
      />
      {/* <MiaoIcon lib="FontAwesome" name="film" size={40} elementId="dsadsadas" /> */}
      {/* <Icon.default name="rocket" size={30} /> */}
      {/* <RecyclerListZone padding={4} presetLayout="line" /> */}
      {/* {renderMiao} */}
    </View>
  );
});
