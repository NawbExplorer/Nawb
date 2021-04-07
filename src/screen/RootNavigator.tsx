import React, { FC } from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { MainNavigator } from './MainNavigator';
import { DialogScreen } from './DialogScreen';
import { PluginRuntimeScreen } from './PluginRuntimeScreen';

const RootStack = createStackNavigator();

const createCardStyleInterpolator = ({ current: { progress } }) => ({
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
});

export const RootNavigator: FC = function (props) {
  console.log('root render==============================');
  return (
    <RootStack.Navigator
      mode="modal"
      initialRouteName="MainNavigator"
      screenOptions={{
        headerStyle: {
          elevation: 0,
        },
      }}>
      <RootStack.Screen
        name="MainNavigator"
        options={{ headerShown: false }}
        component={MainNavigator}
      />
      <RootStack.Screen
        name="PluginRuntimeScreen"
        component={PluginRuntimeScreen}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <RootStack.Screen
        name="DialogScreen"
        component={DialogScreen}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: 'transparent' },
          cardOverlayEnabled: true,
          cardStyleInterpolator: createCardStyleInterpolator,
        }}
      />
    </RootStack.Navigator>
  );
};
