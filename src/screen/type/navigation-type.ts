export type PluginRuntimeScreenParamProps = {
  pluginName: string;
  route?: {
    name: string;
    params?: Record<string, any>;
  };
};

export type RootNavigatorStackParamList = {
  PluginRuntimeScreen?: PluginRuntimeScreenParamProps;
};
