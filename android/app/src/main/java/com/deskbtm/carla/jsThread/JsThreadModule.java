package com.deskbtm.carla.jsThread;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.devsupport.interfaces.DevSupportManager;

public class JsThreadModule extends ReactContextBaseJavaModule implements LifecycleEventListener {
  private String TAG = "CarlaJsThreadModule";


  ReactNativeHost reactNativeHost;
  ReactApplicationContext reactApplicationContext;

  public JsThreadModule(ReactApplicationContext reactApplicationContext, ReactNativeHost reactNativeHost) {
    super(reactApplicationContext);
    this.reactNativeHost = reactNativeHost;
    this.reactApplicationContext = reactApplicationContext;
//    reactApplicationContext.

//    reactApplicationContext.

  }

  private ReactInstanceManager getReactInstanceManager() {
    return reactNativeHost.getReactInstanceManager();
  }

  private DevSupportManager getDevSupportManager() {
    return getReactInstanceManager().getDevSupportManager();
  }

//  private JSBundleLoader createDevBundleLoader(String path, String jsFileSlug) {
//    getDevSupportManager().getSourceMapUrl();
//    
//    
//    String bundleUrl = bundleUrlForFile(jsFileName);
//    // nested file directory will not exist in the files dir during development,
//    // so remove any leading directory paths to simply download a flat file into
//    // the root of the files directory.
//    String[] splitFileSlug = jsFileSlug.split("/");
//    String bundleOut = getReactApplicationContext().getFilesDir().getAbsolutePath() + "/" + splitFileSlug[splitFileSlug.length - 1];
//
//    Log.d(TAG, "createDevBundleLoader - download web thread to - " + bundleOut);
//    downloadScriptToFileSync(bundleUrl, bundleOut);
//
//    return JSBundleLoader.createCachedBundleFromNetworkLoader(bundleUrl, bundleOut);
//  }
//
//  

  @Override
  public void onHostResume() {

  }

  @Override
  public void onHostPause() {

  }

  @Override
  public void onHostDestroy() {
  }

  @NonNull
  @Override
  public String getName() {
    return "JsThread";
  }


//  private JSBundleLoader createDevBundleLoader(String jsFileName, String jsFileSlug) {
//    String bundleUrl = bundleUrlForFile(jsFileName);
//    // nested file directory will not exist in the files dir during development,
//    // so remove any leading directory paths to simply download a flat file into
//    // the root of the files directory.
//    String[] splitFileSlug = jsFileSlug.split("/");
//    String bundleOut = getReactApplicationContext().getFilesDir().getAbsolutePath() + "/" + splitFileSlug[splitFileSlug.length - 1];
//
//    Log.d(TAG, "createDevBundleLoader - download web thread to - " + bundleOut);
//    downloadScriptToFileSync(bundleUrl, bundleOut);
//
//    return JSBundleLoader.createCachedBundleFromNetworkLoader(bundleUrl, bundleOut);
//  }
//
//  private JSBundleLoader createReleaseBundleLoader(String jsFileName, String jsFileSlug) {
//    Log.d(TAG, "createReleaseBundleLoader - reading file from assets");
//    return JSBundleLoader.createAssetLoader(reactApplicationContext, "assets://threads/" + jsFileSlug + ".bundle", false);
//  }


  @ReactMethod
  public void startThread(final String path, final Promise promise) {
//    Log.d(TAG, "Starting web thread - " + path);

//    File file = new File(path);
//    if (!file.exists()) {
//      promise.reject("NOT_FOUND", path + "path not found");
//      return;
//    }
    
//    Log.d(TAG, getDevSupportManager().getSourceMapUrl());
//    Log.d(TAG, getDevSupportManager().getSourceUrl());
    
    Log.d("url", getDevSupportManager().getSourceUrl());
    
    
//    JSBundleLoader bundle = JSBundleLoader.createFileLoader("demo");
//    CatalystInstanceImpl.Builder builder = new CatalystInstanceImpl.Builder()
//      .setReactQueueConfigurationSpec(ReactQueueConfigurationSpec.createDefault());


//    ReactContextBuil
//    Log.d(TAG, getDevSupportManager().);


//    getDevSupportManager().getDevSupportEnabled() ? 

//    JSBundleLoader jsBundleLoader 

    // When we create the absolute file path later, a "./" will break it.
    // Remove the leading "./" if it exists.
//    String jsFileSlug = jsFileName.contains("./")
//      ? jsFileName.replace("./", "")
//      : jsFileName;
//
//    JSBundleLoader bundleLoader = getDevSupportManager().getDevSupportEnabled()
//      ? createDevBundleLoader(jsFileName, jsFileSlug)
//      : createReleaseBundleLoader(jsFileName, jsFileSlug);
//
//    try {
//      ArrayList<ReactPackage> threadPackages = new ArrayList<ReactPackage>(Arrays.asList(additionalThreadPackages));
//      threadPackages.add(0, new ThreadBaseReactPackage(getReactInstanceManager()));
//
//      ReactContextBuilder threadContextBuilder = new ReactContextBuilder(getReactApplicationContext())
//        .setJSBundleLoader(bundleLoader)
//        .setDevSupportManager(getDevSupportManager())
//        .setReactInstanceManager(getReactInstanceManager())
//        .setReactPackages(threadPackages);
//
//      JSThread thread = new JSThread(jsFileSlug);
//      thread.runFromContext(
//        getReactApplicationContext(),
//        threadContextBuilder
//      );
//      threads.put(thread.getThreadId(), thread);
//      promise.resolve(thread.getThreadId());
//    } catch (Exception e) {
//      promise.reject(e);
//      getDevSupportManager().handleException(e);
//    }
  }


}
