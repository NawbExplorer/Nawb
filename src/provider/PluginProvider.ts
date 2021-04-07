import { makeAutoObservable } from 'mobx';

export default class PluginProvider {
  constructor() {
    makeAutoObservable(this, {
      pluginRouteLocker: false,
      sourceHolderName: false,
      pluginSourceLocker: false,
    });
  }
  pluginSourceLocker = false;

  setPluginSourceLocker(lock: boolean) {
    this.pluginSourceLocker = lock;
  }

  pluginRouteLocker = false;

  setPluginRouteLocker(lock: boolean) {
    this.pluginRouteLocker = lock;
  }

  sourceHolderName: string | null = null;
  setSourceHolderName(name: string | null) {
    this.sourceHolderName = name;
  }
}
