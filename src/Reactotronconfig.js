import {AsyncStorage, NativeModules} from 'react-native';
import Reactotron, {storybook} from 'reactotron-react-native';

if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  const packagerHostname = scriptURL.split('://')[1].split(':')[0];
  const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({
      name: 'Stroy Demo',
      host: packagerHostname,
    })
    .useReactNative({
      storybook: true,
    })
    .connect();

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear();
  reactotron.onCustomCommand({
    command: 'storybook',
    handler() {
      global.showStorybook = !global.showStorybook;
    },
    title: 'Toggle Storybook',
    description: 'Toggle between app and storybook',
  });

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
  console.tron = Reactotron;
}
