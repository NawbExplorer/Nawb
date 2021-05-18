import { FlexStyle, TransformsStyle, ShadowStyleIOS } from 'src/ui/style';
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
declare type Priority = 'low' | 'normal' | 'high';
declare type Cache = 'immutable' | 'web' | 'cacheOnly';
declare type Source = {
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
export {};
