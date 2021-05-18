import { ImageProps, PreloadImage } from './ImageInterface';
import { nanoid } from 'nanoid';
import { Component } from '../../types';

const Image: Component<ImageProps> = function (propsObj) {
  const elementId = nanoid(16);

  return {
    tagName: 'Image',
    props: { ...propsObj, elementId },
  };
};

export const preloadImage: PreloadImage = function () {};

export { Image };
