import type { AnyObject } from './index';

export type WithChildrenEntity<C = any> = {
  tagName: string;
  props: AnyObject;
  children?: C;
};

export type NoChildEntity = {
  tagName: string;
  props: AnyObject;
};

/**
 *
 * @description 组件参数的children
 */
export type CarlaComponentChildren =
  | Promise<AnyObject>[]
  | Promise<AnyObject>
  | AnyObject
  | AnyObject[];

export interface AsyncComponent<P, C = CarlaComponentChildren> {
  (entity: P & { children?: C }): Promise<WithChildrenEntity<C>>;
}
export interface Component<P = {}, C = CarlaComponentChildren> {
  (entity: P & { children?: C }): WithChildrenEntity<C>;
}
export interface AsyncNoChildComponent<P = {}> {
  (entity: P): Promise<NoChildEntity>;
}
export interface NoChildComponent<P = {}> {
  (entity: P): NoChildEntity;
}
