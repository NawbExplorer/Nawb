import { ReactNode } from 'react';

export type NawbComponentChildren = NawbTree[] | null | string | NawbTree;

export interface NawbTree<P = {}> {
  tagName: string;
  props: Record<string, any> & { elementId: string } & P;
  children: NawbComponentChildren;
}

export interface NawbNoLeafTree<P = {}> {
  tagName: string;
  props: Record<string, any> & { elementId: string } & P;
}

export interface NawbRenderer {
  (t?: NawbTree, extraProps?: object): ReactNode;
}

export type NawbRoute = {
  name: string;
  params?: Record<string, any>;
};

export interface PluginRenderProps {
  pluginName: string;
  renderName: string;
  route?: NawbRoute;
  renderId: string;
}
