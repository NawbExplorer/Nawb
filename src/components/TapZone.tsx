import React, { FC, useCallback } from 'react';
import { ColorValue, Platform, Pressable, Text, TextStyle } from 'react-native';
import nodejs from 'nodejs-mobile-react-native';
import { makeUniqueName } from '../utils';

export interface MiaoTapZoneProps {
  mode?: 'opacity' | 'highlight' | 'default';
  delayLongTap: number;
  delayTapDown: number;
  delayTapUp: number;
  events: string[];
  elementId: string;
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
          nodejs.channel.post(makeUniqueName(TapZoneEvents.Tap, elementId));
        },
    [elementId, events],
  );

  const onLongPress = useCallback(
    !events?.includes(TapZoneEvents.LongTap)
      ? (undefined as any)
      : (e) => {
          nodejs.channel.post(makeUniqueName(TapZoneEvents.LongTap, elementId));
        },
    [elementId, events],
  );

  return <Pressable {...props} onPress={onPress} onLongPress={onLongPress} />;
};

// var a = {
//   children: [{ children: [Object], props: [Object], tagName: 'TapZone' }],
//   props: {
//     elementId: 'S6VcVvFNcqOVdGmy',
//     style: { backgroundColor: 'red', height: 200, width: 200 },
//   },
//   tagName: 'Zone',
// };
