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
import { PluginContext, pluginProvider } from '../provider';
import * as Localize from 'react-native-localize';
import { useTranslation } from 'react-i18next';
import * as fs from 'react-native-fs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

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
  const { t, i18n } = useTranslation();

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
  console.log(pluginProvider.pluginRouteMutex, 'HomeScreen');

  return (
    <View style={{ flex: 1, height: 400 }}>
      <Text>{process.env.NODE_ENV}</Text>
      <Text>{t('noticeNS:nodejsInitError')}</Text>
      <Button
        title="demo"
        onPress={async () => {
          // console.log(fs.DocumentDirectoryPath);
          // console.log(fs.ExternalDirectoryPath);
          // const dir = await fs.readDir(fs.DocumentDirectoryPath);
          // console.log(dir);
          // console.log(Localize.getCountry());
          // console.log(Localize.getLocales());
          // console.log(i18n.language);
          // AsyncStorage.removeItem('language');
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
          // nodejs.startWithScript(`console.log('======================')`);
          // nodejs.channel.post<PostBridgeAction>(EM.CARLA_BRIDGE, {
          //   action: 'install_pkg',
          //   data: {
          //     packageName: 'better-sqlite3',
          //   },
          // });
        }}
      />
      <Button
        title="Click"
        color="green"
        onPress={() => {
          Toast.show('dsahudgsaidgasiudgsaigi', Toast.LONG);
          // console.log(nodejs.channel);
          // i18n.changeLanguage('en-US');
        }}
      />
      {/* <MiaoIcon lib="FontAwesome" name="film" size={40} elementId="dsadsadas" /> */}
      {/* <Icon.default name="rocket" size={30} /> */}
      {/* <RecyclerListZone padding={4} presetLayout="line" /> */}
      {/* {renderMiao} */}
    </View>
  );
});
