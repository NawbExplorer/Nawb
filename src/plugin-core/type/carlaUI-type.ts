import { ReactNode } from 'react';

export type CarlaComponentChildren = CarlaTree[] | null | string | CarlaTree;

export interface CarlaTree<P = {}> {
  tagName: string;
  props: Record<string, any> & { elementId: string } & P;
  children: CarlaComponentChildren;
}

export interface CarlaNoLeafTree<P = {}> {
  tagName: string;
  props: Record<string, any> & { elementId: string } & P;
}

export interface CarlaRenderer {
  (t?: CarlaTree, extraProps?: object): ReactNode;
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
