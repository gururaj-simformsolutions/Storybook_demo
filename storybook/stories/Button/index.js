import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableHighlight} from 'react-native';

export default function Button({onPress, children}) {
  return (
    <TouchableHighlight style={{backgroundColor: 'blue'}} onPress={onPress}>
      {children ?? <Text>Hi</Text>}
    </TouchableHighlight>
  );
}

Button.defaultProps = {
  children: null,
  onPress: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
