import { Home } from './page/Home';
import { ComicInfo } from './page/ComicInfo';
import { ComicContent } from './page/ComicContent';
import { search } from './search';
import { Page } from 'carla';

export default {
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
};
