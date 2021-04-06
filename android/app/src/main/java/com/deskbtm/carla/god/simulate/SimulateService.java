package com.deskbtm.carla.god.simulate;

import android.accessibilityservice.AccessibilityService;
import android.accessibilityservice.GestureDescription;
import android.annotation.TargetApi;
import android.content.Intent;
import android.graphics.Path;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.util.Log;
import android.view.accessibility.AccessibilityEvent;

import androidx.annotation.RequiresApi;

public class SimulateService extends AccessibilityService {
  private static final String TAG = SimulateService.class.getSimpleName();

  private Handler handler = new Handler(Looper.getMainLooper()) {
    @TargetApi(Build.VERSION_CODES.N)
    @Override
    public void handleMessage(Message msg) {
      dispatchPointGesture(160, 60);
    }
  };

  @RequiresApi(24)
  public void dispatchPointGesture(float x, float y) {
    Path path = new Path();
    path.moveTo(x, y);
    boolean click = dispatchGesture(new GestureDescription
      .Builder()
      .addStroke(new GestureDescription.StrokeDescription(path, 0, 100)).build(), null, null);
    Log.i(TAG, "dispatchGestureClick: " + click);
  }


  @Override
  public void onAccessibilityEvent(AccessibilityEvent event) {
    int type = event.getEventType();
    Log.i(TAG, "onAccessibilityEvent: " + type);
    switch (type) {
      case AccessibilityEvent.TYPE_VIEW_SELECTED:
        handler.sendEmptyMessageDelayed(0, 1500);
        break;
      default:
    }
  }

  @Override
  public void onCreate() {
    super.onCreate();
    Log.d("start ====", "=========================");
    
  }

  @RequiresApi(api = Build.VERSION_CODES.N)
  @Override
  public int onStartCommand(Intent intent, int flags, int startId) {
    super.onStartCommand(intent, flags, startId);
    Log.d("======", "s9audhsabdoasbdsj");
    String data = "";
    float x = intent.getFloatExtra("x", 0);
    float y = intent.getFloatExtra("y", 0);
    
    dispatchPointGesture(x, y);
    
    
    


    return START_STICKY;
  }

  @Override
  public void onInterrupt() {

  }
}
