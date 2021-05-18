package com.deskbtm.carla.tools.wallpaper;

import android.app.Activity;
import android.app.WallpaperManager;
import android.net.Uri;
import android.os.Build;
import android.util.Log;
import android.util.Base64;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.drawable.Drawable;

import androidx.annotation.Nullable;

import com.bumptech.glide.Glide;
import com.bumptech.glide.load.DecodeFormat;
import com.bumptech.glide.load.model.GlideUrl;
import com.bumptech.glide.load.model.LazyHeaders;
import com.bumptech.glide.request.RequestOptions;
import com.bumptech.glide.request.target.CustomTarget;
import com.bumptech.glide.request.transition.Transition;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.views.imagehelper.ResourceDrawableIdHelper;
import com.facebook.react.views.imagehelper.ImageSource;

public class WallpaperModule extends ReactContextBaseJavaModule {
  private String TAG = "WallpaperModule";
  private final ReactApplicationContext reactContext;
  private WallpaperManager wallpaperManager;
  private Promise gPromise;
  private ResourceDrawableIdHelper mResourceDrawableIdHelper;
  private Uri mUri;
  private ReactApplicationContext mApplicationContext;
  private Activity mCurrentActivity;

  public WallpaperModule(ReactApplicationContext context) {
    super(context);
    this.reactContext = context;
    mApplicationContext = getReactApplicationContext();

    wallpaperManager = WallpaperManager.getInstance(mApplicationContext);
  }

  @Override
  public String getName() {
    return "Wallpaper";
  }


  private void sendMessage(String status, String msg, String source) {
    WritableMap map = Arguments.createMap();
    map.putString("status", status);
    map.putString("msg", msg);
    map.putString("url", source);
    if (status == "success") {
      gPromise.resolve(map);
    } else {
      gPromise.reject(TAG, map);
    }
    gPromise = null;
  }


  @ReactMethod
  public void setWallpaper(final ReadableMap params, final String type, final Promise promise) {

    final String source = params.hasKey("uri") ? params.getString("uri") : null;
    ReadableMap headers = params.hasKey("headers") ? params.getMap("headers") : null;

    if (gPromise != null) {
      sendMessage("error", "busy", source);
      return;
    } else {
      gPromise = promise;
    }


    final CustomTarget<Bitmap> customTarget = this.getCustomTarget(source, type);
    mCurrentActivity = getCurrentActivity();

    if (mCurrentActivity == null) {
      sendMessage("error", "activity get null", source);
    }

    //handle base64
    if ("data:image/png;base64,".startsWith(source)) {
      mCurrentActivity.runOnUiThread(new Runnable() {
        public void run() {
          Utils.assertMainThread();
          try {
            Glide
              .with(mApplicationContext)
              .asBitmap()
              .apply(requestOptions())
              .load(Base64.decode(source.replaceAll("data:image\\/.*;base64,", ""), Base64.DEFAULT))
              .into(customTarget);
          } catch (Exception e) {
            sendMessage("error", "Exception in Glide：" + e.getMessage(), source);
          }
        }
      });

      return;
    }

    boolean useStorageFile = false;

    // handle bundled app resources
    try {
      mUri = Uri.parse(source);
      // Verify scheme is set, so that relative uri (used by static resources) are not handled.
      if (mUri.getScheme() == null) {
        mUri = null;
      } else if (
        !mUri.getScheme().equals("http") &&
          !mUri.getScheme().equals("https")
      ) {
        useStorageFile = true;
      }
    } catch (Exception e) {
      // ignore malformed uri, then attempt to extract resource ID.
    }

    if (mUri == null) {
      ImageSource is = new ImageSource(this.getReactApplicationContext(), source);
      if (is.isResource()) {
        int resId = mResourceDrawableIdHelper.getInstance().getResourceDrawableId(this.getReactApplicationContext(), source);
        Bitmap mBitmap = BitmapFactory.decodeResource(this.getReactApplicationContext().getResources(), resId);

        try {
          if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            if (type.equals("home")) {
              wallpaperManager.setBitmap(mBitmap, null, true, WallpaperManager.FLAG_SYSTEM);
            } else if (type.equals("lock")) {
              wallpaperManager.setBitmap(mBitmap, null, true, WallpaperManager.FLAG_LOCK);
            } else {
              wallpaperManager.setBitmap(mBitmap, null, true, WallpaperManager.FLAG_LOCK | WallpaperManager.FLAG_SYSTEM);
            }
          } else {
            wallpaperManager.setBitmap(mBitmap);
          }
          sendMessage("success", "Set Wallpaper Success", source);
        } catch (Exception e) {
          sendMessage("error", "Exception in SimpleTarget：" + e.getMessage(), source);

          return;
        }
        return;
      }

      mUri = is.getUri();
      mCurrentActivity.runOnUiThread(new Runnable() {
        public void run() {
          Utils.assertMainThread();
          try {
            Glide
              .with(mApplicationContext)
              .asBitmap()
              .apply(requestOptions())
              .load(mUri)
              .into(customTarget);
          } catch (Exception e) {
            sendMessage("error", "Exception in Glide：" + e.getMessage(), source);
          }
        }
      });
    } else if (useStorageFile) {
      mCurrentActivity.runOnUiThread(new Runnable() {
        public void run() {
          Utils.assertMainThread();
          try {
            Glide
              .with(mApplicationContext)
              .asBitmap()
              .apply(requestOptions())
              .load(mUri)
              .into(customTarget);
          } catch (Exception e) {
            sendMessage("error", "Exception in Glide：" + e.getMessage(), source);
          }
        }
      });
    } else {
      // Handle an http / https address
      final LazyHeaders.Builder lazyHeaders = new LazyHeaders.Builder();

      if (headers != null) {
        ReadableMapKeySetIterator it = headers.keySetIterator();
        Log.d("next headers", String.valueOf(it.hasNextKey()));
        while (it.hasNextKey()) {
          String Key = it.nextKey();
          lazyHeaders.addHeader(Key, headers.getString(Key));
        }
      }

      mCurrentActivity.runOnUiThread(new Runnable() {
        public void run() {
          Utils.assertMainThread();
          try {
            Glide
              .with(mApplicationContext)
              .asBitmap()
              .apply(requestOptions())
              .load(new GlideUrl(mUri.toString(), lazyHeaders.build()))
              .into(customTarget);
          } catch (Exception e) {
            sendMessage("error", "Exception in Glide：" + e.getMessage(), source);
          }
        }
      });
    }
  }

  private RequestOptions requestOptions() {
    return new RequestOptions()
      .format(DecodeFormat.PREFER_ARGB_8888)
      .centerCrop();
  }

  private CustomTarget<Bitmap> getCustomTarget(final String source, final String type) {
    return new CustomTarget<Bitmap>(1080, 1920) {
      @Override
      public void onResourceReady(Bitmap bitmap, Transition<? super Bitmap> transition) {
        try {
          if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            if (type.equals("home")) {
              wallpaperManager.setBitmap(bitmap, null, true, WallpaperManager.FLAG_SYSTEM);
            } else if (type.equals("lock")) {
              wallpaperManager.setBitmap(bitmap, null, true, WallpaperManager.FLAG_LOCK);
            } else {
              wallpaperManager.setBitmap(bitmap, null, true, WallpaperManager.FLAG_LOCK | WallpaperManager.FLAG_SYSTEM);
            }
          } else {
            wallpaperManager.setBitmap(bitmap);
          }
          sendMessage("success", "Set Wallpaper Success", source);
        } catch (Exception e) {
          sendMessage("error", "Exception in SimpleTarget：" + e.getMessage(), source);
          return;
        }
      }

      @Override
      public void onLoadCleared(@Nullable Drawable placeholder) {
      }

      @Override
      public void onLoadFailed(Drawable errorDrawable) {
        sendMessage("error", "Set Wallpaper Failed：" + errorDrawable.toString(), source);
      }
    };
  }
}
