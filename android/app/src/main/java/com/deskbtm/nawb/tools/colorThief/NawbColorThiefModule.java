package com.deskbtm.nawb.tools.colorThief;

import android.app.Activity;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.graphics.drawable.Drawable;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.palette.graphics.Palette;

import com.bumptech.glide.Glide;
import com.bumptech.glide.request.transition.Transition;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;

public class NawbColorThiefModule extends ReactContextBaseJavaModule {

  ReactContext reactContext;
  private final int defaultColor;

  public NawbColorThiefModule(ReactApplicationContext context) {
    reactContext = context;
    defaultColor = Color.LTGRAY;
  }


  private int calculateAvgColor(Bitmap bitmap, int pixelSpacing) {
    int R = 0;
    int G = 0;
    int B = 0;
    int height = bitmap.getHeight();
    int width = bitmap.getWidth();
    int n = 0;
    int[] pixels = new int[width * height];

    bitmap.getPixels(pixels, 0, width, 0, 0, width, height);

    for (int i = 0; i < pixels.length; i += pixelSpacing) {
      int color = pixels[i];
      R += Color.red(color);
      G += Color.green(color);
      B += Color.blue(color);
      n++;
    }

    return Color.rgb(R / n, G / n, B / n);
  }

  private String intColorToHex(int color) {
    return String.format("#%06X", (0xFFFFFF & color));
  }


  private WritableMap mapColors(Bitmap bm) {
    Palette palette = Palette.from(bm).generate();
    WritableMap map = Arguments.createMap();

    String averageColor = intColorToHex(calculateAvgColor(bm, 5));
    String dominantColor = intColorToHex(palette.getDominantColor(defaultColor));
    String vibrantColor = intColorToHex(palette.getVibrantColor(defaultColor));
    String darkVibrantColor = intColorToHex(palette.getDarkVibrantColor(defaultColor));
    String lightVibrantColor = intColorToHex(palette.getLightVibrantColor(defaultColor));

    map.putString("averageColor", averageColor);
    map.putString("domainColor", dominantColor);
    map.putString("vibrantColor", vibrantColor);
    map.putString("darkVibrantColor", darkVibrantColor);
    map.putString("lightVibrantColor", lightVibrantColor);

    return map;
  }
  
  @ReactMethod
  public void thiefColor(String uri, final Promise promise) {
    Activity activity = reactContext.getCurrentActivity();
    
    new Thread(() -> {
      Glide.with(reactContext).asBitmap().load(uri).into(new BitmapTarget() {
        @Override
        public void onLoadFailed(@Nullable Drawable errorDrawable) {
          super.onLoadFailed(errorDrawable);
          promise.reject("", "color thief image load error");
        }

        @Override
        public void onResourceReady(@NonNull Bitmap resource, @Nullable Transition<? super Bitmap> transition) {
          super.onResourceReady(resource, transition);
          if (resource != null) {
            WritableMap colorMap = mapColors(resource);
            activity.runOnUiThread(() -> {
              promise.resolve(colorMap);
            });
          } else {
            activity.runOnUiThread(() -> {
              promise.reject("", "color thief resource get Null");
            });
          }
        }

        @Override
        public void onLoadCleared(@Nullable Drawable placeholder) {
          activity.runOnUiThread(() -> {
            promise.resolve(null);
          });
        }
      });
    }).start();
  }


  @NonNull
  @Override
  public String getName() {
    return "ColorThief";
  }
}
