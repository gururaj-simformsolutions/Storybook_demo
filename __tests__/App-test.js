/**
 * @format
 */

import 'react-native';
import React from 'react';
// import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import CommonButton from '../src/common_button';
import {shallow, mount} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

// jest.mock('../../Storybook_demo/__mocks__/reactotron-react-native.js');
// jest.mock('reactotron-react-native');
const tree = renderer.create(<CommonButton />);
it('renders correctly', () => {
  tree;
});

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});

test('something', () => {
  expect('somethings').toEqual('somethings');
});
