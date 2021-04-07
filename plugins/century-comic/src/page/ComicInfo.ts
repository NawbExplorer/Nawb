import cheerio from 'cheerio';
import got from 'got';
import { TapZone, Zone } from 'carla';

async function fetchComicInfo(url) {
  const res = await got.get(url);
  const $ = cheerio.load(res.body);
  const coverUrl = $('.img mip-img').attr('src');
  const data = $('.data');
  const title = data.find('h4').text();
  let kind = data.find('.yac').text();
  let author = data.find('.dir').text();
  let updateTime = data.find('.act').text();
  const listItems = $('.list_block.show li a');

  if (typeof kind === 'string') kind = kind.split('：')[1];
  if (typeof author === 'string') author = author.split('：')[1];
  if (typeof updateTime === 'string') updateTime = updateTime.split('：')[1];

  const collections = [];

  for (const item of listItems as any) {
    const url = `https://www.bnmhapp.com${$(item).attr('href')}`;
    const content = $(item).text();
    collections.push({
      url,
      content,
    });
  }

  return {
    coverUrl,
    title,
    kind,
    author,
    updateTime,
    collections,
  };
}

export const ComicInfo = function (route) {
  console.log(route, '==================');
  return Zone({
    style: {
      width: 200,
      height: 400,
      backgroundColor: 'red',
    },
  });
};
