import { makeAutoObservable } from 'mobx';

export default class PluginProvider {
  constructor() {
    makeAutoObservable(this, {
      currentPluginRoutes: false,
      pluginHolderKey: false,
    });
  }

  /**
   *
   * 设置当前正在使用插件的路由key
   */
  pluginHolderKey: string | null = null;

  /**
   *
   * @param name 设置当前正在使用插件的路由key
   */
  setPluginHolderKey(name: string | null) {
    this.pluginHolderKey = name;
  }
  /**
   *
   * 设置当前正在使用插件的名字
   */
  currentPluginName: string | null = null;

  /**
   *
   * @param name 设置当前正在使用插件的名字
   */
  setCurrentPluginName(name: string | null) {
    this.currentPluginName = name;
  }

  // 推出插件
  exitPlugin() {
    this.setCurrentPluginName(null);
    this.clearCurrentPluginRoutes();
  }

  // 插件路由管理===================================================================

  currentPluginRoutes: string[] = [];

  pushToCurrentPluginRoutes(name: string) {
    this.currentPluginRoutes.push(name);
  }

  popFromCurrentPluginRoutes(count?: number) {
    if (count) {
      const len = this.currentPluginRoutes.length;
      this.currentPluginRoutes.splice(len - count, count);
    } else {
      this.currentPluginRoutes.pop();
    }
  }

  popToRootFromCurrentPluginRoutes(): number {
    const len = this.currentPluginRoutes.length;
    this.currentPluginRoutes.splice(1, len - 1);
    return len - 1;
  }

  replaceFromCurrentPluginRoutes(name: string) {
    try {
      const len = this.currentPluginRoutes.length;
      if (len > 0) {
        this.currentPluginRoutes[this.currentPluginRoutes.length - 1] = name;
      }
    } catch (err) {}
  }

  clearCurrentPluginRoutes() {
    this.currentPluginRoutes = [];
  }

  addToCurrentPluginRoutes(name: string): boolean {
    const len = this.currentPluginRoutes.length;
    if (len > 0) {
      if (this.currentPluginRoutes[len - 1] !== name) {
        this.currentPluginRoutes.push(name);
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  // currentPluginRenderers: Set<string> = new Set();

  // /**
  //  *
  //  * @param name
  //  */
  // addCurrentPluginRender(name: string) {
  //   this.currentPluginRenderers.add(name);
  // }

  // clearCurrentPluginRender(name: string) {
  //   this.currentPluginRenderers.delete(name);
  // }

  // currentPluginRoutes: Set<string> = new Set();
  // setCurrentPluginRoutes(name: string) {
  //   this.currentPluginRoutes.add(name);
  // }
}
