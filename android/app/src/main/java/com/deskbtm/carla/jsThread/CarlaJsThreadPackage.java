package com.deskbtm.carla.jsThread;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class CarlaJsThreadPackage implements ReactPackage {

  private ReactNativeHost reactNativeHost;
  private ReactPackage extraPackages[];


  public CarlaJsThreadPackage(ReactNativeHost rnh, ReactPackage... ep) {
    reactNativeHost = rnh;
    extraPackages = ep;
  }


  @Override
  public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
    return Arrays.asList(new CarlaJsThreadModule(reactContext, reactNativeHost));
  }

  @Override
  public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
    return Collections.emptyList();
  }
}

