import { makeUniqueName, verifyRequiredProps } from './../../common/utils';
import { PageComponent, PageProps } from './PageInterface';

const tagName = 'Page';

/**
 *
 *
 *
 *
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
