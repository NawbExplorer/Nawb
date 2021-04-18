interface SearchProps {
  api: (kw: string) => Promise<Record<string, any>>;
}

interface PageOptionsProps {
  entry?: boolean;
  title?: string;
  page: (params?: Record<string, any>) => Record<string, any>;
  pageName: string;
}

interface PageProps {
  [key: string]: PageOptionsProps;
}

export interface PluginUIExport {
  namespace: string;
  pages: PageProps;
}

export interface PluginSearchExport {
  namespace: string;
}

export interface PluginRenderProps {
  pluginName: string;
  renderName: string;
  route?: CarlaRoute;
  renderId: string;
}
export interface PluginExport {
  uiEntry(args: PluginRenderProps): PluginUIExport;
  searchEntry(): PluginSearchExport;
}

export type CarlaRoute = {
  name: string;
  params?: Record<string, any>;
};
