package com.deskbtm.nawb.god.scheduleJob;

import androidx.annotation.NonNull;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class ScheduleJobPackage implements ReactPackage {
  private ReactNativeHost reactNativeHost;


  public ScheduleJobPackage(ReactNativeHost rnh) {
    reactNativeHost = rnh;
  }

  @NonNull
  @Override
  public List<NativeModule> createNativeModules(@NonNull ReactApplicationContext reactContext) {
    return Arrays.asList(new ScheduleJobModule(reactContext, reactNativeHost));
  }

  @NonNull
  @Override
  public List<ViewManager> createViewManagers(@NonNull ReactApplicationContext reactContext) {
    return Collections.emptyList();
  }
}
