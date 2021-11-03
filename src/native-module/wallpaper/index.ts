import { NativeModules, Platform } from 'react-native';

export class SystemWallpaper {
  static async setWallpaper(
    option: { uri: string; headers?: Record<string, any> },
    type: 'home' | 'lock',
  ) {
    if (Platform.OS === 'android') {
      return NativeModules.Wallpaper.setWallpaper(option, type);
    } else {
      return Promise.reject(`not support ${Platform.OS}`);
    }
  }
}
