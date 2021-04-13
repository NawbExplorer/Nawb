export type CarlaRoute = {
  name: string;
  params?: Record<string, any>;
};

export interface PluginRenderProps {
  pluginName: string;
  renderName: string;
  route?: CarlaRoute;
}
