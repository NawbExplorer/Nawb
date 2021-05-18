import type { AnyObject } from '../../common';

export type HasChildrenEntity<C = any> = {
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

export interface Component<P = {}, C = CarlaComponentChildren> {
  (entity: P & { children?: C }): HasChildrenEntity<C>;
}

export interface NoChildComponent<P = {}> {
  (entity: P): NoChildEntity;
}
