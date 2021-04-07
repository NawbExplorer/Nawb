import React, { FC, ReactElement } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabBarOptions } from './BottomTabInterface';
import {
  MiaoTreeEntity,
  renderCarlaToReact,
  SingleMiaoTreeEntity,
} from '../../core';

import { CatIcon } from '../../constants/svg';
import { AnimationBarIconWrapper } from './AnimationBarIconWrapper';

export const PluginBottomTab = createBottomTabNavigator();

interface TabZoneProps {
  tagName: string;
  props: {
    options?: Record<string, any>;
    icon?: SingleMiaoTreeEntity;
    elementId: string;
    name: string;
    page: MiaoTreeEntity;
  };
}

interface BottomTabBarProps {
  options?: BottomTabBarOptions;
  lazy?: boolean;
  tabs: TabZoneProps[];
  title: string;
}

export const defaultTabBarOptions: BottomTabBarOptions = {
  style: {
    height: 60,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderTopWidth: 0,
    elevation: 3,
    shadowOpacity: 0.5,
  },
  allowFontScaling: false,
  showLabel: false,
  activeTintColor: '#313131',
  labelStyle: {
    position: 'relative',
    top: -3,
    elevation: 0,
  },
};

export const BottomTabBar: FC<BottomTabBarProps> = function (props) {
  const { options, tabs, lazy = true } = props;

  return (
    <PluginBottomTab.Navigator
      lazy={lazy}
      tabBarOptions={Object.assign(defaultTabBarOptions, options)}>
      {tabs.map((tab) => {
        return (
          <PluginBottomTab.Screen
            key={tab.props.elementId}
            name={tab.props.name}
            options={Object.assign(
              {
                tabBarIcon: ({ color, focused }) => {
                  let size;
                  let iconSize;
                  if (options?.showLabel) {
                    size = 35;
                    iconSize = 23;
                  } else {
                    size = 46;
                    iconSize = 31;
                  }
                  return focused ? (
                    <AnimationBarIconWrapper
                      width={size}
                      height={size}
                      outputRange={[0, iconSize]}>
                      <CatIcon color="#fff" />
                    </AnimationBarIconWrapper>
                  ) : (
                    <CatIcon color={color} width={iconSize} height={iconSize} />
                  );
                },
              },
              tab.props.options,
            )}
            children={(p) => {
              return renderCarlaToReact(tab.props.page, p) as ReactElement;
            }}
          />
        );
      })}
    </PluginBottomTab.Navigator>
  );
};
