import { CarlaTree } from './carlaUI-type';

export interface PluginRenderReceiver {
  uiTree: CarlaTree;
  pageName: string;
  /**
   * 强制发给react native 虽然没用
   */
  renderName: string;
  pluginName: string;
}
