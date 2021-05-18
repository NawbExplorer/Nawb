import { RnBridge } from '../../../common';
import { TextEvent, TextChildren, TextProps } from './TextInterface';
import { nanoid } from 'nanoid';
import { Component } from '../../types';
let rnBridge: RnBridge<TextEvent> = require('rn-bridge');

const TextEvents = {
  Tap: 'tap',
  LongTap: 'longTap',
};

const tagName = 'Text';

const Text: Component<TextProps, TextChildren> = function (propsObj) {
  let { children, ...props } = propsObj;

  const elementId = nanoid(16);
  let events = [];

  if (props.onTap) {
    events.push(TextEvents.Tap);
    const eventId = TextEvents.Tap + elementId;

    rnBridge.channel.on(eventId, async function (event) {
      const result = await props.onTap();
      rnBridge.channel.post(eventId, {
        data: result,
      });
    });
  }

  if (props.onLongTap) {
    events.push(TextEvents.LongTap);
    const eventId = TextEvents.LongTap + elementId;

    rnBridge.channel.on(eventId, async function (event) {
      const data = await props.onLongTap();

      rnBridge.channel.post(eventId, {
        data,
      });
    });
  }

  return {
    tagName,
    props: { ...props, elementId, events },
    children,
  };
};

export { Text };
