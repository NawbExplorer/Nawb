package com.deskbtm.nawb.dev;

import androidx.fragment.app.FragmentActivity;

import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.modules.core.PermissionAwareActivity;
import com.facebook.react.modules.core.PermissionListener;

public class SubReactActivity extends FragmentActivity implements DefaultHardwareBackBtnHandler, PermissionAwareActivity {
  
  @Override
  public void invokeDefaultOnBackPressed() {
      
  }

  @Override
  public void requestPermissions(String[] permissions, int requestCode, PermissionListener listener) {
    
  }
}
