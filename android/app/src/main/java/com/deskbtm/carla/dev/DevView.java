package com.deskbtm.carla.dev;

import android.view.View;

import androidx.annotation.NonNull;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;

public class DevView extends ViewGroupManager {


  @NonNull
  @Override
  public String getName() {
    return null;
  }

  @NonNull
  @Override
  protected View createViewInstance(@NonNull ThemedReactContext reactContext) {
    return null;
  }

  @Override
  public void updateExtraData(@NonNull View root, Object extraData) {
    
  }
}
