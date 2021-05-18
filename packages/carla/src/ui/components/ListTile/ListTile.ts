import { nanoid } from 'nanoid';
import { verifyProps } from '../../../common';
import { NoChildComponent } from '../../types';
import { ListTileProps } from './ListTileInterface';
const rnBridge = require('rn-bridge');

const ListTileEvents = {
  Tap: 'tap',
  LongTap: 'longTap',
};

const tagName = 'ListTile';

const ListTile: NoChildComponent<ListTileProps> = function (propsObj) {
  verifyProps(
    ['leading', 'footer', 'header', 'trailing', 'title', 'subtitle'],
    propsObj,
    tagName,
  );
  const elementId = nanoid(16);

  return {
    tagName,
    props: { ...propsObj, elementId },
  };
};

export { ListTile };
