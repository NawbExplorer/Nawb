import React, { FC } from 'react';
import { ColorValue, Text, TextStyle } from 'react-native';

import nodejs from 'nodejs-mobile-react-native';

export interface TextProps {
  style?: TextStyle;
  selectable?: boolean;
  selectionColor?: ColorValue;
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
  events?: string[];
  elementId: string;
}

const TextEvents = {
  Tap: 'tap',
  LongTap: 'longTap',
};

export const MiaoText: FC<TextProps> = function (propsObj) {
  const { events, elementId, ...props } = propsObj;
  return (
    <Text
      {...props}
      selectionColor="#2c2c2c59"
      onPress={
        !events?.includes(TextEvents.Tap)
          ? undefined
          : _ => {
              nodejs.channel.post(TextEvents.Tap + elementId);
            }
      }
      onLongPress={
        !events?.includes('longTap')
          ? undefined
          : _ => {
              nodejs.channel.post(TextEvents.LongTap + elementId);
            }
      }
    />
  );
};
