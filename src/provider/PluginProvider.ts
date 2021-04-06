import { makeAutoObservable } from 'mobx';

export default class PluginProvider {
  constructor() {
    makeAutoObservable(this);
  }
  pluginSourceLocker = false;
  sourceHolderName: string | null = null;

  setPluginSourceLocker(lock: boolean) {
    this.pluginSourceLocker = lock;
  }

  setSourceHolderName(name: string | null) {
    this.sourceHolderName = name;
  }
}
