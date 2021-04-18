import { ReactNode } from 'react';

export type CarlaComponentChildren =
  | CarlaTreeEntity[]
  | null
  | string
  | CarlaTreeEntity;

export interface CarlaTreeEntity<P = {}> {
  tagName: string;
  props: Record<string, any> & { elementId: string } & P;
  children: CarlaComponentChildren;
}
export interface CarlaTreeEntity<P = {}> {
  tagName: string;
  props: Record<string, any> & { elementId: string } & P;
}

export interface CarlaRenderer {
  (t?: CarlaTreeEntity, extraProps?: object): ReactNode;
}

export type CarlaRoute = {
  name: string;
  params?: Record<string, any>;
};

export interface PluginRenderProps {
  pluginName: string;
  renderName: string;
  route?: CarlaRoute;
  renderId: string;
}
