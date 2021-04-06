const { ComicInfo } = require('./page/ComicInfo');
const { ComicContent } = require('./page/ComicContent');
const { Home } = require('./page/Home');
delete require.cache[require.resolve('../miao-mi')];

module.exports = {
  searchApi: {
    search: true,
    // api:
  },
  pages: {
    home: {
      entry: true,
      page: Home(),
      title: '主页',
    },
    info: {
      page: ComicInfo(),
      title: '详情',
    },
    content: {
      page: ComicContent(),
      title: '漫画',
    },
  },
};
