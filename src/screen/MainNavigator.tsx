import React, { FC } from 'react';
import { HomeScreen } from './HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CatIcon, FishIcon, ShopIcon } from '../constants/svg';
import { MarketScreen } from './MarketScreen';
import { SettingScreen } from './SettingScreen';
import { ScaleSimpleAnimation } from './components/ScaleSimpleAnimation';
import { View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AnimationBarIconWrapper, defaultTabBarOptions } from '../components';

const HomeBottomTab = createBottomTabNavigator();

export const MainNavigator: FC<StackScreenProps<any>> = function (props) {
  return (
    <HomeBottomTab.Navigator
      tabBarOptions={defaultTabBarOptions}
      initialRouteName="Home">
      <HomeBottomTab.Screen
        name="Market"
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <AnimationBarIconWrapper>
                <ShopIcon color="#fff" />
              </AnimationBarIconWrapper>
            ) : (
              <ShopIcon color={color} width={31} height={31} />
            ),
        }}
        component={MarketScreen}
      />
      <HomeBottomTab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <AnimationBarIconWrapper>
                <CatIcon color="#fff" />
              </AnimationBarIconWrapper>
            ) : (
              <CatIcon color={color} width={31} height={31} />
            );
          },
        }}
        component={HomeScreen}
      />
      <HomeBottomTab.Screen
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <AnimationBarIconWrapper>
                <FishIcon color="#fff" />
              </AnimationBarIconWrapper>
            ) : (
              <FishIcon color={color} width={31} height={31} />
            ),
        }}
        name="Home2"
        component={SettingScreen}
      />
    </HomeBottomTab.Navigator>
  );
};
