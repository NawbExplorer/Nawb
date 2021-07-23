package com.deskbtm.carla;

import android.app.Application;
import android.content.Context;

//import com.BV.LinearGradient.LinearGradientPackage;
//import com.brentvatne.react.ReactVideoPackage;
//import com.deskbtm.carla.generated.BasePackageList;
import com.deskbtm.carla.dev.DevtoolsPackage;
import com.deskbtm.carla.god.simulate.SimulatePackage;
import com.deskbtm.carla.jsThread.JsThreadPackage;
import com.deskbtm.carla.tools.wallpaper.WallpaperPackage;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
//import com.ninty.system.setting.SystemSettingPackage;
//
//import org.unimodules.adapters.react.ModuleRegistryAdapter;
//import org.unimodules.adapters.react.ReactModuleRegistryProvider;
//import org.wonday.orientation.OrientationPackage;

import java.lang.reflect.InvocationTargetException;
import java.util.List;


public class MainApplication extends Application implements ReactApplication {
//  private final ReactModuleRegistryProvider mModuleRegistryProvider = new ReactModuleRegistryProvider(new BasePackageList().getPackageList(), null);

  private final ReactNativeHost mReactNativeHost =
    new ReactNativeHost(this) {
      @Override
      public boolean getUseDeveloperSupport() {
        return false;
      }

      @Override
      protected List<ReactPackage> getPackages() {
        @SuppressWarnings("UnnecessaryLocalVariable")
        List<ReactPackage> packages = new PackageList(this).getPackages();
//        packages.add(new ModuleRegistryAdapter(mModuleRegistryProvider));
//        packages.add(new LinearGradientPackage());
//        packages.add(new OrientationPackage());
//        packages.add(new SystemSettingPackage());
//        packages.add(new ReactVideoPackage());
        packages.add(new WallpaperPackage());
        packages.add(new SimulatePackage());
        packages.add(new DevtoolsPackage(this));
         packages.add(new JsThreadPackage(this));
        // packages.add(new ScheduleJobPackage(this));
        
        return packages;
      }

      @Override
      protected String getJSMainModuleName() {
        return "index";
      }
    };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
  }

  /**
   * Loads Flipper in React Native templates. Call this in the onCreate method with something like
   * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
   *
   * @param context
   * @param reactInstanceManager
   */
  private static void initializeFlipper(
    Context context, ReactInstanceManager reactInstanceManager) {
    if (BuildConfig.DEBUG) {
      try {
        /*
        We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.deskbtm.carla.ReactNativeFlipper");
        aClass
          .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
          .invoke(null, context, reactInstanceManager);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
}
