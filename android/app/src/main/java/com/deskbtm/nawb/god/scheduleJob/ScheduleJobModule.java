package com.deskbtm.nawb.god.scheduleJob;

import android.net.Uri;

import androidx.annotation.NonNull;
import androidx.work.WorkManager;

import com.facebook.hermes.reactexecutor.HermesExecutorFactory;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.bridge.JavaScriptExecutorFactory;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.devsupport.interfaces.DevSupportManager;
import com.facebook.react.jscexecutor.JSCExecutorFactory;
import com.facebook.soloader.SoLoader;

public class ScheduleJobModule extends ReactContextBaseJavaModule {

  ReactApplicationContext reactApplicationContext;
  private WorkManager workManager;
  private ReactNativeHost reactNativeHost;


  public ScheduleJobModule(ReactApplicationContext reactApplicationContext, ReactNativeHost reactNativeHost) {
    this.reactApplicationContext = reactApplicationContext;
    this.reactNativeHost = reactNativeHost;
  }

  @NonNull
  @Override
  public String getName() {
    return "Schedule";
  }


  public ReactInstanceManager getReactInstanceManager() {
    return reactNativeHost.getReactInstanceManager();
  }

  public DevSupportManager getDevSupportManager() {
    return getReactInstanceManager().getDevSupportManager();
  }


  @ReactMethod
  public void createSchedule(final ReadableMap params, final Promise promise) {

  }
}
