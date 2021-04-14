import { BasicMiaoEvent } from './event';
interface BridgeEventCallback<E> {
    (event: E): void;
}
interface BridgeChannel<E> {
    on?: (event: string, cb: BridgeEventCallback<E>) => void;
    post?: (name: string, ...msg: any) => void;
    send?: (...msg: any) => void;
}
declare type AppEventName = 'resume' | 'pause';
interface AppLocker {
    release: () => void;
}
interface BridgeApp {
    on: (event: AppEventName, cb: (locker: AppLocker) => {}) => void;
    datadir: string;
}
export interface RnBridge<E = BasicMiaoEvent> {
    channel: BridgeChannel<E>;
    app: BridgeApp;
}
export {};
