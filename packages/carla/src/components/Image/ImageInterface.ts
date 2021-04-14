import { FlexStyle, ShadowStyleIOS, TransformsStyle } from '../../common';

export interface ImageStyle extends FlexStyle, TransformsStyle, ShadowStyleIOS {
  backfaceVisibility?: 'visible' | 'hidden';
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  overlayColor?: string;
  tintColor?: string;
  opacity?: number;
}
type Priority = 'low' | 'normal' | 'high';

type Cache = 'immutable' | 'web' | 'cacheOnly';

type Source = {
  uri?: string;
  headers?: {
    [key: string]: string;
  };
  priority?: Priority;
  cache?: Cache;
};

export interface ImageProps {
  style?: ImageStyle;
  source: Source | number;
  useNativeImage?: boolean;
}

export interface PreloadImage {
  (sources: Source[]): void;
}
