import { Component } from '../../common';
import { nanoid } from 'nanoid';

const tagName = 'Zone';

/**
 *
 * 用于规定整个页面的布局骨架, carla 的默认布局 当然也以使用Zone自定义布局
 *
 *
 */
const Skeleton: Component = function (propsObj) {
  let { children, ...props } = propsObj;
  const elementId = nanoid(16);

  return {
    tagName,
    props: { ...props, elementId },
    children,
  };
};

export { Skeleton };
