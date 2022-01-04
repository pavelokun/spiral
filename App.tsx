/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import { theme } from './App/Theme';
import Navigator from './App/Navigator';
import { persistor, store } from './App/Redux';

// export const STACK_OPTIONS = {
//   initialRouteName: ROUTES.LOADING,
//   mode: 'modal',
//   headerMode: 'none',
//   screenOptions: {
//     headerShown: false,
//     cardStyle: { backgroundColor: TRANSPARENT },
//     cardOverlayEnabled: true,
//     cardStyleInterpolator: ({ current: { progress } }) => ({
//       cardStyle: {
//         opacity: progress.interpolate({
//           inputRange: [0, 0.5, 0.9, 1],
//           outputRange: [0, 0.25, 0.7, 1],
//         }),
//       },
//       overlayStyle: {
//         opacity: progress.interpolate({
//           inputRange: [0, 1],
//           outputRange: [0, 0],
//           extrapolate: 'clamp',
//         }),
//       },
//     }),
//     gestureEnabled: false,
//   },
// };

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <Navigator />
          </ThemeProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
