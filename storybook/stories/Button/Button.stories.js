import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Text, View} from 'react-native';
import Button from '.';
import CenterView from '../CenterView';

storiesOf('Blue Button')
  .addDecorator((story) => <View style={{flex: 1}}>{story()}</View>)
  .add('with text', () => <Button />)
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text style={{color: 'white'}}>😀 😎 👍 💯</Text>
    </Button>
  ));
