export declare const is: {
    type(obj: unknown, str: string): boolean;
    string(obj: unknown): obj is string;
    object(obj: unknown): obj is object;
    function(obj: unknown): obj is Function;
    asyncFunction(obj: unknown): obj is Function;
    null(obj: unknown): obj is null;
    undefined(obj: unknown): obj is undefined;
    number(obj: unknown): obj is number;
    array(obj: unknown): obj is [];
};
/**
 *
 * 校验属性 如果校验到不包含的属性, 报错
 * @param {string[]} name - 校验的属性
 * @param {object} props - 校验的目标
 */
export declare const verifyProps: (verifyProps: string[], props: Record<string, any>, componentName: string) => void;
/**
 *
 * 校验必选属性
 * @param {string[]} name - 校验的属性
 * @param {object} props - 校验的目标
 */
export declare const verifyRequiredProps: (verifyProps: string[], props: Record<string, any>, componentName: string) => void;
/**
 *
 * @param {string} name - 事件名
 * @param {string} [uid] - 如果不填此参数会生成一个唯一id
 */
export declare const makeUniqueName: (name: string, uid?: string) => string;
