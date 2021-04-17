import { verifyRequiredProps } from '../../common';
import { CarlaUIComponent, CarlaUIProps } from './CarlaUIInterface';
import { Context } from '../../provider/context';

const tagName = 'CarlaUI';

const CarlaUI: CarlaUIComponent<CarlaUIProps> = function (props) {
  verifyRequiredProps(['pages', 'context'], props, tagName);
  Context.setContext(props.context);
  return props;
};

export { CarlaUI };
