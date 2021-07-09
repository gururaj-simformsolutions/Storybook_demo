import 'react-native';
import React from 'react';
import '../src/common_textinput';
import renderer from 'react-test-renderer';
import CommonTextInput from '../src/common_textinput';

it('textinput test case', () => {
  let textInputInstance = renderer.create(<CommonTextInput />).getInstance();

  //   expect(textInputInstance.)
});
