import {
  PluginExport,
  PluginRenderProps,
  RnBridge,
  PluginRenderPoster,
  PostReactNativeAction,
} from '../type';
var rnBridge: RnBridge = require('rn-bridge');

import { importWithCleanCache, reportErrorToReactNative, is } from '../utils';

// const verifyPluginExport = function (props: PluginExport) {
//   if (!props && is.func(props.pages)) {
//     throw new Error('illegal plug-in check for property pages');
//   }
// };

export const handlePluginRender = async function (props: PluginRenderProps) {
  const { route, pluginName, renderName } = props;

  const plugin: PluginExport = importWithCleanCache(pluginName);

  if (!plugin.uiEntry) {
    rnBridge.channel.post<PostReactNativeAction>(renderName, {
      action: 'error_report',
      data: { error: '' },
    });
    return;
  }

  const pages = plugin.uiEntry({ pluginName, renderName });

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
