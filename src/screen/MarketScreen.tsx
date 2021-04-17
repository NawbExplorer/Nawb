import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, StyleSheet, View } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import nodejs from 'nodejs-mobile-react-native';

export const MarketScreen: FC<
  StackScreenProps<any> & BottomTabScreenProps<any>
> = observer(function (props) {
  const { navigation } = props;

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress' as any, (e) => {});
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Button
        title="Click"
        color="green"
        onPress={() => {
          console.log(nodejs.channel);
          // navigation.push('DialogScreen');
        }}
      />
    </View>
  );
});

var markStyles = StyleSheet.create({});
