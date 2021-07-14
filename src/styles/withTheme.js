import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import DefaultTheme from './themes/defaultTheme';

// type $Without<T, K extends keyof any> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;
// type $DeepPartial<T> = { [P in keyof T]?: $DeepPartial<T[P]> };

export type ThemingType<Theme> = {
  ThemeProvider: React.ComponentType<{theme?: Theme}>,
};

const createTheming = (theme) => theme;

export const {ThemeProvider} = createTheming(DefaultTheme);
