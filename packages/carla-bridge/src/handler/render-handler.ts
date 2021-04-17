import {
  PluginExport,
  PluginRenderProps,
  RnBridge,
  PluginRenderPoster,
} from '../type';
var rnBridge: RnBridge = require('rn-bridge');
import i18n from 'i18next';

import { importWithCleanCache, reportErrorToReactNative, is } from '../utils';

// const verifyPluginExport = function (props: PluginExport) {
//   if (!props && is.func(props.pages)) {
//     throw new Error('illegal plug-in check for property pages');
//   }
// };

export const handlePluginRender = async function (props: PluginRenderProps) {
  const { route, pluginName, renderName, renderId } = props;

  const plugin: PluginExport = importWithCleanCache(pluginName);

  if (!plugin.uiEntry) {
    reportErrorToReactNative(i18n.t('ui.entry'));
    return;
  }

  const carlaUI = plugin.uiEntry({ pluginName, renderName, renderId });
  const pages = carlaUI.pages;

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
      }
    }
  }

  rnBridge.channel.post<PluginRenderPoster>(renderName, {
    uiTree,
    pageName,
    renderName,
    pluginName,
  });
};
