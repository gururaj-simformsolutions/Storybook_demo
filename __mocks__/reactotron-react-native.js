// export default {
//   setAsyncStorageHandler: () => ({
//     configure: () => ({
//       useReactNative: () => ({
//         connect: () => ({
//           createEnhancer: jest.fn(),
//         }),
//       }),
//     }),
//   }),
// };

// export const asyncStorage = jest.fn();

const reactotron = {
  configure: () => reactotron,
  useReactNative: () => reactotron,
  use: () => reactotron,
  connect: () => reactotron,
};

module.exports = reactotron;
