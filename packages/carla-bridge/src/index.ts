/*
 *   Copyright (c) 2021
 *   All rights reserved.
 */
import { GlobalCarlaMgmt } from './utils/GlobalCarlaMgmt';
import { CarlaEnvBuilder } from 'src/CarlaEnvBuilder';
import { reportErrorToReactNative } from './utils';
// 可以直接导入 因为 rn-bridge 的路径被加入到了NODE_PATH中
// 可见 native-lib.cpp

function demo(params: string[]): params is string[] {
  console.log(111);
  return true;
}

demo(['111']);

// bridge 入口
(async function () {
  try {
    process.on('unhandledRejection', reason => {
      const tip = 'unhandledrejection -- ' + JSON.stringify(reason);
      console.log(tip);
      reportErrorToReactNative(tip);
    });

    GlobalCarlaMgmt.makeCarlaNotBeNull().presetCarlaAsGlobalVariable();

    CarlaEnvBuilder.prepareNodejsEnv();

    const msgHandler = await CarlaEnvBuilder.initEnv({
      retryCount: 2,
      onRetry() {
        console.log(111111111111111);
      },
    }).catch(err => {
      reportErrorToReactNative(err);
    });

    if (msgHandler) {
      msgHandler.startListener();
    }
  } catch (error) {
    reportErrorToReactNative(error);
  }
})();
