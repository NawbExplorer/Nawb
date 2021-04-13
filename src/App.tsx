import React, { FC, useEffect } from 'react';
// import * as Sentry from '@sentry/react-native';
import i18n from 'i18next';
import { observer } from 'mobx-react-lite';
import {
  PluginContext,
  pluginProvider,
  ThemeContext,
  themeProvider,
} from './provider';
import { RootNavigator } from './screen/RootNavigator';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Linking,
} from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import nodejs from 'nodejs-mobile-react-native';

import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { EM, handleBridgeMessage } from './core';
import './utils/i18n';

// const routingInstrumentation = new Sentry.ReactNavigationV5Instrumentation();

// Sentry.init({
//   dsn: SENTRY_DSN,
//   environment: process.env.NODE_ENV,
//   debug: !isProd,
//   maxBreadcrumbs: 150,
//   // integrations: [
//   //   new Sentry.ReactNativeTracing({
//   //     idleTimeout: 5000,
//   //     routingInstrumentation: routingInstrumentation,
//   //     tracingOrigins: ['localhost', /^\//, /^https:\/\/|^http:\/\//],
//   //     // //@ts-ignore
//   //     // beforeNavigate: (context: Sentry.ReactNavigationTransactionContext) => {
//   //     //   if (context.data.route.name === 'ManualTracker') {
//   //     //     console.log('========================', context.data.route.name);
//   //     //     context.sampled = false;
//   //     //   }
//   //     //   return context;
//   //     // },
//   //   }),
//   // ],
//   autoSessionTracking: true,
//   sessionTrackingIntervalMillis: isProd ? 30000 : 5000,
//   tracesSampleRate: 1.0,
//   release: `carla-${process.env.NODE_ENV}@${pkg.version}`,
//   dist: `${pkg.version}.0`,
// });

export const App: FC = observer(() => {
  const navigationRef = React.createRef<NavigationContainerRef>();

  // Linking.addEventListener('url', () => {});

  useEffect(() => {
    // routingInstrumentation.registerNavigationContainer(navigationRef as any);
    if (__DEV__) {
      nodejs.startWithParams(['/data/local/tmp/nodejs-project/boot.js']);
    } else {
      nodejs.start('boot.js');
    }

    nodejs.channel.addListener(EM.CARLA_BRIDGE, handleBridgeMessage);
  }, []);

  return (
    <ThemeContext.Provider value={themeProvider}>
      <PluginContext.Provider value={pluginProvider}>
        <ExpoStatusBar
          animated={true}
          translucent={true}
          backgroundColor="#fff"
        />
        <SafeAreaView style={appStyles.androidSafeArea}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </PluginContext.Provider>
    </ThemeContext.Provider>
  );
});

const appStyles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
