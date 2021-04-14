import { RnBridge, NoChildComponent } from '../../common';
import { nanoid } from 'nanoid';
import { RecyclerListProps } from './RecyclerListZoneInterface';
const rnBridge: RnBridge = require('rn-bridge');
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

  if (props.onRefresh) {
    events.push(RecyclerListZoneEvents.Refresh);
    const eventId = RecyclerListZoneEvents.Refresh + elementId;

    rnBridge.channel.on(eventId, async function (event) {
      const data = await props.onRefresh();
      if (!(data && data[0] && data[0].tagName)) {
        throw new Error(
          `[${tagName}] onRefresh return value must be MiaoElement e.g. ListTile[]`,
        );
      }

      rnBridge.channel.post(eventId, {
        data,
      });
    });
  }

  if (props.onFetch) {
    events.push(RecyclerListZoneEvents.Fetch);
    const eventId = RecyclerListZoneEvents.Fetch + elementId;

    rnBridge.channel.on(eventId, async function (event) {
      const data = await props.onFetch();

      if (!(data && data[0] && data[0].tagName)) {
        throw new Error(
          `[${tagName}] onFetch return value must be MiaoElement e.g. ListTile[]`,
        );
      }

      rnBridge.channel.post(eventId, {
        data,
      });
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
