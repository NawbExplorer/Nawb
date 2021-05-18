interface ToastOptions {
    duration?: number;
    gravity?: string;
}
interface ToastArgs {
    (message: string, options?: ToastOptions): void;
}
export declare const TOAST: {
    LONG: string;
    SHORT: string;
    TOP: string;
    BOTTOM: string;
    CENTER: string;
};
export declare const toast: ToastArgs;
export {};
