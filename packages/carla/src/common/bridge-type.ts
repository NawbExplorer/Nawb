import type { EventEmitter } from 'events';

interface BridgeEventCallback<E> {
  (msg: E): void;
}

interface OverwriteEventEmitter extends EventEmitter {
  on: any;
}

interface BridgeChannel<E> extends OverwriteEventEmitter {
  on: (event: string, cb: BridgeEventCallback<E>) => this;
  post<T = any>(event: string, ...message: T[]): void;
  send<T = any>(...msg: T[]): void;
}

type AppEventName = 'resume' | 'pause';

interface AppLocker {
  release: () => void;
}

interface BridgeApp {
  on: (event: AppEventName, cb: (locker: AppLocker) => {}) => void;
  datadir: string;
}

export interface RnBridge<E = {}> {
  channel: BridgeChannel<E>;
  app: BridgeApp;
}
