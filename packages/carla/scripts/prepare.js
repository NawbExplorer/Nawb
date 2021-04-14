const pkg = require('../package.json');
const { writeJson, emptyDir } = require('fs-extra');
const { resolve } = require('path');
const package = {};

package.name =
  process.env.NODE_ENV === 'production' ? pkg.name : pkg.name + '-debug';
package.main = 'index.js';
package.author = pkg.author;
package.version = pkg.version;
package.license = pkg.license;

const main = async function () {
  const dest = resolve(__dirname, '../dist');
  try {
    await emptyDir(dest);
    await writeJson(resolve(dest, 'package.json'), package);
  } catch (err) {
    console.log(err);
  }
};
main();
