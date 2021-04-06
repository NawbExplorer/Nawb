/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/** * Sample React Native App * https://github.com/facebook/react-native * * Generated with the TypeScript template * https://github.com/react-native-community/react-native-template-typescript * * @format */
import React, {
  ReactElement,
  ReactNode,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
  NativeModules,
  Platform,
  TouchableWithoutFeedback,
  Dimensions,
  Pressable,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import nodejs from 'nodejs-mobile-react-native';
import 'react-native-get-random-values';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import Toast from 'react-native-simple-toast';
import * as Device from 'expo-device';
import {
  DataProvider,
  LayoutProvider,
  RecyclerListView,
} from 'recyclerlistview';
import FastImage from 'react-native-fast-image';
// import rnfs from 'react-native-fs';
// import { MiaoVideoPlayer } from 'miao-video-player';
const { StatusBarManager } = NativeModules;
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function Home() {
  return (
    <Stack.Navigator
      initialRouteName="Demo"
      screenOptions={{
        // headerShown: false,

        gestureEnabled: true,
        cardOverlayEnabled: true,
        // headerStatusBarHeight:
        //   navigation
        //     .dangerouslyGetState()
        //     .routes.findIndex((r) => r.key === route.key) > 0
        //     ? 0
        //     : undefined,
      }}>
      <Stack.Screen
        name="Demo"
        options={{
          headerStyle: {
            elevation: 0,
            shadowColor: '#fff',
          },
          headerTitleStyle: {
            elevation: 0,
          },
          gestureEnabled: true,
        }}
        component={Demo}
      />
      <Stack.Screen
        options={{ gestureEnabled: true }}
        name="DemoDetails"
        component={DemoDetails}
      />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: true, swipeEnabled: true }}>
      <Drawer.Screen name="Home" component={Home} />
      {/* <Drawer.Screen
        name="Article"
        component={() => (
          <View>
            <Text>dada</Text>
          </View>
        )}
      /> */}
    </Drawer.Navigator>
  );
}

var mapper = {
  View,
  Text,
} as any;

function RecyclerListViewContainer(props: any) {
  const { data } = props;
  let { width } = Dimensions.get('window');
  const [updating, setUpdating] = useState(false);
  const initDataProvider = useMemo(
    () =>
      new DataProvider((r1, r2) => {
        return r1.id !== r2.id;
      }).cloneWithRows(data),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const [dataProvider, setDataProvider] = useState(initDataProvider);

  return (
    <RecyclerListView
      style={{ flex: 1, margin: 3 }}
      renderAheadOffset={500}
      onEndReachedThreshold={20}
      rowRenderer={(type, d) => {
        // console.log(d);
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: 'lightgrey',
              margin: 3,
            }}>
            <FastImage
              style={{ width: 70, height: 200 }}
              resizeMode="contain"
              source={{ uri: d.cover }}
            />
            <Text>{d.name}</Text>
          </View>
        );
      }}
      layoutProvider={
        new LayoutProvider(
          () => {
            return 0;
          },
          (type, dim) => {
            dim.width = Math.floor(width - 6) / 2;
            dim.height = 250;
          },
        )
      }
      dataProvider={dataProvider}
      onEndReached={() => {
        console.log(dataProvider.getAllData().length);
        if (!updating) {
          (nodejs.channel as any).once('event', (msg) => {
            console.log(count);
            count++;
            // console.log(msg.data);
            const d = dataProvider.getAllData();
            d.push(...msg.data);
            setDataProvider(dataProvider.cloneWithRows(d));
            setUpdating(false);
          });

          setUpdating(true);
          nodejs.channel.post('event', {
            eventName: 'list:fetch',
          });
        } else {
          Toast.show('updating');
        }
      }}
    />
  );
}

var count = 0;
function renderer(obj: any): ReactNode {
  let ele;

  if (obj.tag === 'RecyclerListView') {
    ele = <RecyclerListViewContainer data={obj.data} />;
  } else {
    console.log(1111);
    ele = React.createElement(
      mapper[obj.tagName],
      { key: obj.id, ...obj.props },
      Array.isArray(obj.children)
        ? obj.children.map((ele) => {
            return renderer(ele);
          })
        : obj.children
        ? [obj.children]
        : null,
    );
  }

  return obj?.events?.includes('tap') ? (
    <TouchableWithoutFeedback
      key={Math.random().toString(36)}
      onPress={() => {
        // console.log('=================================');
        // console.log(obj);
        nodejs.channel.post('event', obj);
      }}>
      {ele}
    </TouchableWithoutFeedback>
  ) : (
    ele
  );
}

const Demo = (props) => {
  const [plugin, setPlugin] = useState<ReactElement | null>(null);
  const [path, setPath] = useState<string | undefined>(undefined);
  const [screenMsg, setMsg] = useState('');
  const ref = useRef(null);

  if (Platform.OS === 'ios') {
    StatusBarManager.getHeight((height: any) => {});
  } else {
  }
  const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
  const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
  const {
    brand,
    isDevice,
    manufacturer,
    modelName,
    modelId,
    designName,
    productName,
    deviceYearClass,
    totalMemory,
    supportedCpuArchitectures,
    osName,
    osVersion,
    osBuildId,
    osInternalBuildId,
    osBuildFingerprint,
    platformApiLevel,
    deviceName,
  } = Device;

  // useEffect(() => {
  //   nodejs.start('boot.js');
  //   const deviceInfo = {
  //     windowWidth,
  //     windowHeight,
  //     screenWidth,
  //     screenHeight,
  //     brand,
  //     isDevice,
  //     manufacturer,
  //     modelName,
  //     modelId,
  //     designName,
  //     productName,
  //     deviceYearClass,
  //     totalMemory,
  //     supportedCpuArchitectures,
  //     osName,
  //     osVersion,
  //     osBuildId,
  //     osInternalBuildId,
  //     osBuildFingerprint,
  //     platformApiLevel,
  //     deviceName,
  //   };

  //   nodejs.channel.send({
  //     action: 'deviceInfo',
  //     deviceInfo,
  //   });

  //   nodejs.channel.addListener('message', (msg) => {
  //     console.log('=================', msg);

  //     if (msg !== null && typeof msg === 'object') {
  //       // console.log(msg);
  //       try {
  //         const ele: any = renderer(msg);
  //         // console.log(ele);
  //         setPlugin(ele);
  //         // console.log(ele);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //       // const a = React.createElement(msg.tag);
  //     } else {
  //       setMsg(screenMsg + msg);
  //     }
  //   });
  //   nodejs.channel.addListener('event', () => {
  //     // console.log('event=================', msg);
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Icon name="rocket" size={30} color="#900" />
      <Button
        onPress={() => {
          nodejs.channel.send({
            action: 'execJavascript',
            script: `
            delete require.cache[require.resolve('/data/local/tmp/century-comic')];
            const plugin = require('/data/local/tmp/century-comic');
            plugin().then(val =>  {
              rnBridge.channel.send(val);
            })
            `,
          });
        }}
        title="Exec Js"
      />

      <Button
        title="install package"
        onPress={() => {
          nodejs.channel.send({
            action: 'install',
            packageName: 'react',
          });
        }}
      />

      <Button
        title="dialog"
        onPress={() => {
          props.navigation.push('myDialog');
        }}
      />

      {/* <MiaoVideoPlayer /> */}

      {/* <VideoPlayer
          url="http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4"
          autoPlay={true} //是否自动播放，默认为true v2.2.5增加
          // poster={''} //视频封面
          ref={(ref) => ref}
          lockControl={true} //控件锁定功能 v2.0.6增加
          moreSetting={() => null} //右上角更多按钮 输出null则不显示
          // onSmallBack={() => {
          //   // this.props.navigation.goBack();
          // }}
          onError={(e) => {
            console.log(e);
          }}
        /> */}

      {/* <Text>{screenMsg}</Text> */}
      {plugin}
      <TouchableWithoutFeedback
        onPress={() => {
          console.log('demomode111111');
        }}>
        <View style={{ width: 100, height: 100, backgroundColor: 'yellow' }}>
          <TouchableWithoutFeedback
            onPress={() => {
              console.log('demomode');
            }}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: 'red',
              }}
            />
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
      {/* <FastImage
        style={{ width: 200, height: 200 }}
        onLoad={() => {
          console.log('============');
        }}
        source={{
          uri: path,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      /> */}

      {/* <ScrollView>
        <Button
          onPress={() => {
            nodejs.channel.send({
              // arg: ['add', 'react'],
              // installName: 'react',
              raw: `console.log(rnBridge.channel.removeAllListeners)`,
            });
          }}
          title="click"
        />
        <View style={{ height: 10 }} />
        <Button
          onPress={() => {
            navigation.push('DemoDetails');
          }}
          title="click"
        />
        <View style={{ height: 10 }} />
        <Button
          onPress={() => {
            navigation.openDrawer();
          }}
          title="click"
        />
      </ScrollView> */}
      {/* <Button onPress={() => {}} title="click" /> */}
    </View>
  );
};

const Stack = createStackNavigator();
const DialogStack = createStackNavigator();

const DemoDetails = () => {
  return (
    <View>
      <Text>DemoDetails</Text>
    </View>
  );
};

const DialogScreen = (props: StackScreenProps<any>) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onBlur={() => {}}
        onPress={() => {
          props.navigation.goBack();
        }}>
        <View
          style={[styles.dialog, { backgroundColor: colors.card }]}
          pointerEvents="none">
          <View
            style={{ width: 100, height: 100, backgroundColor: 'red' }}></View>
          {/* <Text
            style={{
              backgroundColor: '#123122',
              lineHeight: 30,
            }}
            onPress={(event) => {
              console.log(event.nativeEvent);
            }}
            selectable={true}
            selectionColor="red">
            Mise en place is a French term that literally means “put in place.”
            It also refers to a way cooks in professional kitchens and
            restaurants set up their work stations—first by gathering all
            ingredients for a recipes, partially preparing them (like measuring
            out and chopping), and setting them all near each other. Setting up
            mise en place before cooking is another top tip for home cooks, as
            it seriously helps with organization. It’ll pretty much guarantee
            you never forget to add an ingredient and save you time from running
            back and forth from the pantry ten times.
          </Text> */}
          <Pressable
            style={{}}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text>OK</Text>
          </Pressable>
          {/* <Button title="ok" onPress={navigation.goBack} /> */}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        translucent={true}
        networkActivityIndicatorVisible={true}
        backgroundColor="rgba(0,0,0,0)"
      />
      <NavigationContainer>
        <DialogStack.Navigator mode="modal">
          <DialogStack.Screen name="myDraw" component={MyDrawer} />
          <DialogStack.Screen
            name="myDialog"
            component={DialogScreen}
            options={{
              headerShown: false,
              cardStyle: { backgroundColor: 'transparent' },
              cardOverlayEnabled: true,
              cardStyleInterpolator: ({ current: { progress } }) => ({
                cardStyle: {
                  opacity: progress.interpolate({
                    inputRange: [0, 0.5, 0.9, 1],
                    outputRange: [0, 0.25, 0.7, 1],
                  }),
                  transform: [
                    {
                      scale: progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.9, 1],
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                },
                overlayStyle: {
                  opacity: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.5],
                    extrapolate: 'clamp',
                  }),
                },
              }),
            }}
          />
        </DialogStack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    padding: 8,
  },
  button: {
    margin: 8,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialog: {
    padding: 40,
    width: '90%',
    maxWidth: 400,
    borderRadius: 3,
  },
  close: {
    alignSelf: 'flex-end',
  },
});

export default App;
