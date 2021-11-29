package com.deskbtm.nawb.god.simulate;

import android.accessibilityservice.AccessibilityService;
import android.accessibilityservice.AccessibilityServiceInfo;
import android.accessibilityservice.GestureDescription;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ServiceInfo;
import android.os.Build;
import android.os.Handler;
import android.provider.Settings;
import android.view.accessibility.AccessibilityEvent;
import android.view.accessibility.AccessibilityManager;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.annotation.RequiresApi;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.lang.reflect.Method;
import java.util.List;

import static android.content.Intent.FLAG_ACTIVITY_NEW_TASK;

public class SimulateModule extends ReactContextBaseJavaModule {

  ReactApplicationContext reactApplicationContext;
  
  public SimulateModule(ReactApplicationContext context) {
    super(context);
    reactApplicationContext = context;
  }

  @NonNull
  @Override
  public String getName() {
    return "Simulate";
  }

  public static boolean isAccessibilityServiceEnabled(Context context, Class<? extends AccessibilityService> service) {
    AccessibilityManager am = (AccessibilityManager) context.getSystemService(Context.ACCESSIBILITY_SERVICE);
    List<AccessibilityServiceInfo> enabledServices = am.getEnabledAccessibilityServiceList(AccessibilityServiceInfo.FEEDBACK_ALL_MASK);


    for (AccessibilityServiceInfo enabledService : enabledServices) {
      ServiceInfo enabledServiceInfo = enabledService.getResolveInfo().serviceInfo;
      if (enabledServiceInfo.packageName.equals(context.getPackageName()) && enabledServiceInfo.name.equals(service.getName()))
        return true;
    }

    return false;
  }


  @RequiresApi(api = Build.VERSION_CODES.N)
  @ReactMethod
  void startSimulateService(float x, float y) throws NoSuchMethodException {
//    if (!isAccessibilityServiceEnabled(reactApplicationContext, SimulateService.class)) {
//      Intent i = new Intent(Settings.ACTION_ACCESSIBILITY_SETTINGS);
//      i.addFlags(FLAG_ACTIVITY_NEW_TASK);
//      reactApplicationContext.startActivity(i);
//      return;
//    }

//    SimulateService ss = new SimulateService();
//    ss.dispatchGestureTouch(100,20);  
//    
    Intent intent = new Intent(reactApplicationContext, SimulateService.class);
    intent.putExtra("x", x);
    intent.putExtra("y", y);
//    intent.addFlags(FLAG_ACTIVITY_NEW_TASK);
    reactApplicationContext.startService(intent);


//    Method dispatchGestureTouch = SimulateService.class.getDeclaredMethod("dispatchGestureTouch", int.class, int.class);
////    
//    dispatchGestureTouch.invoke(, 1, 1);
//    

  }


  private void sendEvent(ReactContext reactApplicationContext,
                         String eventName,
                         @Nullable WritableMap params) {
    reactApplicationContext
      .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
      .emit(eventName, params);
  }


}
