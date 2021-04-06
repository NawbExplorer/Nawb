import nodejs from 'nodejs-mobile-react-native';

import {
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
} from 'expo-device';
import { Dimensions } from 'react-native';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
const deviceInfo = {
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
  windowWidth,
  windowHeight,
  screenWidth,
  screenHeight,
};

export const sendDeviceInfoToNodejs = function () {
  nodejs.channel.post('global', {
    action: 'deviceInfo',
    deviceInfo,
  });
};
