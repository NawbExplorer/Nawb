package com.deskbtm.carla.generated;

import java.util.Arrays;
import java.util.List;
import org.unimodules.core.interfaces.Package;

public class BasePackageList {
  public List<Package> getPackageList() {
    return Arrays.<Package>asList(
        new expo.modules.barcodescanner.BarCodeScannerPackage(),
        new expo.modules.battery.BatteryPackage(),
        new expo.modules.camera.CameraPackage(),
        new expo.modules.constants.ConstantsPackage(),
        new expo.modules.device.DevicePackage(),
        new expo.modules.filesystem.FileSystemPackage(),
        new expo.modules.imageloader.ImageLoaderPackage(),
        new expo.modules.keepawake.KeepAwakePackage(),
        new expo.modules.localauthentication.LocalAuthenticationPackage(),
        new expo.modules.network.NetworkPackage(),
        new expo.modules.permissions.PermissionsPackage(),
        new expo.modules.securestore.SecureStorePackage(),
        new expo.modules.sensors.SensorsPackage()
    );
  }
}
