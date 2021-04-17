import { zhCN } from '../i18n/zh-CN';
import { enUS } from '../i18n/en-US';
import i18n from 'i18next';

i18n.init({
  lng: global.carla.device.locale.currentAppLanguage,
  debug: global.carla.IS_ENV,
  resources: {
    'en-US': enUS,
    'zh-CN': zhCN,
  },
});

export default i18n;
