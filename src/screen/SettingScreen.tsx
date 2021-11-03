import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

export const SettingScreen: FC<StackScreenProps<any>> = observer(function (
  props,
) {
  const { navigation } = props;

  return <View style={{ flex: 1, flexDirection: 'column' }}></View>;
});
