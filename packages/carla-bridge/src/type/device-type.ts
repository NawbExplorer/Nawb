export type DeviceInfoProps = {
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

export type DeviceScreenProps = {
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
  currentSoftwareLanguage: string;
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

export type DeviceProps = {
  locale: DeviceLocaleProps;
  info: DeviceInfoProps;
  screen: DeviceScreenProps;
};
