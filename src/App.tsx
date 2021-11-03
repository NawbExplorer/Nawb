import React, { FC, useEffect } from 'react';
import { Platform, StyleSheet, StatusBar, View, Button } from 'react-native';
// import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

// import {
//   NavigationContainer,
//   NavigationContainerRef,
// } from '@react-navigation/native';
// import { PluginEnvBooter } from './plugin-core';
// import './common/utils/i18n';

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

export const App: FC = () => {
  // const navigationRef = React.createRef<NavigationContainerRef>();

  // Linking.addEventListener('url', () => {});

  useEffect(() => {
    // const unsubscribe = NetInfo.addEventListener(state => {
    //   console.log('Connection type', state.type);
    //   console.log('Is connected?', state.isConnected);
    //   if (!state.isConnected) {
    //     // Toast;T
    //   }
    // });
    // routingInstrumentation.registerNavigationContainer(navigationRef as any);
    // const booter = PluginEnvBooter.start({
    //   mainEntryDevParams: ['/data/local/tmp/nodejs-project/boot.js'],
    //   mainEntry: 'boot.js',
    // });
    // booter.startMsgListener();
    // return () => {
    //   booter.removeMsgListener();
    // };
  }, []);

  return (
    <View>
      <Button
        title="flick"
        onPress={() => {
          console.log(11);
        }}
      />
    </View>
    // <ThemeContext.Provider value={themeProvider}>
    //   <PluginContext.Provider value={pluginProvider}>
    //     <NavigationContainer>
    //       <RootNavigator />
    //     </NavigationContainer>
    //     {/* <ExpoStatusBar
    //       animated={true}
    //       translucent={true}
    //       backgroundColor="#fff"
    //     />
    //     <SafeAreaView style={appStyles.androidSafeArea}></SafeAreaView> */}
    //   </PluginContext.Provider>
    // </ThemeContext.Provider>
  );
};

const appStyles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
