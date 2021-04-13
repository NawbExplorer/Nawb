import {
  NodejsInitSuccessAction,
  ExecJsAction,
  ErrorReportAction,
  PluginRenderAction,
  PluginSearchAction,
  SetDeviceInfoAction,
  NodejsInitErrorAction,
  InstallPkgAction,
  InstallPkgErrorAction,
  InstallPkgSuccessAction,
} from './action-type';

export type PostReactNativeAction =
  | NodejsInitSuccessAction
  | NodejsInitErrorAction
  | ErrorReportAction
  | PluginSearchAction
  | InstallPkgErrorAction
  | InstallPkgSuccessAction;

export type ReceiveReactNativeAction =
  | ExecJsAction
  | SetDeviceInfoAction
  | ErrorReportAction
  | PluginSearchAction
  | PluginRenderAction
  | InstallPkgAction;
