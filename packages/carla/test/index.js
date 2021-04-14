const { Zone, Image, View, RecyclerListZone } = require('../dist/index');

var r = [
  {
    img: 'demo',
    c: 'dsadsada',
  },
  {
    img: 'demo',
    c: 'sasdas',
  },
];

async function main() {
  let page = 0;

  const a = RecyclerListZone({
    async onFetch() {
      return {};
    },
  });

  console.log(a);
  await new Promise((r) => setTimeout(r, 100000));
}

main();
