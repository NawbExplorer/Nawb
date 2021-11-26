package com.deskbtm.nawb;

import android.os.Bundle;

import androidx.annotation.Nullable;
import androidx.fragment.app.FragmentActivity;

//import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
//import com.facebook.react.modules.core.PermissionAwareActivity;
//import com.facebook.react.modules.core.PermissionListener;

public class NawbBaseActivity extends FragmentActivity implements DefaultHardwareBackBtnHandler, PermissionAwareActivity {

  @Override
  protected void onCreate(@Nullable Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
  }

  @Override
  public void invokeDefaultOnBackPressed() {
    
  }

  @Override
  public void requestPermissions(String[] permissions, int requestCode, PermissionListener listener) {
    
  }

  @Override
  public void onPointerCaptureChanged(boolean hasCapture) {

  }
}
