import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as enUS from '../i18n/en-US';
import * as zhCN from '../i18n/zh-CN';
import * as Localize from 'react-native-localize';
import AsyncStorage from '@react-native-async-storage/async-storage';

i18n
  .use({
    type: 'languageDetector',
    async: true,
    detect: async (cb) => {
      const country = Localize.getCountry();
      let lng;

      const storageLng = await AsyncStorage.getItem('language');

      if (storageLng) {
        lng = storageLng;
      } else {
        switch (country.toLocaleLowerCase()) {
          case 'cn':
            lng = 'zh-CN';
            break;
          case 'us':
            lng = 'en-US';
            break;
        }
      }
      return cb(lng);
    },
    init() {},
    async cacheUserLanguage(lng) {
      await AsyncStorage.setItem('language', lng);
    },
  })
  .use(initReactI18next)
  .init({
    resources: {
      'en-US': enUS,
      'zh-CN': zhCN,
    },
    // ns: ['noticeNS', 'settingNS'],
    fallbackLng: ['zh-CN'],
    debug: __DEV__,
    react: {
      useSuspense: false,
    },
  });

// i18n.loadNamespaces(['noticeNS', 'settingNS']);

export default i18n;
