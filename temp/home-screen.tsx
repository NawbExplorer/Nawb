import React, { FC, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import {
  useWindowDimensions,
  View,
  Text,
  ScrollView,
  TextInput,
  Keyboard,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Image from 'react-native-fast-image';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

// const Tab = createMaterialTopTabNavigator();

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

  const [routes] = React.useState([
    { key: 'first', title: '全部' },
    { key: 'second', title: '常用' },
    { key: 'third', title: '图图啊' },
    { key: 'third1', title: '图书' },
    { key: 'third3', title: '图书' },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 140,
          backgroundColor: '#fff',
          margin: 10,
          padding: 10,
          borderRadius: 15,
          // justifyContent: 'center',
          // borderBottomEndRadius: 15,
          // borderBottomLeftRadius: 15,
        }}>
        <View
          style={{
            // flex: 1,
            paddingBottom: 15,
            flexDirection: 'row',
          }}>
          <Image
            style={{
              width: 30,
              height: 30,
              borderRadius: 30,
              marginRight: 10,
            }}
            source={{
              uri:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa0.att.hudong.com%2F30%2F29%2F01300000201438121627296084016.jpg&refer=http%3A%2F%2Fa0.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617159133&t=54d062e06796e7af76694ca2d1def382',
            }}
            // resizeMode={Image.resizeMode.contain}
          />
          <View
            style={{
              height: 30,
              width: 120,
              justifyContent: 'center',
            }}>
            <Text
              style={{ color: '#666', fontSize: 15 }}
              numberOfLines={1}
              ellipsizeMode="middle">
              游客大撒大撒大撒大撒大撒大撒打赏打赏
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 70,
            width: '100%',
            flexDirection: 'row',
            paddingHorizontal: 10,
          }}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'column',
              marginRight: 10,
            }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: '#40a5e0',
              }}></View>
            <Text>下载</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'column',
              marginRight: 10,
            }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: '#8dc891',
              }}></View>
            <Text>下载</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'column',
              marginRight: 10,
            }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: 'yellow',
              }}></View>
            <Text>下载</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'column',
              marginRight: 10,
            }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: '#fd664e',
              }}></View>
            <Text>下载</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: 110,
          backgroundColor: '#fff',
          marginHorizontal: 10,
          marginBottom: 10,
          padding: 10,
          borderRadius: 15,
          justifyContent: 'center',
          // borderBottomEndRadius: 15,
          // borderBottomLeftRadius: 15,
        }}>
        <ScrollView
          style={{
            overflow: 'hidden',
          }}
          horizontal={true}
          alwaysBounceHorizontal={true}
          showsHorizontalScrollIndicator={false}>
          <Image
            style={{
              width: 100,
              // height: ,
              borderRadius: 10,
              marginRight: 10,
            }}
            source={{
              uri:
                'https://pics5.baidu.com/feed/0df431adcbef7609da7b7351cdd082c47dd99ea6.png?token=34fd7157a20fcb0953c365bec0852449&s=5382904508812A47DDFD3BA403007081',
            }}
            // resizeMode={Image.resizeMode.contain}
          />
          <Image
            style={{
              width: 100,
              // height: ,
              borderRadius: 10,
              marginRight: 10,
            }}
            source={{
              uri:
                'https://pics5.baidu.com/feed/0df431adcbef7609da7b7351cdd082c47dd99ea6.png?token=34fd7157a20fcb0953c365bec0852449&s=5382904508812A47DDFD3BA403007081',
            }}
            // resizeMode={Image.resizeMode.contain}
          />
          <Image
            style={{
              width: 100,
              // height: ,
              borderRadius: 10,
              marginRight: 10,
            }}
            source={{
              uri:
                'https://pics5.baidu.com/feed/0df431adcbef7609da7b7351cdd082c47dd99ea6.png?token=34fd7157a20fcb0953c365bec0852449&s=5382904508812A47DDFD3BA403007081',
            }}
            // resizeMode={Image.resizeMode.contain}
          />
          <Image
            style={{
              width: 100,
              // height: ,
              borderRadius: 10,
              marginRight: 10,
            }}
            source={{
              uri:
                'https://pics5.baidu.com/feed/0df431adcbef7609da7b7351cdd082c47dd99ea6.png?token=34fd7157a20fcb0953c365bec0852449&s=5382904508812A47DDFD3BA403007081',
            }}
            // resizeMode={Image.resizeMode.contain}
          />
        </ScrollView>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          marginHorizontal: 10,
          marginBottom: 10,
          overflow: 'hidden',
          // padding: 10,
          borderRadius: 15,
          justifyContent: 'center',
          // borderBottomEndRadius: 15,
          // borderBottomLeftRadius: 15,
        }}>
        <TabView
          renderTabBar={(props) => (
            <View>
              <TabBar
                {...props}
                activeColor="#000"
                inactiveColor="#8E8E8F"
                scrollEnabled
                indicatorStyle={{ backgroundColor: 'white' }}
                style={{ backgroundColor: '#fff', elevation: 1 }}
                tabStyle={{
                  width: 80,
                }}
              />
              <View
                style={{
                  width: '100%',
                  height: 40,
                  backgroundColor: '#fff',
                  paddingLeft: 10,
                }}>
                <TextInput
                  onSubmitEditing={Keyboard.dismiss}
                  ref={ref}
                  style={{
                    height: 50,
                    paddingLeft: 15,
                    fontSize: 17,

                    // backgroundColor: 'red',
                  }}
                  placeholder="插件搜索..."
                  // onChangeText={(text) => ''}
                  // value={''}
                />
                <View
                  style={{
                    width: 50,
                    borderBottomWidth: 1,
                    marginLeft: 15,
                    borderColor: '#d8d8d8',
                  }}
                />
              </View>
            </View>
          )}
          navigationState={{ index, routes }}
          renderScene={SceneMap({
            first: Demo,
            second: Demo,
            third: Demo,
            third1: Demo,
            third3: Demo,
          })}
          onIndexChange={setIndex}
          initialLayout={{ width }}
        />
        {/* <ScrollView horizontal={false} alwaysBounceVertical={true}></ScrollView> */}
      </View>
    </View>
  );
});
