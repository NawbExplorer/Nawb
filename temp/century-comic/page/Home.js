const {
  Zone,
  Text,
  ListTile,
  RecyclerListZone,
  Image,
  TapZone,
} = require('../../miao-mi');
const cheerio = require('cheerio');
const got = require('got');

async function fetchMainPageData(page) {
  const res = await got.get(
    `https://www.bnmhapp.com/index/list/region/1?page=${page}`,
  );

  const data = [];
  const $ = cheerio.load(res.body);
  for (var ele of $('.vbox')) {
    ele = $(ele);
    const href = `${ele.find('a.vbox_t').attr('href')}`;
    const cover = ele.find('a mip-img').attr('src');
    const name = ele.find('.h4 a').text();
    const update = ele.find('.h4.red').text();
    data.push(
      TapZone({
        style: { width: '100%', height: '100%' },
        onTap() {
          console.log(href);
        },
        children: ListTile({
          trailing: Image({
            source: { uri: cover },
            style: { width: '100%', height: '100%' },
          }),
          title: Text({ children: name }),
          subtitle: Text({ children: update }),
        }),
      }),
    );
  }
  return data;
}

exports.Home = function () {
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
