import { ZoneProps } from './ZoneInterface';
import { nanoid } from 'nanoid';
import { Component } from '../../common';

const tagName = 'Zone';

/**
 *
 * 一个支持flex的区域 ，概念类似div
 *
 *
 */
const Zone: Component<ZoneProps> = function (propsObj) {
  let { children, ...props } = propsObj;
  const elementId = nanoid(16);

  return {
    tagName,
    props: { ...props, elementId },
    children,
  };
};

export { Zone };
