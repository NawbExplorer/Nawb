import { makeAutoObservable } from 'mobx';

export default class PluginProvider {
  constructor() {
    makeAutoObservable(this, {
      pluginRouteLocker: false,
      pluginHolderName: false,
      pluginSourceLocker: false,
      currentPluginRenderers: false,
      currentPluginRoutes: false,
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

  /**
   *
   * 设置当前正在使用插件的名字
   */
  pluginHolderName: string | null = null;

  /**
   *
   * @param name 设置当前正在使用插件的名字
   */
  setPluginHolderName(name: string | null) {
    this.pluginHolderName = name;
  }

  currentPluginRenderers: Set<string> = new Set();

  /**
   *
   * @param name
   */
  setCurrentPluginRender(name: string) {
    this.currentPluginRenderers.add(name);
  }

  clearCurrentPluginRender(name: string) {
    this.currentPluginRenderers.delete(name);
  }

  currentPluginRoutes: Set<string> = new Set();
  setCurrentPluginRoutes(name: string) {
    this.currentPluginRoutes.add(name);
  }
}
