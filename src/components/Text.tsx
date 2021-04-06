import React, { FC } from 'react';
import { ColorValue, Text, TextStyle } from 'react-native';
import { HasEventElement } from '../core';
import nodejs from 'nodejs-mobile-react-native';

export interface MiaoTextProps extends HasEventElement {
  style?: TextStyle;
  selectable?: boolean;
  selectionColor?: ColorValue;
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
}

const TextEvents = {
  Tap: 'tap',
  LongTap: 'longTap',
};

export const MiaoText: FC<MiaoTextProps> = function (propsObj) {
  const { events, elementId, ...props } = propsObj;
  return (
    <Text
      {...props}
      selectionColor="#2c2c2c59"
      onPress={
        !events?.includes(TextEvents.Tap)
          ? undefined
          : (event) => {
              nodejs.channel.post(TextEvents.Tap + elementId);
            }
      }
      onLongPress={
        !events?.includes('longTap')
          ? undefined
          : (event) => {
              nodejs.channel.post(TextEvents.LongTap + elementId);
            }
      }
    />
  );
};
