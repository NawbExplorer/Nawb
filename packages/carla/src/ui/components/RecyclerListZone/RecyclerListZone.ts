import { Context } from '../../provider';
import { RecyclerListProps } from './RecyclerListZoneInterface';
import { RnBridge, makeUniqueName } from '../../../common';
const rnBridge: RnBridge = require('rn-bridge');
import { nanoid } from 'nanoid';
import { NoChildComponent } from '../../types';
const tagName = 'RecyclerListZone';

const RecyclerListZoneEvents = {
  Refresh: 'refresh',
  Fetch: 'fetch',
  Error: 'error',
};

const RecyclerListZone: NoChildComponent<RecyclerListProps> = function (
  propsObj,
) {
  let props = propsObj;

  const elementId = nanoid(16);
  const events = [];
  let allRegisterEvents = [];

  if (props.onRefresh) {
    events.push(RecyclerListZoneEvents.Refresh);
    const eventName = makeUniqueName(RecyclerListZoneEvents.Refresh, elementId);
    allRegisterEvents.push(eventName);

    rnBridge.channel.on(eventName, async function (event) {
      const data = await props.onRefresh();
      if (!(data && data[0] && data[0].tagName)) {
        throw new Error(
          `[${tagName}] onRefresh return value must be Component e.g. ListTile[]`,
        );
      }

      rnBridge.channel.post(eventName, {
        data,
      });
    });
  }

  if (props.onFetch) {
    events.push(RecyclerListZoneEvents.Fetch);
    const eventName = makeUniqueName(RecyclerListZoneEvents.Fetch, elementId);
    allRegisterEvents.push(eventName);
    rnBridge.channel.on(eventName, async function (event) {
      const data = await props.onFetch();

      if (!(data && data[0] && data[0].tagName)) {
        throw new Error(
          `[${tagName}] onFetch return value must be Component e.g. ListTile[]`,
        );
      }

      rnBridge.channel.post(eventName, {
        data,
      });
    });
  }

  if (props.onFetch || props.onRefresh) {
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
    props: {
      ...props,
      elementId,
      events,
    },
  };
};

export { RecyclerListZone };
