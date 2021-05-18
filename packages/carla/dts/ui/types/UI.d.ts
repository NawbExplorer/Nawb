import type { AnyObject } from 'src/common';
export declare type HasChildrenEntity<C = any> = {
    tagName: string;
    props: AnyObject;
    children?: C;
};
export declare type NoChildEntity = {
    tagName: string;
    props: AnyObject;
};
/**
 *
 * @description 组件参数的children
 */
export declare type CarlaComponentChildren = Promise<AnyObject>[] | Promise<AnyObject> | AnyObject | AnyObject[];
export interface Component<P = {}, C = CarlaComponentChildren> {
    (entity: P & {
        children?: C;
    }): HasChildrenEntity<C>;
}
export interface NoChildComponent<P = {}> {
    (entity: P): NoChildEntity;
}
