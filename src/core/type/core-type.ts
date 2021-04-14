import { ReactNode } from 'react';

export type AnyObject = Record<string, any>;

export type CarlaComponentChildren =
  | CarlaTreeEntity[]
  | null
  | string
  | CarlaTreeEntity;

export interface CarlaTreeEntity<P = {}> {
  tagName: string;
  props: AnyObject & { elementId: string } & P;
  children: CarlaComponentChildren;
}
export interface CarlaTreeEntity<P = {}> {
  tagName: string;
  props: AnyObject & { elementId: string } & P;
}

export interface CarlaRenderer {
  (t?: CarlaTreeEntity, extraProps?: object): ReactNode;
}
export interface BasicComponentProps {
  elementId: string;
}

export interface EventComponent extends BasicComponentProps {
  events: string[];
}
