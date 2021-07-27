import { NawbTree } from './nawbUI-type';

export interface PluginRenderReceiver {
  uiTree: NawbTree;
  pageName: string;
  /**
   * 强制发给react native 虽然没用
   */
  renderName: string;
  pluginName: string;
}
