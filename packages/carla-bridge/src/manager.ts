var rnBridge = require('rn-bridge');
import { is, AM, loadWithClean, load } from './utils';

interface SearchProps {
  api: (kw: string) => Promise<Record<string, any>>;
}

interface PageOptionsProps {
  entry?: boolean;
  title?: string;
  page: (params?: Record<string, any>) => Record<string, any>;
}

interface PagesProps {
  [key: string]: PageOptionsProps;
}

interface PluginProps {
  search?: SearchProps;
  pages: PagesProps;
}

interface Route {
  name: string;
  params?: Record<string, any>;
}

interface RenderMsg {
  pluginName: string;
  route?: Route;
  eventName: string;
}

export const handleRender = async function (msg: RenderMsg) {
  const { route, eventName, pluginName } = msg;

  const plugin: PluginProps = loadWithClean(pluginName);

  if (!plugin && plugin.pages) {
    throw new Error('illegal plug-in check for properties');
  }

  const pages = plugin.pages;

  let data;

  for (const page in pages) {
    const pageOption = pages[page];

    if (pageOption.entry && !route?.name) {
      data = pageOption.page(route);
      break;
    } else if (route) {
      if (page === route.name) {
        data = pageOption.page(route);
        break;
      } else {
        console.log(page, route.name, 'not equal');
      }
    }
  }

  rnBridge.channel.post('pluginRender', {
    eventName,
    action: AM.PLUGIN_RENDER,
    data,
  });
};

export const handlePluginSearch = async function (
  name: string,
  keywords: string,
) {
  const plugin: PluginProps = loadWithClean(name);

  if (typeof plugin?.search?.api !== 'function') {
    throw new Error('plugin does not have search api');
  }

  const data = await plugin.search.api(keywords);
  const eventName = 'search-' + name;

  rnBridge.channel.post(eventName, {
    eventName,
    action: AM.PLUGIN_SEARCH,
    data,
  });
};
