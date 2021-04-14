import { DeviceProps } from '../device';
import { PluginRenderProps } from './plugin-type';
// 向reactnative和 nodejs 通信的动作

/**执行javascript*/
export interface ExecJsAction {
  action: 'exec_js';
  data: {
    script: string;
    useStrict?: boolean;
  };
}

/**nodejs 初始化成功 */
export interface NodejsInitSuccessAction {
  action: 'nodejs_init_success';
}

/**nodejs初始化失败*/
export interface NodejsInitErrorAction {
  action: 'nodejs_init_error';
}

/**未发现 carla_bridge 上的有此action */
export interface NotFoundAction {
  action: 'not_found_action';
  data: {
    actionName: string;
  };
}

// /**进入app后nodejs carla_bridge环境或配置初始化错误 */
// export interface CarlaBridgeInitErrorAction {
//   action: 'carla_bridge_init_error';
// }

/**安装 npm包*/
export interface InstallPkgAction {
  action: 'install_pkg';
  data: {
    packageName: string;
  };
}

/**全局设置设备信息*/
export interface SetDeviceInfoAction {
  action: 'set_device_info';
  data: {
    device: DeviceProps;
  };
}

/**设置软件环境*/
export interface SetEnvAction {
  action: 'set_env';
  data: {
    env: 'production' | 'development';
    IS_DEV: boolean;
  };
}

/**全局设置设备信息*/
export interface ErrorReportAction {
  action: 'error_report';
  data: {
    error: string;
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

/**显示toast */
export interface ShowToastAction {
  action: 'show_toast';

  // data:
}
