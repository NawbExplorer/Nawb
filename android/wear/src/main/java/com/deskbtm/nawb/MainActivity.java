package com.deskbtm.nawb;

import com.facebook.react.ReactActivity;

//import com.facebook.react.ReactActivityDelegate;
//import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "NawbExplorer";
  }
  
//  @Override
//  protected ReactActivityDelegate createReactActivityDelegate() {
//    return new ReactActivityDelegate(this, getMainComponentName()) {
//      @Override
//      protected ReactRootView createRootVRNGestureHandlerEnabledRootViewiew() {
//        return new RNGestureHandlerEnabledRootView(MainActivity.this);
//      }
//    };
//  }

//    @Override
//  public void onConfigurationChanged(Configuration newConfig) {
//    super.onConfigurationChanged(newConfig);
//    Intent intent = new Intent("onConfigurationChanged");
//    intent.putExtra("newConfig", newConfig);
//    this.sendBroadcast(intent);
//  }

}
