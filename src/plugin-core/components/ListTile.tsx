import React, { FC } from 'react';
import { View, ViewStyle } from 'react-native';
import { CarlaTree } from '..';

import { renderCarlaToReact } from '../renderer';

export interface ListTileProps {
  containerStyle?: ViewStyle;
  leadingStyle?: ViewStyle;
  trailingStyle?: ViewStyle;
  titleStyle?: ViewStyle;
  subtitleStyle?: ViewStyle;
  leading?: CarlaTree;
  trailing?: CarlaTree;
  title?: CarlaTree;
  subtitle?: CarlaTree;
}

export const MiaoListTile: FC<ListTileProps> = function (props) {
  const {
    containerStyle,
    leadingStyle,
    titleStyle,
    trailingStyle,
    subtitleStyle,
  } = props;

  let leading, title, subtitle, trailing;

  if (props.leading) {
    leading = renderCarlaToReact(props.leading);
  }

  if (props.title) {
    title = renderCarlaToReact(props.title);
  }

  if (props.subtitle) {
    subtitle = renderCarlaToReact(props.subtitle);
  }

  if (props.trailing) {
    trailing = renderCarlaToReact(props.trailing);
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        marginVertical: 4,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        borderRadius: 8,
        ...containerStyle,
      }}>
      {!!leading && (
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: 10,
            ...leadingStyle,
          }}>
          {leading}
        </View>
      )}

      <View
        style={{
          flex: 5,
          flexDirection: 'column',
          overflow: 'hidden',
          paddingRight: 30,
        }}>
        <View
          style={{
            flex: 2,
            width: '100%',
            height: '100%',
            ...titleStyle,
          }}>
          {title}
        </View>
        {!!subtitle && (
          <View
            style={{
              flex: 1,
              ...subtitleStyle,
            }}>
            {subtitle}
          </View>
        )}
      </View>
      {!!trailing && (
        <View
          style={{
            flex: 3,
            ...trailingStyle,
          }}>
          {trailing}
        </View>
      )}
    </View>
  );
};
