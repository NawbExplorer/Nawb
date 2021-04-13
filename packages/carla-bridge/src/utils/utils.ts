import type { RnBridge } from '../type/bridge-type';
import { EM } from '../core';
import assert from 'assert';
import { nanoid } from 'nanoid';
const rnBridge: RnBridge = require('rn-bridge');

/**
 *
 * 校验属性 如果校验到不包含的属性, 报错
 * @param {string[]} name - 校验的属性
 * @param {object} props - 校验的目标
 */
export const verifyElementProps = function (
  verifyProps: string[],
  props: Record<string, any>,
) {
  if (!props) return;

  for (const prop of verifyProps) {
    if (props[prop]) {
      assert(!!props[prop].tagName, `${prop} needs to be MiaoElement`);
    }
  }
};

/**
 *
 * @param {string} name - 事件名
 * @param {string} [uid] - 如果不填此参数会生成一个唯一id
 */
export const makeUniqueName = (name: string, uid?: string) => {
  return uid ? name + '-' + uid : name + '-' + nanoid(16);
};

/**
 *
 * @param {string} name - 事件名
 * @param {string} [uid] - 如果不填此参数会生成一个唯一id
 */
export const reportErrorToReactNative = (error: any) => {
  rnBridge.channel.post(EM.CARLA_BRIDGE, {
    action: 'error_report',
    error: String(error),
  });
};

/**
 * es6 export default => exports.default
 *
 * 导入时清除nodejs require缓存
 * @param {string} name - 包名
 */
export const importWithCleanCache = function (name: string) {
  delete require.cache[require.resolve(name)];
  const mod = require(name);
  return mod.default ? mod.default : mod;
};

/**
 * es6 export default => exports.default
 *
 * @param {string} name - 包名
 */
export const importPackage = function (name: string) {
  const mod = require(name);

  return mod.default ? mod.default : mod;
};

/**
 * 使用Function 代替 eval 更加安全
 *
 * @param {string} script - 执行的脚本
 * @param {string} strict - 是否启用严格模式
 */
export const runSafeScript = function (script: string, strict = false) {
  return Function(`${strict ? 'use strict' : ''} ${script}`)();
};
