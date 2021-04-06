const cheerio = require('cheerio');
const got = require('got');
delete require.cache[require.resolve('../miao-mi')];

let rnBridge;

const { nanoid } = require('nanoid');
const basicUrl = 'https://www.bnmhapp.com';

try {
  rnBridge = require('rn-bridge');
} catch (error) {}

const eventArr = [];
let page = 1;

async function fetchComicInfo(url) {
  console.log(url);
  const res = await got.get(url);
  // console.log(res);
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

  for (const item of listItems) {
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

async function fetchMainPageData(page) {
  const res = await got.get(
    `https://www.bnmhapp.com/index/list/region/1?page=${page}`,
  );

  const data = [];
  const $ = cheerio.load(res.body);
  // console.log($('.vbox'))
  for (var ele of $('.vbox')) {
    ele = $(ele);
    const href = `${basicUrl}${ele.find('a.vbox_t').attr('href')}`;
    const cover = ele.find('a mip-img').attr('src');
    const name = ele.find('.h4 a').text();
    const update = ele.find('.h4.red').text();
    data.push({ href, cover, name, update });
  }
  return data;
}

function Text({ value, onTap, children }) {
  return {
    tag: 'Text',
    props: {},
    children: value,
  };
}

async function Image({ children, ...props }) {
  const self = {
    tag: 'Image',
    id: nanoid(12),
    props: props,
    children,
  };
  return self;
}

async function Root({ onTap, children }) {
  return {
    tag: 'View',
    id: nanoid(12),
    children: await children(),
  };
}

// module.exports = {
//   searchApi: {
//     search: true,
//     api: {},
//   },
//   home: {
//     entry: true,
//     component: HomeScreen,
//   },
//   detail: DetailScreen,
// };

// async function View({ children, ...props }) {
//   const id = nanoid(12);
//   // console.log(props);
//   const events = [];

//   if (props.onTouch) {
//     events.push('touch');

//     // 队列中重复事件 导致触发时 队列中全部执行
//     rnBridge.channel.on('event', async (msg) => {
//       if (msg.id === id) {
//         // console.log(id, '#####', msg);
//         props.onTouch();
//       }
//       // rnBridge.channel.post('event', { msg: msg, id });
//     });

//     // rnBridge.channel.removeAllListeners();
//     // eventArr.push({
//     //   id,
//     //   onTouch: props.onTouch,
//     //   onLongTouch: props.onLongTouch,
//     // });
//   }

//   return {
//     tag: 'View',
//     id,
//     children: children,
//     props,
//     isMiaoElement,
//     events,
//   };
// }

// async function Card({ src, value, key, onTouch }) {
//   return Box({
//     key: key,
//     onTouch,
//     children: [
//       await Image({
//         source: { uri: src },
//         style: {
//           width: 100,
//           height: 400,
//         },
//       }),
//       Text({
//         value,
//       }),
//     ],
//   });
// }

var count = 0;

async function RecyclerListView(props) {
  const id = nanoid(12);
  const { data } = props;

  const record = {
    id, //
    tag: 'RecyclerListView',
    data,
  };

  rnBridge.channel.on('event', async (msg) => {
    console.log(count, '#########');
    count++;
    if (msg.eventName === 'list:fetch') {
      record.data = await props.onFetch();
      rnBridge.channel.post('event', record);
    }
  });

  return record;
}

// function makeData(args) {
//   var saver = args;
//   return function () {};
// }

async function Page() {
  let currentPage = 1;
  const data = await fetchMainPageData(currentPage);

  return RecyclerListView({
    data,
    async onRefresh() {},
    async onFetch() {
      currentPage++;
      console.log('=======================================' + currentPage);
      return await fetchMainPageData(currentPage);
    },
  });
}

// async function Svg(props) {
//   const { src } = props;
//   return {
//     tag: 'svg',
//     props,
//   };
// }

// async function Page1() {
//   return View({
//     children: [Svg({ src: '111' })],
//   });
// }

const plugin = async function () {
  // return Box({
  //   style: { width: 200, height: 200, backgroundColor: 'red', elevation: 10 },
  //   children: [
  //     Box({
  //       style: { width: 50, height: 50, backgroundColor: 'yellow' },
  //     }),
  //     Box({
  //       style: { width: 50, height: 50, backgroundColor: 'grey' },
  //     }),
  //   ],
  // });
  // Root({
  //   children: () => Page(),
  // });
};

async function main(params) {
  const a = await fetchComicInfo('https://www.bnmhapp.com/index/comic/19527');
  console.log(a);
  await new Promise((resolve, reject) => setTimeout(resolve, 10000000));
}
// main();

// async function delay(time) {
//   return new Promise((resolve, reject) => setTimeout(resolve, time));
// }

// module.exports = plugin;
