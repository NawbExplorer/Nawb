import { nanoid } from 'nanoid';

// const checkPackageName = function (name: string): boolean {
//   var keyword = 'miao-plugin';
//   if (!name) {
//     return false;
//   }

//   return name.startsWith(keyword) || name.includes(keyword);
// };

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
 * @param {string} name - 事件名  name中不可包含 "-"
 * @param {string} [uid] - 如果不填此参数会生成一个唯一id
 */
export const makeUniqueName = (name: string, uid?: string) => {
  if (name.includes('-')) {
    throw new Error("unique name can not include '-'");
  }
  return uid ? name + '-' + uid : name + '-' + nanoid(16);
};
