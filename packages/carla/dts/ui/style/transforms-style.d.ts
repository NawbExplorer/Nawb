interface PerpectiveTransform {
    perspective: number;
}
interface RotateTransform {
    rotate: string;
}
interface RotateXTransform {
    rotateX: string;
}
interface RotateYTransform {
    rotateY: string;
}
interface RotateZTransform {
    rotateZ: string;
}
interface ScaleTransform {
    scale: number;
}
interface ScaleXTransform {
    scaleX: number;
}
interface ScaleYTransform {
    scaleY: number;
}
interface TranslateXTransform {
    translateX: number;
}
interface TranslateYTransform {
    translateY: number;
}
interface SkewXTransform {
    skewX: string;
}
interface SkewYTransform {
    skewY: string;
}
interface MatrixTransform {
    matrix: number[];
}
export interface TransformsStyle {
    transform?: (PerpectiveTransform | RotateTransform | RotateXTransform | RotateYTransform | RotateZTransform | ScaleTransform | ScaleXTransform | ScaleYTransform | TranslateXTransform | TranslateYTransform | SkewXTransform | SkewYTransform | MatrixTransform)[];
    /**
     * @deprecated Use matrix in transform prop instead.
     */
    transformMatrix?: Array<number>;
    /**
     * @deprecated Use rotate in transform prop instead.
     */
    rotation?: number;
    /**
     * @deprecated Use scaleX in transform prop instead.
     */
    scaleX?: number;
    /**
     * @deprecated Use scaleY in transform prop instead.
     */
    scaleY?: number;
    /**
     * @deprecated Use translateX in transform prop instead.
     */
    translateX?: number;
    /**
     * @deprecated Use translateY in transform prop instead.
     */
    translateY?: number;
}
export {};
