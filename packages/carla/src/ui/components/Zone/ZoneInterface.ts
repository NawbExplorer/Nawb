import { ColorValue, FlexStyle, Insets, ShadowStyleIOS } from '../../style';

export interface ZoneStyle extends FlexStyle, ShadowStyleIOS {
  backfaceVisibility?: 'visible' | 'hidden';
  backgroundColor?: ColorValue;
  borderBottomColor?: ColorValue;
  borderBottomEndRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderBottomStartRadius?: number;
  borderBottomWidth?: number;
  borderColor?: ColorValue;
  borderEndColor?: ColorValue;
  borderLeftColor?: ColorValue;
  borderLeftWidth?: number;
  borderRadius?: number;
  borderRightColor?: ColorValue;
  borderRightWidth?: number;
  borderStartColor?: ColorValue;
  borderStyle?: 'solid' | 'dotted' | 'dashed';
  borderTopColor?: ColorValue;
  borderTopEndRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderTopStartRadius?: number;
  borderTopWidth?: number;
  borderWidth?: number;
  opacity?: number;
  testID?: string;
  /**
   * Sets the elevation of a view, using Android's underlying
   * [elevation API](https://developer.android.com/training/material/shadows-clipping.html#Elevation).
   * This adds a drop shadow to the item and affects z-order for overlapping views.
   * Only supported on Android 5.0+, has no effect on earlier versions.
   *
   * @platform android
   */
  elevation?: number;
}

export interface ZoneProps {
  style?: ZoneStyle;
  hitSlop?: Insets;
  /**
   * 用于控制当前视图是否可以作为触控事件的目标。
   * auto：视图可以作为触控事件的目标。
   * none：视图不能作为触控事件的目标。
   * box-none：视图自身不能作为触控事件的目标，但其子视图可以。类似于你在 CSS 中这样设置:
   * box-only: 视图自身可以作为触控事件的目标，但其子视图不能。类似于你在 CSS 中这样设置:
   */
  pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto';
}
