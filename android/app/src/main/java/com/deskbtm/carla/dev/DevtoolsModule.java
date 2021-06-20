package com.deskbtm.carla.dev;

import android.app.Activity;
import android.util.Log;
import android.view.View;

import androidx.annotation.NonNull;

import com.deskbtm.carla.R;
import com.deskbtm.carla.common.JsBundleUtils;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.bridge.CatalystInstance;
import com.facebook.react.bridge.CatalystInstanceImpl;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.devsupport.DisabledDevSupportManager;
import com.facebook.react.devsupport.interfaces.DevSupportManager;

public class DevtoolsModule extends ReactContextBaseJavaModule {

  ReactApplicationContext reactApplicationContext;
  ReactNativeHost reactNativeHost;


  public DevtoolsModule(ReactApplicationContext reactApplicationContext, ReactNativeHost reactNativeHost) {
    this.reactApplicationContext = reactApplicationContext;
    this.reactNativeHost = reactNativeHost;
  }


  @NonNull
  @Override
  public String getName() {
    return "Devtools";
  }

  private ReactInstanceManager getReactInstanceManager() {
    return reactNativeHost.getReactInstanceManager();
  }

  private DevSupportManager getDevSupportManager() {
    return getReactInstanceManager().getDevSupportManager();
  }

  @ReactMethod
  public void startInspector() {
    getDevSupportManager().startInspector();
  }

  @ReactMethod
  public void stopInspector() {
    getDevSupportManager().startInspector();
  }

  @ReactMethod
  public void setProfilingEnabled(Boolean enabled) {
//    reactApplicationContext;
//    new CatalystInstance()

  }

  @ReactMethod
  public void showDevtoolsDialog() {
    getReactInstanceManager().showDevOptionsDialog();
  }

  @ReactMethod
  public void toggleElementInspector() {
    getDevSupportManager().toggleElementInspector();
  }
}
