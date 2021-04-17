export interface PluginRenderPoster {
  uiTree: Record<string, any>;
  pageName: string;
  /**
   * 强制发给react native 虽然没用
   */
  renderName: string;
  pluginName: string;
}
