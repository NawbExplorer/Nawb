import { ReactNode } from 'react';

export type AnyObject = Record<string, any>;

export type MiaoTreeChildren =
  | MiaoTreeEntity[]
  | null
  | string
  | MiaoTreeEntity;

export interface MiaoTreeEntity<P = {}> {
  tagName: string;
  props: AnyObject & { elementId: string } & P;
  children: MiaoTreeChildren;
}
export interface SingleMiaoTreeEntity<P = {}> {
  tagName: string;
  props: AnyObject & { elementId: string } & P;
}

export interface MiaoMiRenderer {
  (t?: MiaoTreeEntity, extraProps?: object): ReactNode;
}
export interface BasicMiaoElementProps {
  elementId: string;
}

export interface HasEventElement extends BasicMiaoElementProps {
  events: string[];
}
