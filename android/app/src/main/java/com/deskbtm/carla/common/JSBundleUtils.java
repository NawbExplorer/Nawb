package com.deskbtm.carla.common;

import android.util.Log;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.bridge.JSBundleLoader;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.devsupport.interfaces.DevSupportManager;

import java.io.File;
import java.io.IOException;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okio.Okio;
import okio.Sink;

public class JSBundleUtils {
  private String TAG = "JsBundleUtils";
  private ReactNativeHost reactNativeHost;
  private ReactApplicationContext reactApplicationContext;

  public JSBundleUtils(ReactNativeHost rnh, ReactApplicationContext rac) {
    reactNativeHost = rnh;
    reactApplicationContext = rac;
  }

  public ReactInstanceManager getReactInstanceManager() {
    return reactNativeHost.getReactInstanceManager();
  }

  public DevSupportManager getDevSupportManager() {
    return getReactInstanceManager().getDevSupportManager();
  }

  public void downloadBundleToFileSync(String bundleUrl, String bundleOut) {
    OkHttpClient client = new OkHttpClient();
    final File out = new File(bundleOut);

    Request request = new Request.Builder()
      .url(bundleUrl)
      .build();

    try {
      Response response = client.newCall(request).execute();
      if (!response.isSuccessful()) {
        throw new RuntimeException("Error downloading thread script - " + response.toString());
      }

      Sink output = Okio.sink(out);
      Okio.buffer(response.body().source()).readAll(output);
    } catch (IOException e) {
      throw new RuntimeException("Exception downloading thread script to file", e);
    }
  }


  private String bundleUrlForFile(final String fileName) {
    // http://localhost:8081/index.android.bundle?platform=android&dev=true&hot=false&minify=false
    String sourceUrl = getDevSupportManager().getSourceUrl().replace("http://", "");
    return "http://"
      + sourceUrl.split("/")[0]
      + "/"
      + fileName
      + ".bundle?platform=android&dev=true&hot=false&minify=false";
  }

  public JSBundleLoader createDevBundleLoader(String jsFileName, String jsFileSlug) {
    String bundleUrl = bundleUrlForFile(jsFileName);
    // nested file directory will not exist in the files dir during development,
    // so remove any leading directory paths to simply download a flat file into
    // the root of the files directory.
    String[] splitFileSlug = jsFileSlug.split("/");
    String bundleOut = reactApplicationContext.getFilesDir().getAbsolutePath() + "/" + splitFileSlug[splitFileSlug.length - 1];

    Log.d(TAG, "createDevBundleLoader - download web thread to - " + bundleOut);
    downloadBundleToFileSync(bundleUrl, bundleOut);

    return JSBundleLoader.createCachedBundleFromNetworkLoader(bundleUrl, bundleOut);
  }

  public JSBundleLoader createReleaseBundleLoader(String jsFileSlug) {
    Log.d(TAG, "createReleaseBundleLoader - reading file from assets");
    return JSBundleLoader.createAssetLoader(reactApplicationContext, "assets://threads/" + jsFileSlug + ".bundle", false);
  }
}
