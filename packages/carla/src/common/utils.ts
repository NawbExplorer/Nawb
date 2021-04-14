import assert from 'assert';
import { verify } from 'crypto';
import { nanoid } from 'nanoid';

export const is = {
  type(obj: unknown, str: string): boolean {
    return Object.prototype.toString.call(obj) === `[object ${str}]`;
  },
  string(obj: unknown): obj is string {
    return this.type(obj, 'String');
  },
  object(obj: unknown): obj is object {
    return this.type(obj, 'Object');
  },
  function(obj: unknown): obj is Function {
    return this.type(obj, 'Function');
  },
  asyncFunction(obj: unknown): obj is Function {
    return this.type(obj, 'AsyncFunction');
  },
  null(obj: unknown): obj is null {
    return this.type(obj, 'Null');
  },
  undefined(obj: unknown): obj is undefined {
    return this.type(obj, 'Undefined');
  },
  number(obj: unknown): obj is number {
    return this.type(obj, 'Number');
  },
  array(obj: unknown): obj is [] {
    return this.type(obj, 'Array');
  },
};

/**
 *
 * 校验属性 如果校验到不包含的属性, 报错
 * @param {string[]} name - 校验的属性
 * @param {object} props - 校验的目标
 */
export const verifyProps = function (
  verifyProps: string[],
  props: Record<string, any>,
  componentName: string,
) {
  for (const key in props) {
    if (!verifyProps.includes(key)) {
      throw new Error(`${key} not belongs to be ${componentName}`);
    }
  }
};

/**
 *
 * 校验必选属性
 * @param {string[]} name - 校验的属性
 * @param {object} props - 校验的目标
 */
export const verifyRequiredProps = function (
  verifyProps: string[] = [],
  props: Record<string, any>,
  componentName: string,
) {
  const propKeys = Object.keys(props);
  for (const p of verifyProps) {
    if (!propKeys?.includes(p)) {
      throw new Error(`${componentName} must include ${p} property`);
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
