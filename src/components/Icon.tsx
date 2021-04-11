import React, { FC, useMemo } from 'react';
import { ColorValue, View } from 'react-native';
import { BasicComponentProps } from '../core';

type IconLibs =
  | 'AntDesign'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'MaterialIcons'
  | 'SimpleLineIcons';

export interface IconProps extends BasicComponentProps {
  size?: number;
  lib: IconLibs;
  name: string;
  color?: ColorValue;
}

export const Icon: FC<IconProps> = function (propsObj) {
  const { name, elementId, lib, ...props } = propsObj;

  const DyIcon = useMemo(() => {
    try {
      switch (lib) {
        case 'AntDesign':
          return require('react-native-vector-icons/AntDesign').default;
        case 'Feather':
          return require('react-native-vector-icons/Feather').default;
        case 'FontAwesome':
          return require('react-native-vector-icons/FontAwesome').default;
        case 'FontAwesome5':
          return require('react-native-vector-icons/FontAwesome5').default;
        case 'MaterialIcons':
          return require('react-native-vector-icons/MaterialIcons').default;
        case 'SimpleLineIcons':
          return require('react-native-vector-icons/SimpleLineIcons').default;
        default:
          return require('react-native-vector-icons/Feather').default;
      }
    } catch (error) {
      return null;
    }
  }, [lib]);

  return DyIcon ? <DyIcon {...props} name={name} /> : <View />;
};
