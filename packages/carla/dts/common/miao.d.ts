import type { AnyObject } from './index';
export declare type MiaoEntity<C = any> = {
    tagName: string;
    props: AnyObject;
    children?: C;
};
export declare type SingleMiaoEntity = {
    tagName: string;
    props: AnyObject;
};
/**
 *
 * @description 组件参数的children
 */
export declare type MiaoEleChildren = Promise<AnyObject>[] | Promise<AnyObject> | AnyObject | AnyObject[];
export interface AsyncMiaoEle<P, C = MiaoEleChildren> {
    (entity: P & {
        children?: C;
    }): Promise<MiaoEntity<C>>;
}
export interface MiaoEle<P = {}, C = MiaoEleChildren> {
    (entity: P & {
        children?: C;
    }): MiaoEntity<C>;
}
export interface AsyncSingleMiaoEle<P = {}> {
    (entity: P): Promise<SingleMiaoEntity>;
}
export interface SingleMiaoEle<P = {}> {
    (entity: P): SingleMiaoEntity;
}
