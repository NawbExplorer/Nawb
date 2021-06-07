package com.deskbtm.carla.tools.shortcut;

import android.annotation.TargetApi;
import android.content.Intent;
import android.content.pm.ShortcutInfo;
import android.content.pm.ShortcutManager;
import android.graphics.Bitmap;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.Icon;
import android.net.Uri;
import android.os.Build;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.bumptech.glide.Glide;
import com.bumptech.glide.request.target.CustomTarget;
import com.bumptech.glide.request.transition.Transition;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class CarlaShortcutModule extends ReactContextBaseJavaModule {
  
  private String TAG = "CarlaShortcutModule";
  

  private final ReactApplicationContext reactApplicationContext;

  public CarlaShortcutModule(ReactApplicationContext applicationContext) {
    super(applicationContext);
    reactApplicationContext = applicationContext;
  }

  @NonNull
  @Override
  public String getName() {
    return "CarlaShortcut";
  }

  @ReactMethod
  @TargetApi(26)
  private void addPinnedShortcut(ReadableMap shortcut, Promise promise) {
    if (!isShortcutSupported()) {
      promise.resolve(false);
      return;
    }

    try {
      String label = shortcut.getString("label");
      String description = shortcut.getString("description");
      ReadableMap icon = shortcut.getMap("icon");
      ReadableMap link = shortcut.getMap("link");


      Glide.with(reactApplicationContext).asBitmap().load(icon).into(new CustomTarget<Bitmap>() {
        @Override
        public void onResourceReady(@NonNull Bitmap resource, @Nullable Transition<? super Bitmap> transition) {
          ShortcutManager mShortcutManager = getReactApplicationContext().getSystemService(ShortcutManager.class);

          Intent shortcutIntent = new Intent(getReactApplicationContext(), CarlaShortcutModule.class);
          shortcutIntent.setAction(Intent.ACTION_MAIN);
          Intent intent = new Intent();
          intent.setAction(Intent.ACTION_VIEW);
          intent.setData(Uri.parse(link.getString("url")));

          ShortcutInfo shortcutInfo = null;
          if (resource != null) {
            shortcutInfo = new ShortcutInfo.Builder(getReactApplicationContext(), label).setShortLabel(label)
              .setLongLabel(description).setIntent(intent).setIcon(Icon.createWithBitmap(resource)).build();
          } else {
            shortcutInfo = new ShortcutInfo.Builder(getReactApplicationContext(), label).setShortLabel(label)
              .setLongLabel(description).setIntent(intent).build();
          }

          if (mShortcutManager != null) {
            mShortcutManager.requestPinShortcut(shortcutInfo, null);

            promise.resolve(true);
            return;
          }
        }

        @Override
        public void onLoadCleared(@Nullable Drawable placeholder) {

        }
      });
    } catch (Exception err) {
      promise.reject(TAG, err);
    }
  }

  @ReactMethod
  @TargetApi(25)
  private void addDynamicShortcut(ReadableMap shortcut, final Callback onDone, final Callback onCancel) {
    if (!isShortcutSupported()) {
      onCancel.invoke();
      return;
    }

    ShortcutManager mShortcutManager = getReactApplicationContext().getSystemService(ShortcutManager.class);

    String label = shortcut.getString("label");
    String description = shortcut.getString("description");
    ReadableMap icon = shortcut.getMap("icon");
    ReadableMap link = shortcut.getMap("link");


    Glide.with(reactApplicationContext).asBitmap().load(icon).into(new CustomTarget<Bitmap>() {
      @Override
      public void onResourceReady(@NonNull Bitmap bitmap, @Nullable Transition<? super Bitmap> transition) {
        Intent shortcutIntent = new Intent(getReactApplicationContext(), CarlaShortcutModule.class);
        shortcutIntent.setAction(Intent.ACTION_MAIN);
        Intent intent = new Intent();
        intent.setAction(Intent.ACTION_VIEW);
        intent.setData(Uri.parse(link.getString("url")));


        ShortcutInfo shortcutInfo = null;
        if (bitmap != null) {
          shortcutInfo = new ShortcutInfo.Builder(getReactApplicationContext(), label).setShortLabel(label)
            .setLongLabel(description).setIntent(intent).setIcon(Icon.createWithBitmap(bitmap)).build();
        } else {
          shortcutInfo = new ShortcutInfo.Builder(getReactApplicationContext(), label).setShortLabel(label)
            .setLongLabel(description).setIntent(intent).build();
        }

        List<ShortcutInfo> list = new ArrayList<>();
        list.add(shortcutInfo);

        if (mShortcutManager != null) {
          mShortcutManager.setDynamicShortcuts(list);

          onDone.invoke();
          return;
        }
      }

      @Override
      public void onLoadCleared(@Nullable Drawable placeholder) {
      }
    });
    onCancel.invoke();
  }

  @ReactMethod
  @TargetApi(25)
  public void removeAllDynamicShortcuts(final Callback onDone, final Callback onCancel) {
    if (!isShortcutSupported()) {
      onCancel.invoke();
      return;
    }

    getReactApplicationContext().getSystemService(ShortcutManager.class).removeAllDynamicShortcuts();

    onDone.invoke();
  }

  @ReactMethod
  @TargetApi(25)
  public void popDynamicShortcuts(ReadableMap props, final Callback onDone, final Callback onCancel) {
    if (!isShortcutSupported()) {
      onCancel.invoke();
      return;
    }

    ReadableArray shortcutArray = props.getArray("shortcuts");
    List shortcuts = shortcutArray.toArrayList();

    getReactApplicationContext().getSystemService(ShortcutManager.class).removeDynamicShortcuts(shortcuts);

    onDone.invoke();
  }

  @ReactMethod
  @TargetApi(25)
  public void getDynamicShortcuts(final Callback onDone, final Callback onCancel) {
    if (!isShortcutSupported()) {
      onCancel.invoke();
      return;
    }

    List<ShortcutInfo> shortcuts = getReactApplicationContext().getSystemService(ShortcutManager.class)
      .getDynamicShortcuts();
    List finalShortcuts = new ArrayList(shortcuts.size());

    for (ShortcutInfo shortcut : shortcuts) {
      HashMap<String, String> shortcutMap = new HashMap<>();
      shortcutMap.put("id", shortcut.getId());
      shortcutMap.put("label", shortcut.getShortLabel().toString());
      shortcutMap.put("description", shortcut.getLongLabel().toString());

      finalShortcuts.add(shortcutMap);
    }

    onDone.invoke(finalShortcuts.toString());
  }

  private boolean isShortcutSupported() {
    return Build.VERSION.SDK_INT >= 25;
  }

}
