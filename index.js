/**
 * @format
 */

import { AppRegistry, Text } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { Asset } from 'react-native-unimodules';
import { Assets as StackAssets } from '@react-navigation/stack';

import { App } from './src/App';

import { name as appName } from './app.json';

enableScreens();

// LogBox.ignoreLogs([
//   'empty data provider',
//   'Error while triggering instrumentation handler',
// ]);

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
Asset.loadAsync(StackAssets);

AppRegistry.registerComponent(appName, () => App);
