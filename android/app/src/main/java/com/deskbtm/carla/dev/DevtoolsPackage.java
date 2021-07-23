package com.deskbtm.carla.dev;

import android.app.Activity;
import android.util.Log;
import android.view.View;

import androidx.annotation.NonNull;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class DevtoolsPackage implements ReactPackage {

  private ReactNativeHost reactNativeHost;


  public DevtoolsPackage(ReactNativeHost reactNativeHost) {
    this.reactNativeHost = reactNativeHost;
    
    Log.d("demo", "================================");

//    getActivity().setContentView(R.layout.layout_main);
//    
//
//    getActivity().findViewById(R.id.button).setOnClickListener(new View.OnClickListener() {
//      String uri = "http://localhost:8081/index.bundle?platform=android&dev=true&minify=false&app=com.deskbtm.carla&modulesOnly=false&runModule=true";
//
//      @Override
//      public void onClick(View v) {//点击进入rn业务1
//        new JsBundleUtils(reactNativeHost, reactApplicationContext).getJsBundleFromDevServer(uri);
////        startActivity(new Intent(MainActivity.this, Buz1Activity?.class));
//      }
//    });
  }

  @NonNull
  @Override
  public List<NativeModule> createNativeModules(@NonNull ReactApplicationContext reactContext) {
    ArrayList modules = new ArrayList();
    modules.add(new DevtoolsModule(reactContext, reactNativeHost));
    return modules;
  }

  @NonNull
  @Override
  public List<ViewManager> createViewManagers(@NonNull ReactApplicationContext reactContext) {
    return Collections.emptyList();
  }
}
