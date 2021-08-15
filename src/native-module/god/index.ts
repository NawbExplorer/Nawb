import { NativeModules } from 'react-native';

/**
 *
 *
 *@param {number} x x轴坐标点
 *@param {number} y  y轴坐标点
 */
export const tapPoint = function (x: number, y: number) {
  NativeModules.Simulate.startSimulateService(x, y);
};
