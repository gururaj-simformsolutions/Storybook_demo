import 'react-native';
import React from 'react';

import {shallow} from 'enzyme';
import CommonTextInput from '../src/common_textinput';
import toJson from 'enzyme-to-json';

// it('check Textinput with enzyme', () => {
//   const wrapper = shallow(<CommonTextInput />);
//   console.log(wrapper);
//   expect(toJson(wrapper)).toMatchSnapshot();
// });

it('Have username', () => {
  const wrapper = shallow(<CommonTextInput />);
  expect(
    wrapper.findWhere((node) => node.prop('testID') === 'username1'),
  ).toExist();
});
