const {
  RecyclerListZone,
} = require('../../miao-mi');

exports.ComicInfo = function () {
  let currentPage = 1;

  const a = RecyclerListZone({
    presetLayout: 'line',
    async onFetch() {
      const data = await fetchMainPageData(currentPage++);
      return data;
    },
    async onRefresh() {
      currentPage = 1;
      return fetchMainPageData(currentPage);
    },
  });

  return a;
};
