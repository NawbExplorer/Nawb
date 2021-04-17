import i18n from 'i18next';
import { PostBridgeAction } from './type';
import nodejs from 'nodejs-mobile-react-native';
import { Platform } from 'react-native';

import {
  isDevice,
  brand,
  manufacturer,
  modelName,
  designName,
  productName,
  deviceYearClass,
  totalMemory,
  supportedCpuArchitectures,
  osName,
  osVersion,
  osBuildId,
  osInternalBuildId,
  osBuildFingerprint,
  platformApiLevel,
  deviceName,
} from 'expo-device';
import { Dimensions } from 'react-native';
import { EM } from './event-mapper';
import * as Localize from 'react-native-localize';

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

export type DeviceProps = {
  locale: DeviceLocaleProps;
  info: DeviceInfoProps;
  screen: DeviceScreenProps;
};

export const sendPresetEnvToNodejs = async function (eventName) {
  const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
  const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
  const locale: DeviceLocaleProps = {
    locates: Localize.getLocales(),
    currentAppLanguage: i18n.language,
    currentSysCountry: Localize.getCountry(),
    numberFormatSeparator: Localize.getNumberFormatSettings(),
    currencies: Localize.getCurrencies(),
    calendar: Localize.getCalendar(),
    temperature: Localize.getTemperatureUnit(),
    timeZone: Localize.getTimeZone(),
    is24hClock: Localize.uses24HourClock(),
  };

  const info: DeviceInfoProps = {
    brand,
    isDevice,
    manufacturer,
    modelName,
    designName,
    productName,
    deviceYearClass,
    totalMemory,
    supportedCpuArchitectures,
    osName,
    osVersion,
    osBuildId,
    osInternalBuildId,
    osBuildFingerprint,
    platformApiLevel,
    deviceName,
  };

  const screen = {
    windowWidth,
    windowHeight,
    screenWidth,
    screenHeight,
  };

  nodejs.channel.post<PostBridgeAction>(eventName, {
    action: 'set_env',
    data: {
      env: __DEV__ ? 'development' : 'production',
      IS_DEV: __DEV__,
      platform: Platform,
      device: {
        info,
        screen,
        locale,
      },
    },
  });
};

// Localize信息发生改变
Localize.addEventListener('change', async () => {
  await sendPresetEnvToNodejs(EM.CARLA_BRIDGE);
});
