import '../Storybook_demo/src/Reactotronconfig';

import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import CommonButton from './src/common_button';
import CommonTextInput from './src/common_textinput';

export class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text> textInComponent </Text>
        <CommonButton />
        <CommonTextInput />
      </SafeAreaView>
    );
  }
}

export default App;
