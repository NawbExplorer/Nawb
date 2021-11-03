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
// import nodejs from 'nodejs-mobile-react-native';
import { PluginContext, pluginProvider } from '../provider';
import * as Localize from 'react-native-localize';
import { useTranslation } from 'react-i18next';
// import * as fs from 'react-native-fs';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Toast from 'react-native-simple-toast';
// import { EM, PostBridgeAction } from '../plugin-core';

// const Icon = require('react-native-vector-icons/FontAwesome');

const Demo = function () {
  return (
    <View>
      <Text>demo</Text>
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

  const [eventJson, setEventJson] = useState('');

  // useEffect(() => {
  //   nodejs.channel.addListener(
  //     'render-/data/local/tmp/century-comic',
  //     (msg) => {
  //       console.log(msg, '================================');
  //       const a = renderNawbToReact(msg.data);
  //       console.log(a);
  //       setRenderMiao(a);
  //     },
  //   );
  // }, []);

  return (
    <View style={{ flex: 1, height: 400 }}>
      <Text>{process.env.NODE_ENV}</Text>
      <Text>{t('noticeNS:nodejsInitError')}</Text>
      <Button
        title="插件Demo"
        onPress={async () => {
          navigation.push('PluginRuntimeScreen', {
            // pluginName: '/data/local/tmp/century-comic',
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
        }}
      />
      <Button
        title="事件队列"
        color="green"
        onPress={() => {
          // Toast.show('dsahudgsaidgasiudgsaigi', Toast.LONG);
          // console.log(nodejs.channel);
          // setEventJson(String(nodejs.channel));
          // i18n.changeLanguage('en-US');
        }}
      />
      <Button
        title="Click"
        color="pink"
        onPress={() => {
          // nodejs.channel.post<PostBridgeAction>(EM.CARLA_BRIDGE, {
          //   action: 'exec_js',
          //   data: {
          //     script: `
          //     const fs  = require('fs');
          //     fs.readdir('./', (err, d)=>{console.log(d)})
          //     `,
          //   },
          // });
        }}
      />
      <Button
        title="语言切换"
        color="grey"
        onPress={() => {
          i18n.changeLanguage(i18n.language === 'en-US' ? 'zh-CN' : 'en-US');
          // nodejs.channel.post<PostBridgeAction>(EM.CARLA_BRIDGE, {
          //   action: 'exec_js',
          //   data: {
          //     script: `
          //     const fs  = require('fs');
          //     fs.readdir('./', (err, d)=>{console.log(d)})
          //     `,
          //   },
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
