import {
  PluginExport,
  PluginRenderProps,
  RnBridge,
  PluginRenderPoster,
} from '../type';
var rnBridge: RnBridge = require('rn-bridge');

import { importWithCleanCache, reportErrorToReactNative } from '../utils';

const verifyPluginExport = function (props: PluginExport) {
  if (!props && props.pages) {
    throw new Error('illegal plug-in check for properties');
  }
};

export const handleRender = async function (props: PluginRenderProps) {
  const { route, pluginName, renderName } = props;
  if (!carla.pluginName) global.carla.pluginName = pluginName;
  if (!carla.pluginSourceMutex) global.carla.pluginSourceMutex = pluginName;

  const plugin: PluginExport = importWithCleanCache(pluginName);

  verifyPluginExport(plugin);

  const pages = plugin.pages;

  let uiTree;
  let pageName;

  for (const name in pages) {
    const pageProps = pages[name];

    if (pageProps.entry && !route?.name) {
      uiTree = pageProps.page(route);
      pageName = name;
      break;
    } else if (route) {
      if (name === route.name) {
        uiTree = pageProps.page(route);
        pageName = name;
        break;
      } else {
        throw new Error(`page name ${name} ${route.name} not equal`);
      }
    }
  }

  rnBridge.channel.post<PluginRenderPoster>(renderName, {
    uiTree,
    pageName,
    renderName,
  });
};
