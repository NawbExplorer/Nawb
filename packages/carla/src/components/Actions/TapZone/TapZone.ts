import { MiaoTapZoneEvent, TapZoneProps } from './TapZoneInterface';
import { RnBridge, Component, makeUniqueName } from '../../../common';
let rnBridge: RnBridge<MiaoTapZoneEvent> = require('rn-bridge');
import { nanoid } from 'nanoid';
import { Context } from '../../../provider/context';

const TapZoneEvents = {
  Tap: 'tap',
  LongTap: 'longTap',
  // Blur: 'blur',
  // Focus: 'focus',
  // TapDown: 'tapDown',
  // TapUp: 'tapUp',
};

const tagName = 'TapZone';

const TapZone: Component<TapZoneProps> = function (propsObj) {
  let { children, ...props } = propsObj;
  props.mode = props.mode ?? 'default';

  const elementId = nanoid(16);
  let allRegisterEvents = [];

  const events = [];

  if (propsObj.onTap) {
    const eventName = makeUniqueName(TapZoneEvents.Tap, elementId);
    allRegisterEvents.push(eventName);
    events.push(TapZoneEvents.Tap);

    rnBridge.channel.on(eventName, async function (event) {
      const result = await propsObj.onTap();
      rnBridge.channel.post(eventName, {
        data: result,
      });
    });
  }

  if (propsObj.onLongTap) {
    const eventName = makeUniqueName(TapZoneEvents.LongTap, elementId);
    allRegisterEvents.push(eventName);
    events.push(TapZoneEvents.LongTap);

    rnBridge.channel.on(eventName, async function (event) {
      const result = await propsObj.onLongTap();
      rnBridge.channel.post(eventName, {
        data: result,
      });
    });
  }

  if (propsObj.onTap || propsObj.onLongTap) {
    const removeEventName = makeUniqueName(
      'removeEvent',
      Context.value.renderId,
    );
    rnBridge.channel.once(removeEventName, () => {
      for (const event of allRegisterEvents) {
        rnBridge.channel.removeAllListeners(event);
        allRegisterEvents = [];
      }
    });
  }

  return {
    tagName,
    props: { ...props, elementId, events },
    children,
  };
};

export { TapZone };
