import { Home } from './page/Home';
import { ComicInfo } from './page/ComicInfo';
import { ComicContent } from './page/ComicContent';
import { search } from './search';
import { nanoid } from 'nanoid';
// import { Page } from 'carla';

const Page = function (props) {
  const pageName = 'page-' + nanoid(16);

  return {
    pageName,
    ...props,
  };
};

const Carla = function (props: {
  namespace: string;
  search?: { api: any };
  pages: { [key: string]: (props: any) => any };
}) {
  // const pageName = 'page-' + nanoid(16);

  return {
    namespace: props.namespace,
    search: props.search,
    pages: props.pages,
  };
};

export default Carla({
  namespace: 'century-comic',
  search: {
    api: search,
  },
  pages: {
    home: Page({
      entry: true,
      page: Home,
      title: '主页',
    }),
    info: Page({
      page: ComicInfo,
      title: '详情',
    }),
    content: Page({
      page: ComicContent,
      title: '漫画',
    }),
  },
});
