declare const OpaqueColorValue: unique symbol;
type OpaqueColorValue = typeof OpaqueColorValue;

export type ColorValue = string | OpaqueColorValue;

export interface ShadowStyleIOS {
  shadowColor?: ColorValue;
  shadowOffset?: { width: number; height: number };
  shadowOpacity?: number;
  shadowRadius?: number;
}

export interface Insets {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}
