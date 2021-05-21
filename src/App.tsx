import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { View, Text, NativeModules, Button } from 'react-native';

// import './common/utils/i18n';

export const App: FC = observer(() => {
  useEffect(() => {}, []);

  return (
    <View>
      <Text>Text</Text>
      <Button
        title="demo"
        onPress={() => {
          console.log(NativeModules);
          // NativeModules.JsThread.startThread('demo');
        }}
      />
      <Button
        title="demo"
        onPress={() => {
          NativeModules.Devtools.toggleElementInspector();
        }}
      />
      <Button
        title="start"
        onPress={() => {
          NativeModules.Devtools.showDevtoolsDialog();
        }}
      />
    </View>
  );
});
