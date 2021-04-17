type DeviceInfoProps = {
  brand: string | null;
  isDevice: boolean;
  manufacturer: string | null;
  modelName: string | null;
  designName: string | null;
  productName: string | null;
  deviceYearClass: number | null;
  totalMemory: number | null;
  supportedCpuArchitectures: string[] | null;
  osName: string | null;
  osVersion: string | null;
  osBuildId: string | null;
  osInternalBuildId: string | null;
  osBuildFingerprint: string | null;
  platformApiLevel: number | null;
  deviceName: string | null;
};

type DeviceScreenProps = {
  windowWidth: number;
  windowHeight: number;
  screenWidth: number;
  screenHeight: number;
};

type DeviceLocaleProps = {
  locates: {
    languageCode: string;
    scriptCode?: string;
    countryCode: string;
    languageTag: string;
    isRTL: boolean;
  }[];
  /**
   * 当前系统国家
   */
  currentSysCountry: string;
  /**
   * 当前软件语言
   */
  currentAppLanguage: string;
  /**
   * 数组分割
   */
  numberFormatSeparator: Readonly<{
    decimalSeparator: string;
    groupingSeparator: string;
  }>;

  /**
   * 货币
   */
  currencies: string[];

  /**
   * 日历格式
   */
  calendar: 'gregorian' | 'japanese' | 'buddhist';

  /**
   * 温度格式
   */
  temperature: 'celsius' | 'fahrenheit';
  /**
   * 时区
   */
  timeZone: string;

  /**
   * 是否是24小时记时标准
   */
  is24hClock: boolean;
};

type DeviceProps = {
  locale: DeviceLocaleProps;
  info: DeviceInfoProps;
  screen: DeviceScreenProps;
};

type PlatformOSType = 'ios' | 'android' | 'macos' | 'windows';

type PlatformConstants = {
  isTesting: boolean;
  reactNativeVersion: {
    major: number;
    minor: number;
    patch: number;
    prerelease?: number;
  };
};

interface PlatformStatic {
  isTV: boolean;
  Version: number | string;
  constants: PlatformConstants;
}
interface PlatformIOSStatic extends PlatformStatic {
  constants: PlatformConstants & {
    forceTouchAvailable: boolean;
    interfaceIdiom: string;
    osVersion: string;
    systemName: string;
  };
  OS: 'ios';
  isPad: boolean;
  isTVOS: boolean;
}

interface PlatformAndroidStatic extends PlatformStatic {
  constants: PlatformConstants & {
    Version: number;
    Release: string;
    Serial: string;
    Fingerprint: string;
    Model: string;
    Brand: string;
    Manufacturer: string;
    ServerHost?: string;
    uiMode: 'car' | 'desk' | 'normal' | 'tv' | 'watch' | 'unknown';
  };
  OS: 'android';
}

interface PlatformMacOSStatic extends PlatformStatic {
  OS: 'macos';
}

interface PlatformWindowsOSStatic extends PlatformStatic {
  OS: 'windows';
}

type Platform =
  | PlatformIOSStatic
  | PlatformAndroidStatic
  | PlatformWindowsOSStatic
  | PlatformMacOSStatic;

interface CarlaEnv {
  _device: Readonly<DeviceProps | {}>;
  _IS_ENV: Readonly<boolean>;
  _env: Readonly<'development' | 'production'>;
  device: DeviceProps;
  IS_ENV: boolean;
  env: 'development' | 'production';
  platform: Platform;
}

declare var carla: CarlaEnv;

declare module NodeJS {
  interface Global {
    carla: CarlaEnv;
  }
}
