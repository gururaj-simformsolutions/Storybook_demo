import 'react-native';
import React from 'react';
// import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import RedButton from '../src/red_button';
import {render, fireEvent} from '@testing-library/react-native';

test('red button', () => {
  const redButton = render(<RedButton />);
  fireEvent.press();

  console.log(redButton);
});
