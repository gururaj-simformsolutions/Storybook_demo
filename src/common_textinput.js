import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const CommonTextInput = () => {
  const [value, setValue] = useState('');
  return (
    <View>
      <TextInput
        testID="username1"
        value={value}
        onChangeText={(text) => setValue(text)}
        style={{borderWidth: 1, borderColor: 'blue', backgroundColor: 'grey'}}
      />
    </View>
  );
};

export default CommonTextInput;
