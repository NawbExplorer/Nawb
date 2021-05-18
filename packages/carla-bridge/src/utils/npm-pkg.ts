import { is } from './helper';

export const runYarn = async function (args, cleanCache = false) {
  if (cleanCache) {
    delete require.cache[require.resolve('./lib/yarn')];
  }
  var yarn = require('./lib/yarn');
  var doubleDashIndex = process.argv.findIndex((e) => e === '--');
  await yarn.main({
    startArgs: process.argv.slice(0, 2),
    args: args,
    endArgs: doubleDashIndex === -1 ? [] : process.argv.slice(doubleDashIndex),
  });
};

export const handlePackageJson = function (pkg) {
  var useful = {} as any;
  pkg = is.string(pkg) ? JSON.parse(pkg) : pkg;

  if (pkg && pkg.carla) {
    useful.author = pkg.author;
    useful.packageName = pkg.name;
    useful.version = pkg.version;

    useful.logo = pkg.carla.logo;
    useful.cover = pkg.carla.cover;
    useful.description = pkg.carla.description;
    useful.updateInfo = pkg.carla.updateInfo;
    useful.pluginName = pkg.carla.pluginName;
    useful.sourceSite = pkg.carla.sourceSite;
    useful.authorAvatar = pkg.carla.authorAvatar;

    return useful;
  } else {
    return false;
  }
};

export const verifyCarlaPluginName = function (name) {
  // carla-ui-plugin
  // carla-plugin
  // carla-script-plugin
  var keyword = 'carla-ui-plugin';
  if (!name) {
    return false;
  }

  return name.startsWith(keyword) || name.includes(keyword);
};

export const installPackage = async function (name) {
  try {
    await runYarn(['add', name]);
    return true;
  } catch (err) {
    return false;
  }
};
