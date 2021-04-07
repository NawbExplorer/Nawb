import { Text, ListTile, RecyclerListZone, Image, TapZone, Zone } from 'carla';
import cheerio from 'cheerio';
import got from 'got';
import { nanoid } from 'nanoid';

const rnBridge = require('rn-bridge');

let a = 0;

async function fetchMainPageData(page) {
  const res = await got.get(
    `https://www.bnmhapp.com/index/list/region/1?page=${page}`,
    {
      https: {
        rejectUnauthorized: false,
      },
    },
  );

  const data = [];
  const $ = cheerio.load(res.body);
  for (var ele of $('.vbox') as any) {
    ele = $(ele);
    const href = `${ele.find('a.vbox_t').attr('href')}`;
    const cover = ele.find('a mip-img').attr('src');
    const name = ele.find('.h4 a').text();
    const update = ele.find('.h4.red').text();
    data.push(
      TapZone({
        style: { width: '100%', height: '100%' },
        onTap() {
          // console.log(device);
          rnBridge.channel.post('pluginRoute', {
            action: 'route',
            route: {
              name: '/info',
              params: {
                href,
              },
            },
          });
        },
        children: ListTile({
          trailing: Image({
            source: { uri: cover },
            style: { width: '100%', height: '100%' },
          }),
          title: Text({ children: name }),
          subtitle: Zone({
            style: {
              justifyContent: 'space-between',
              flexDirection: 'row',
              flex: 1,
            },
            children: [
              Zone({ children: Text({ children: update }) }),
              Zone({
                style: { width: 10, height: 10, backgroundColor: 'red' },
              }),
            ],
          }),
        }),
      }),
    );
  }

  return data;
}

const Icon = function (props) {
  const elementId = nanoid(16);

  return {
    tagName: 'Icon',
    props: {
      ...props,
      elementId,
    },
  };
};

const BottomTabBar = function (propsObj) {
  let { children, ...props } = propsObj;

  const elementId = nanoid(16);

  return {
    tagName: 'BottomTabBar',
    props: {
      ...props,
      elementId,
    },
  };
};

const BottomTabZone = function (props) {
  const elementId = nanoid(16);
  return {
    tagName: 'BottomTabZone',
    props: {
      elementId,
      ...props,
    },
  };
};

const HomePageTabZone = function () {
  let currentPage = 1;
  return BottomTabZone({
    name: 'homePage',
    options: { title: '极爱是' },
    icon: Icon({ lib: 'Feather', name: 'home', size: 28 }),
    page: RecyclerListZone({
      presetLayout: 'line',
      async onFetch() {
        const data = await fetchMainPageData(currentPage++);
        return data;
      },
      async onRefresh() {
        currentPage = 1;
        return fetchMainPageData(currentPage);
      },
    }),
  });
};
const HomePageTab1Zone = function () {
  let currentPage = 1;
  return BottomTabZone({
    name: 'homePage1',
    options: { title: '3218' },
    icon: Icon({ lib: 'Feather', name: 'home', size: 28 }),
    page: RecyclerListZone({
      presetLayout: 'line',
      async onFetch() {
        const data = await fetchMainPageData(currentPage++);
        return data;
      },
      async onRefresh() {
        currentPage = 1;
        return fetchMainPageData(currentPage);
      },
    }),
  });
};

export const Home = function (context) {
  return BottomTabBar({
    tabs: [HomePageTabZone(), HomePageTab1Zone()],
  });
};
