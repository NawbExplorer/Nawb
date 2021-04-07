import type { EventEmitter } from 'events';

interface BridgeEventCallback<E> {
  (msg: E): void;
}

interface OverwriteEventEmitter extends EventEmitter {
  on: any;
}

interface BridgeChannel<E> extends OverwriteEventEmitter {
  on: (event: string, cb: BridgeEventCallback<E>) => this;
  post?: (name: string, ...msg: any) => void;
  send?: (...msg: any) => void;
}

type AppEventName = 'resume' | 'pause';

interface AppLocker {
  release: () => void;
}

interface BridgeApp {
  on: (event: AppEventName, cb: (locker: AppLocker) => {}) => void;
  datadir(): string;
}

export interface RnBridge<E = any> {
  channel: BridgeChannel<E>;
  app: BridgeApp;
}
