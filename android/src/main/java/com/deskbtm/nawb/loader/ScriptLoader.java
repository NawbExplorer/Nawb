package com.deskbtm.nawb.loader;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.devsupport.interfaces.DevSupportManager;

public class ScriptLoader {
  private ReactContext mContext;
  private ReactNativeHost mHost;

  public ScriptLoader(ReactContext context, ReactNativeHost host) {
    mContext = context;
    mHost = host;
  }

  private ReactInstanceManager getReactInstanceManager() {
    return mHost.getReactInstanceManager();
  }


  /**
   * ### Setting the ngModel name attribute through options
   * <p>
   * The following example shows you an alternate way to set the name attribute. The name attribute is used
   * within a custom form component, and the name `@Input` property serves a different purpose.
   * <p>
   * ```html
   * <form>
   * <my-person-control name="Nancy" ngModel [ngModelOptions]="{name: 'user'}">
   * </my-person-control>
   * </form>
   * <!-- form value: {user: ''} -->
   * ```
   *
   * @ngModule FormsModule
   * @publicApi
   */
  public DevSupportManager getDevSupportManager() {
    return getReactInstanceManager().getDevSupportManager();
  }


}
