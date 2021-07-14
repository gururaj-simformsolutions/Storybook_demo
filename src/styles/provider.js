import * as React from 'react';
import {Appearance, ColorSchemeName} from 'react-native';
import CommonTextInput from '../common_textinput';
import DarkTheme from './themes/darkTheme';
import DefaultTheme from './themes/defaultTheme';

export const Context = React.createContext();

const PulseProvider = (props) => {
  console.log(props);

  const colorSchemeName =
    (!props.theme && Appearance?.getColorScheme()) || 'light';

  const [colorScheme, setColorScheme] = React.useState(colorSchemeName);

  const handleAppearanceChange = (preferences) => {
    // const {colorScheme} = preferences;
    // setColorScheme(colorScheme);
  };

  React.useEffect(() => {
    if (!props.theme) {
      Appearance?.addChangeListener(handleAppearanceChange);
    }
    return () => {
      if (!props.theme) {
        Appearance?.removeChangeListener(handleAppearanceChange);
      }
    };
  }, [props.theme]);

  const getTheme = () => {
    const {theme} = props;

    if (theme) {
      return theme;
    } else {
      const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

      return {
        ...theme,
      };
    }
  };

  const {children} = props;
  return (
    <Context.Provider value={getTheme()} theme={getTheme()}>
      {children}
    </Context.Provider>
  );
};
export const useTheme = () => React.useContext(Context);

export default PulseProvider;
