import { makeUniqueName, verifyRequiredProps } from '../../../common/utils';
import { PageComponent, PageProps } from './PageInterface';

const tagName = 'Page';

/**
 *
 * carla UI 中 每个页面叫做一个page
 * @param {PageProps} props
 */
const Page: PageComponent<PageProps> = function (props) {
  verifyRequiredProps(['page'], props, tagName);
  const pageName = makeUniqueName('page');
  return {
    pageName,
    ...props,
  };
};

export { Page };
