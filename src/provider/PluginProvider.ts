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
    this.clearPluginRoute();
  }

  // 插件路由管理=========================================================

  private _currentPluginRoutes: string[] = [];

  get currentPluginRoutes() {
    return this._currentPluginRoutes;
  }

  set currentPluginRoutes(val) {}

  get currentPluginRoutesLength() {
    return this._currentPluginRoutes.length;
  }

  pushPluginRoute(name: string) {
    this._currentPluginRoutes.push(name);
  }

  popPluginRoute(count?: number) {
    if (count) {
      const len = this._currentPluginRoutes.length;

      this._currentPluginRoutes.splice(len - count, count);
    } else {
      this._currentPluginRoutes.pop();
    }
  }

  getPopToRootCount(): number {
    return this._currentPluginRoutes.length - 1;
  }

  replacePluginRoute(name: string) {
    try {
      const len = this._currentPluginRoutes.length;
      if (len > 0) {
        this._currentPluginRoutes[this._currentPluginRoutes.length - 1] = name;
      }
    } catch (err) {}
  }

  clearPluginRoute() {
    this._currentPluginRoutes = [];
  }

  /**
   *
   * @param name 添加到路由栈的名字
   * @returns {boolean} 如果添加的名字和栈底名字相同则不添加
   */
  addToPluginRoute(name: string): boolean {
    const len = this._currentPluginRoutes.length;
    if (len > 0) {
      if (this._currentPluginRoutes[len - 1] !== name) {
        this._currentPluginRoutes.push(name);
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
