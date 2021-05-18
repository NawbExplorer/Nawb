declare const OpaqueColorValue: unique symbol;
declare type OpaqueColorValue = typeof OpaqueColorValue;
export declare type ColorValue = string | OpaqueColorValue;
export interface ShadowStyleIOS {
    shadowColor?: ColorValue;
    shadowOffset?: {
        width: number;
        height: number;
    };
    shadowOpacity?: number;
    shadowRadius?: number;
}
export interface Insets {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
}
export {};
