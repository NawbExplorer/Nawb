import { importWithCleanCache } from '../utils';
import { PluginExport } from '../type';
const rnBridge = require('rn-bridge');

// export const handlePluginSearch = async function (
//   name: string,
//   keywords: string,
// ) {
//   const plugin: PluginExport = importWithCleanCache(name);

//   if (typeof plugin?.search?.api !== 'function') {
//     throw new Error('plugin does not have search api');
//   }

//   const data = await plugin.search.api(keywords);
//   const eventName = 'search-' + name;

//   rnBridge.channel.post(eventName, {
//     eventName,
//     // action: AM.PLUGIN_SEARCH,
//     data,
//   });
// };
