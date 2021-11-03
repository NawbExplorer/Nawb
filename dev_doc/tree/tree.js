const tree = require('tree-node-cli');
const fs = require('fs');

const string = tree('./', {
  dirsOnly: true,
  exclude: [
    /node_modules/,
    /temp/,
    /build/,
    /gradle/,
    /dist/,
    /(?<=libnode)(.+)/,
    /nawb-video-player/,
    /(?<=react-native-rn-videoplayer)(.+)/,
    /(?<=react-native-manage-wallpaper)(.+)/,
    /(?<=react-native-indicator)(.+)/,
    /(?<=res)(.+)/,
    /(?<=ios)(.+)/,
    /(?<=i18n)(.+)/,
  ],
  // maxDepth: 4,
});

fs.writeFileSync('./doc/tree/basic-tree.md', string, 'utf-8');
