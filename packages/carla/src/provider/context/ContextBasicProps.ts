import { Route } from '../../components/navigation';

export interface ContextBasicProps {
  pluginName: string;
  renderName: string;
  renderId: string;
  route?: Route;
  [k: string]: any;
}
