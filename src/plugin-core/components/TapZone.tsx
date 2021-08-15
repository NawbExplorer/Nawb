/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback, useMemo } from 'react';
import { ColorValue, Platform, Pressable, Text, TextStyle } from 'react-native';
import nodejs from 'nodejs-mobile-react-native';
import { makeUniqueName } from '../../common/utils';

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

  const onPress = !events?.includes(TapZoneEvents.Tap)
    ? undefined
    : e => {
        nodejs.channel.post(makeUniqueName(TapZoneEvents.Tap, elementId));
      };

  const onLongPress = !events?.includes(TapZoneEvents.LongTap)
    ? undefined
    : e => {
        nodejs.channel.post(makeUniqueName(TapZoneEvents.LongTap, elementId));
      };

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
