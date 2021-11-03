import { LabelPosition } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { Animated, StyleProp, TextStyle, ViewStyle } from 'react-native';

export type BottomTabBarOptions = {
  /**
   * Whether the tab bar gets hidden when the keyboard is shown. Defaults to `false`.
   */
  keyboardHidesTabBar?: boolean;
  /**
   * Color for the icon and label in the active tab.
   */
  activeTintColor?: string;
  /**
   * Color for the icon and label in the inactive tabs.
   */
  inactiveTintColor?: string;
  /**
   * Background color for the active tab.
   */
  activeBackgroundColor?: string;
  /**
   * background color for the inactive tabs.
   */
  inactiveBackgroundColor?: string;
  /**
   * Whether label font should scale to respect Text Size accessibility settings.
   */
  allowFontScaling?: boolean;
  /**
   * Whether the tab label should be visible. Defaults to `true`.
   */
  showLabel?: boolean;
  /**
   * Style object for the tab label.
   */
  labelStyle?: StyleProp<TextStyle>;
  /**
   * Style object for the tab icon.
   */
  iconStyle?: StyleProp<TextStyle>;
  /**
   * Style object for the tab container.
   */
  tabStyle?: StyleProp<ViewStyle>;
  /**
   * Whether the label is rendered below the icon or beside the icon.
   * By default, the position is chosen automatically based on device width.
   * In `below-icon` orientation (typical for iPhones), the label is rendered below and in `beside-icon` orientation, it's rendered beside (typical for iPad).
   */
  labelPosition?: LabelPosition;
  /**
   * Whether the label position should adapt to the orientation.
   */
  adaptive?: boolean;
  /**
   * Safe area insets for the tab bar. This is used to avoid elements like the navigation bar on Android and bottom safe area on iOS.
   * By default, the device's safe area insets are automatically detected. You can override the behavior with this option.
   */
  safeAreaInsets?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
  /**
   * Style object for the tab bar container.
   */
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
};

export declare type BottomTabNavigationOptions = {
  /**
   * Title text for the screen.
   */
  title?: string;
  /**
   * Title string of a tab displayed in the tab bar
   * or a function that given { focused: boolean, color: string, position: 'below-icon' | 'beside-icon' } returns a React.Node to display in tab bar.
   * When undefined, scene title is used. To hide, see tabBarOptions.showLabel in the previous section.
   */
  tabBarLabel?: string;
  // | ((props: {
  //     focused: boolean;
  //     color: string;
  //     position: LabelPosition;
  //   }) => React.ReactNode);
  /**
   * A function that given { focused: boolean, color: string } returns a React.Node to display in the tab bar.
   */
  // tabBarIcon?: (props: {
  //   focused: boolean;
  //   color: string;
  //   size: number;
  // }) => React.ReactNode;
  /**
   * Text to show in a badge on the tab icon.
   */
  tabBarBadge?: number | string;
  /**
   * Custom style for the tab bar badge.
   * You can specify a background color or text color here.
   */
  tabBarBadgeStyle?: StyleProp<TextStyle>;
  /**
   * Accessibility label for the tab button. This is read by the screen reader when the user taps the tab.
   * It's recommended to set this if you don't have a label for the tab.
   */
  tabBarAccessibilityLabel?: string;
  /**
   * ID to locate this tab button in tests.
   */
  tabBarTestID?: string;
  /**
   * Boolean indicating whether the tab bar is visible when this screen is active.
   */
  tabBarVisible?: boolean;
  /**
   * Animation config for showing and hiding the tab bar.
   */
  // tabBarVisibilityAnimationConfig?: {
  //   show?: TabBarVisibilityAnimationConfig;
  //   hide?: TabBarVisibilityAnimationConfig;
  // };
  /**
   * Function which returns a React element to render as the tab bar button.
   * Renders `TouchableWithoutFeedback` by default.
   */
  // tabBarButton?: (props: BottomTabBarButtonProps) => React.ReactNode;
  /**
   * Whether this screen should be unmounted when navigating away from it.
   * Defaults to `false`.
   */
  unmountOnBlur?: boolean;
};
