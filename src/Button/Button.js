import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';
import {useTheme} from '../styles/provider';

const Button = ({
  label,
  buttonStyle,
  labelStyle,
  uppercase,
  type,
  ...rest
}: propTypes) => {
  const [isPressedIn, setIsPressedIn] = useState(false);
  const handlePressIn = () => {
    setIsPressedIn(true);
  };
  const handlePressOut = () => {
    setIsPressedIn(false);
  };
  const {primaryButton, secondaryButton} = useTheme();

  const buttonStyleType = type === 'primary' ? primaryButton : secondaryButton;

  const styleButton = StyleSheet.flatten([
    styles.button,
    buttonStyle,
    {
      backgroundColor: isPressedIn
        ? buttonStyleType.clickedBackground
        : buttonStyle.backgroundColor ?? buttonStyleType.background,
    },
  ]);

  const textStyle = StyleSheet.flatten([
    styles.label,
    labelStyle,
    {color: !isPressedIn ? buttonStyleType.text : buttonStyleType.clickedText},
  ]);

  const text = uppercase ? label.toUpperCase() : label;

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={styleButton}>
      <Text style={textStyle}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderStyle: 'solid',
    backgroundColor: 'white',
    borderRadius: 2,
    borderColor: 'black',
    borderWidth: 1,
  },
  label: {
    textAlign: 'center',
  },
  uppercaseLabel: {
    textTransform: 'uppercase',
  },
});

const propTypes = {
  /**
   * To be used on tests
   */
  testID: PropTypes.string,
  /**
   * Function called on button press
   */
  onPress: PropTypes.func,
  /**
   * Function called on long press on button
   */
  onLongPress: PropTypes.func,
  /**
   * Label text to display on button
   */
  label: PropTypes.string.isRequired,
  /**
   * Make label text uppercased
   */
  uppercase: PropTypes.bool,
  /**
   * Style for button
   */
  buttonStyle: ViewPropTypes.style,
  /**
   * Style for label
   */
  labelStyle: ViewPropTypes.style,
  /**
   * button type primary or secondary
   * Default : Primary
   */
  type: PropTypes.string,
};

const defaultProps = {
  testID: null,
  icon: null,
  onPress: null,
  onLongPress: null,
  uppercase: false,
  buttonStyle: null,
  labelStyle: null,
  type: 'primary',
};

Button.propTypes = propTypes;

Button.defaultProps = defaultProps;

export default Button;
