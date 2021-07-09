import React, {useState} from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native-macos';

const CommonButton = () => {
  const [test, setTest] = useState(1);
  return (
    <Pressable
      // eslint-disable-next-line react-native/no-inline-styles
      focusable={true}
      onMouseEnter={() => {
        alert('adsf');
      }}
      style={{
        width: 100,
        height: 30,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      // onPress={() => alert('CommonButton')}
    >
      <Text>CommonButton</Text>
    </Pressable>
  );
};

export default CommonButton;
