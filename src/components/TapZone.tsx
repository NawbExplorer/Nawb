import React, { FC, useCallback } from 'react';
import { ColorValue, Platform, Text, TextStyle } from 'react-native';
import { HasEventElement } from '../core';
import nodejs from 'nodejs-mobile-react-native';
import {
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';

export interface MiaoTapZoneProps extends HasEventElement {
  mode?: 'opacity' | 'highlight' | 'default';
  delayLongTap: number;
  delayTapDown: number;
  delayTapUp: number;
}

const TapZoneEvents = {
  Tap: 'tap',
  LongTap: 'longTap',
};

export const MiaoTapZone: FC<MiaoTapZoneProps> = function (propsObj) {
  const { events, elementId, ...props } = propsObj;

  const onPress = useCallback(
    !events?.includes(TapZoneEvents.Tap)
      ? (undefined as any)
      : (e) => {
          nodejs.channel.post(TapZoneEvents.Tap + elementId);
        },
    [elementId, events],
  );

  const onLongPress = useCallback(
    !events?.includes(TapZoneEvents.LongTap)
      ? (undefined as any)
      : (e) => {
          nodejs.channel.post(TapZoneEvents.LongTap + elementId);
        },
    [elementId, events],
  );

  return (
    <TouchableWithoutFeedback
      {...props}
      onPress={onPress}
      onLongPress={onLongPress}
    />
  );
};

// var a = {
//   children: [{ children: [Object], props: [Object], tagName: 'TapZone' }],
//   props: {
//     elementId: 'S6VcVvFNcqOVdGmy',
//     style: { backgroundColor: 'red', height: 200, width: 200 },
//   },
//   tagName: 'Zone',
// };
