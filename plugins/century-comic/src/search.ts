const got = require('got');
const cheerio = require('cheerio');

export const search = async function (keywords) {
  const res = await got.get(
    `https://www.bnmhapp.com/index/search?wd=${keywords}`,
  );

  const $ = cheerio.load(res.body);
  const data = [];

  for (var ele of $('.vbox')) {
    ele = $(ele);
    const route = `${ele.find('a.vbox_t').attr('href')}`;
    const leading = ele.find('a mip-img').attr('src');
    const title = ele.find('.h4 a').text();
    const subtitle = ele.find('.vbox_t span').text();
    data.push({ leading, title, subtitle, route });
  }
  return data;
};
