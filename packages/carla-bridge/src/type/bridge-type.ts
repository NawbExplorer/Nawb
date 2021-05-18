import type { EventEmitter } from 'events';
import {
  ErrorReportAction,
  InstallPkgAction,
  InstallPkgErrorAction,
  InstallPkgSuccessAction,
  NodejsInitErrorAction,
  NodejsInitSuccessAction,
  NotFoundAction,
  PluginRenderAction,
  PluginSearchAction,
  SetEnvAction,
} from './action-type';

interface BridgeEventCallback<E> {
  (msg: E): void;
}

interface OverwriteEventEmitter extends EventEmitter {
  on: any;
}

interface BridgeChannel<E> extends OverwriteEventEmitter {
  on: (event: string, cb: BridgeEventCallback<E>) => this;
  post<T = any>(event: string, ...message: T[]): void;
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
