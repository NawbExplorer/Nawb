import { Home } from './page/Home';
import { ComicInfo } from './page/ComicInfo';
import { ComicContent } from './page/ComicContent';
import { search as searchApi } from './search';
import { Page, CarlaUI } from 'carla';

export const uiEntry = function (context) {
  console.log(context, '-------------------------------------');
  return CarlaUI({
    namespace: 'century-comic',
    context,
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
};

export const searchEntry = function (ctx) {
  return searchApi;
};

// export const scriptEntry = function () {};

// export const scheduleEntry = function () {};
