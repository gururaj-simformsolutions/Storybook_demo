import React, {useState} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';

const RedButton = () => {
  const [test, setTest] = useState(1);
  return (
    <TouchableHighlight
      onPress={() => {}}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: 100,
        height: 100,
        alignSelf: 'center',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Red Button</Text>
    </TouchableHighlight>
  );
};

export default RedButton;
