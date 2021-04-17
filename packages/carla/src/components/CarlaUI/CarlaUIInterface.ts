import { PageEntity } from '../Page';

export interface CarlaUIComponent<P> {
  (props: P): CarlaUIProps;
}

export interface CarlaUIProps {
  pages: { [name: string]: PageEntity };
  namespace: string;
  context: Record<string, any>;
}
