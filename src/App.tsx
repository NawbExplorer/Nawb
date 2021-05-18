import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { View, Text } from 'react-native';

import './common/utils/i18n';

export const App: FC = observer(() => {
  return (
    <View>
      <Text>Text</Text>
    </View>
  );
});
