export type PluginRuntimeScreenParamProps = {
  pluginName: string | null;
  route?: {
    name: string;
    params?: Record<string, any>;
  };
};

export type RootNavigatorStackParamList = {
  PluginRuntimeScreen?: PluginRuntimeScreenParamProps;
};
