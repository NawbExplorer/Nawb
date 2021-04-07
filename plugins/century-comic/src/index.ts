import { Home } from './page/Home';
import { ComicInfo } from './page/ComicInfo';
import { ComicContent } from './page/ComicContent';
import { search } from './search';

export default {
  search: {
    api: search,
  },
  pages: {
    '/': {
      entry: true,
      page: Home,
      title: '主页',
    },
    '/info': {
      page: ComicInfo,
      title: '详情',
    },
    '/content': {
      page: ComicContent,
      title: '漫画',
    },
  },
};
