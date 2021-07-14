import '../Storybook_demo/src/Reactotronconfig';

import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import CommonButton from './src/common_button';
import CommonTextInput from './src/common_textinput';
import Button from './src/Button/Button';
import DarkTheme from './src/styles/themes/darkTheme';
import PulseProvider from './src/styles/provider';
import DefaultTheme from './src/styles/themes/defaultTheme';

export const App = () => {
  const [theme, setTheme] = React.useState(DarkTheme);
  return (
    <PulseProvider theme={theme}>
      <SafeAreaView>
        <Text
          onPress={() =>
            setTheme(theme === DefaultTheme ? DarkTheme : DefaultTheme)
          }>
          textInComponent
        </Text>
        <CommonButton />
        <CommonTextInput />
        <Button
          onPress={() => {
            alert(theme);
          }}
          label="Procceesd"
          buttonStyle={{margin: 10}}
          uppercase={true}
          type="primary"
        />
      </SafeAreaView>
    </PulseProvider>
  );
};

export default App;
