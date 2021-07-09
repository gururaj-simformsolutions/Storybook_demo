/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import App from '../Storybook_demo/storybook/index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
