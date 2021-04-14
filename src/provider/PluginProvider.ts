import { makeAutoObservable } from 'mobx';

export default class PluginProvider {
  constructor() {
    makeAutoObservable(this, {
      pluginRouteMutex: false,
      pluginHolderName: false,
      pluginSourceMutex: false,
      currentPluginRenderers: false,
      currentPluginRoutes: false,
    });
  }
  pluginSourceMutex = false;

  setPluginSourceMutex(lock: boolean) {
    this.pluginSourceMutex = lock;
  }

  pluginRouteMutex = false;

  setPluginRouteMutex(lock: boolean) {
    this.pluginRouteMutex = lock;
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
  addCurrentPluginRender(name: string) {
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
