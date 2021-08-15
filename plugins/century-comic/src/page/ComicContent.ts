/*
 *   Copyright (c) 2021
 *   All rights reserved.
 */
import { TapZone, Zone, navigation, Text } from 'nawb';

export const ComicContent = function () {
  let currentPage = 1;
  let color = 'pink';

  return Zone({
    children: [
      TapZone({
        onTap() {
          navigation.popToRoot();
        },
        children: Zone({
          style: {
            width: 100,
            height: 100,
            backgroundColor: 'blue',
          },
          children: [
            Text({
              children: 'popToRoot',
            }),
          ],
        }),
      }),
      TapZone({
        onTap() {
          navigation.push('content');
        },
        children: Zone({
          style: {
            width: 100,
            height: 100,
            backgroundColor: 'yellow',
          },
          children: [
            Text({
              children: 'push content',
            }),
          ],
        }),
      }),
      TapZone({
        onTap() {
          navigation.pop(4);
        },
        children: Zone({
          style: {
            width: 100,
            height: 100,
            backgroundColor: 'grey',
          },
          children: [
            Text({
              children: 'pop 4',
            }),
          ],
        }),
      }),
      TapZone({
        onTap() {
          navigation.replace('home');
        },
        children: Zone({
          style: {
            width: 100,
            height: 100,
            backgroundColor: 'red',
          },
          children: [
            Text({
              children: 'replace',
            }),
          ],
        }),
      }),
    ],
  });
};

var a = {
  elementId: 'xxxxx',
  tagName: 'Zone',
  children: [
    {
      elementId: 'xxxxx',
      tagName: 'Zone',
      children: [],
    },
  ],
};
