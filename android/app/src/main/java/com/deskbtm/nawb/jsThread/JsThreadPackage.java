package com.deskbtm.nawb.jsThread;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class JsThreadPackage implements ReactPackage {

  private ReactNativeHost reactNativeHost;
  

  public JsThreadPackage(ReactNativeHost reactNativeHost, ReactPackage... ep) {
    this.reactNativeHost = reactNativeHost;
  }


  @Override
  public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
    ArrayList list = new ArrayList();
    list.add(new JsThreadModule(reactContext, reactNativeHost));
    return list;
  }

  @Override
  public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
    return Collections.emptyList();
  }
}

