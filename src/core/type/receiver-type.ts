import { CarlaTreeEntity } from './core-type';

export interface PluginRenderReceiver {
  uiTree: CarlaTreeEntity;
  pageName: string;
  /**
   * 强制发给react native 虽然没用
   */
  renderName: string;
}
