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

export interface PluginExport {
  search?: SearchProps;
  pages?: PageProps;
}

export type CarlaRoute = {
  name: string;
  params?: Record<string, any>;
};

export interface PluginRenderProps {
  pluginName: string;
  renderName: string;
  route?: CarlaRoute;
}
