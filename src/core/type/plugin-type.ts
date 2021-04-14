import {
  ExecJsAction,
  SetDeviceInfoAction,
  ErrorReportAction,
  PluginSearchAction,
  PluginRenderAction,
  InstallPkgAction,
  NodejsInitSuccessAction,
  NodejsInitErrorAction,
  SetEnvAction,
  NotFoundAction,
} from './action-type';

export type CarlaRoute = {
  name: string;
  params?: Record<string, any>;
};

export interface PluginRenderProps {
  pluginName: string;
  renderName: string;
  route?: CarlaRoute;
}

export type PostBridgeAction =
  | ExecJsAction
  | SetDeviceInfoAction
  | ErrorReportAction
  | PluginSearchAction
  | PluginRenderAction
  | InstallPkgAction
  | SetEnvAction;

export type ReceiveBridgeAction =
  | NodejsInitSuccessAction
  | NodejsInitErrorAction
  | ErrorReportAction
  | PluginSearchAction
  | NotFoundAction;
