import React from 'react';
import SettingProvider from './SettingProvider';
import ThemeProvider from './ThemeProvider';
import PluginProvider from './PluginProvider';

export const themeProvider = new ThemeProvider();
export const ThemeContext = React.createContext(themeProvider);

export const settingProvider = new SettingProvider();
export const SettingContext = React.createContext(settingProvider);

export const pluginProvider = new PluginProvider();
export const PluginContext = React.createContext(pluginProvider);
