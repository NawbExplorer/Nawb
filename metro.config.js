/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');
const exclusionList = require('metro-config/src/defaults/exclusionList');

/**
 * @type import('@types/metro-config').ConfigT
 */
module.exports = {
  projectRoot: __dirname,
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx'],
    blockList: exclusionList([
      /\.\/packages\/.*/,
      // Duplicate react package will make metro crash
      /third_party\/react-native\/node_modules\/react\/.*/,
      /\.\/node_modules\/.*/,
      /android\/.*/,
      /ios\/.*/,
      /temp\/.*/,
      /libs\/.*/,
      /\.yarn\/.*/,
      // This stops "react-native run-windows" from causing the metro server to crash if its already running
      new RegExp(
        `${path.resolve(__dirname, 'windows').replace(/[/\\]/g, '/')}.*`,
      ),
      // This prevents "react-native run-windows" from hitting: EBUSY: resource busy or locked, open msbuild.ProjectImports.zip
      /.*\.ProjectImports\.zip/,
    ]),
  },
};
