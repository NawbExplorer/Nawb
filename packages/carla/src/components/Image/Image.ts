import { MiaoEle } from '../../common';
import { ImageProps, PreloadImage } from './ImageInterface';
import { nanoid } from 'nanoid';

const Image: MiaoEle<ImageProps> = function (propsObj) {
  const elementId = nanoid(16);

  return {
    tagName: 'Image',
    props: { ...propsObj, elementId },
  };
};

export const preloadImage: PreloadImage = function () {};

export { Image };
