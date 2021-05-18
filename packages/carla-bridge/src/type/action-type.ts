import { PluginRenderProps } from './plugin-type';
// 向reactnative和 nodejs 通信的动作

// 此文件只规定通过CARLA_BRIDGE事件的动作 其他使用poster-type 和 receiver-type

// /**执行javascript*/
// export interface ExecJsAction {
//   action: 'exec_js';
//   data: {
//     script: string;
//     useStrict?: boolean;
//   };
// }

/**nodejs 初始化成功 */
export interface NodejsInitSuccessAction {
  action: 'nodejs_init_success';
  // data:
}

/**nodejs初始化失败*/
export interface NodejsInitErrorAction {
  action: 'nodejs_init_error';
  // data:
}

/**安装 npm包*/
export interface InstallPkgAction {
  action: 'install_pkg';
  data: {
    packageName: string;
  };
}

/**安装 npm包 成功*/
export interface InstallPkgSuccessAction {
  action: 'install_pkg_success';
}

/**安装 npm包 成功*/
export interface InstallPkgErrorAction {
  action: 'install_pkg_error';
}

// /**全局设置设备信息*/
// export interface SetDeviceInfoAction {
//   action: 'set_device_info';
//   data: {
//     device: DeviceProps;
//   };
// }

/**设置软件环境*/
export interface SetEnvAction {
  action: 'set_env';
  data: {
    device: DeviceProps;
    env: 'production' | 'development';
    IS_DEV: boolean;
    platform: Platform;
  };
}

/**全局设置设备信息*/
export interface ErrorReportAction {
  action: 'error_report';
  data: {
    type: string;
    error: string | number | [];
  };
}

/**插件内容搜索 */
export interface PluginSearchAction {
  action: 'plugin_search';
  // data:
}

/**插件渲染 */
export interface PluginRenderAction {
  action: 'plugin_render';
  data: PluginRenderProps;
}

/**未发现 carla_bridge 上的有此action */
export interface NotFoundAction {
  action: 'not_found_action';
  data: {
    actionName: string;
  };
}

/**重启carla环境 */
export interface RestartCarlaEnvAction {
  action: 'restart_carla_env_action';
}

export type PostReactNativeAction =
  | NodejsInitSuccessAction
  | NodejsInitErrorAction
  | ErrorReportAction
  | PluginSearchAction
  | InstallPkgErrorAction
  | InstallPkgSuccessAction
  | NotFoundAction;

export type ReceiveReactNativeAction =
  // | SetDeviceInfoAction
  | PluginSearchAction
  | PluginRenderAction
  | InstallPkgAction
  | SetEnvAction
  | RestartCarlaEnvAction;
