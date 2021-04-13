import { PluginExport, PluginRenderProps } from '../type';
var rnBridge = require('rn-bridge');

import { importWithCleanCache } from '../utils';

const verifyPluginExport = function (props: PluginExport) {
  if (!props && props.pages) {
    throw new Error('illegal plug-in check for properties');
  }
};

export const handleRender = async function (props: PluginRenderProps) {
  const { route, pluginName, renderName } = props;

  const plugin: PluginExport = importWithCleanCache(pluginName);

  verifyPluginExport(plugin);

  const pages = plugin.pages;

  let data;
  let option;

  for (const pageName in pages) {
    const pageOption = pages[pageName];

    if (pageOption.entry && !route?.name) {
      data = pageOption.page(route);
      option = pageOption;
      break;
    } else if (route) {
      if (pageName === route.name) {
        data = pageOption.page(route);
        option = pageOption;
        break;
      } else {
        console.log(pageName, route.name, 'not equal');
      }
    }
  }

  rnBridge.channel.post(renderName, {
    data,
    option,
    renderName,
  });
};
