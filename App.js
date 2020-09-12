import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useUpdateOTA from './src/hooks/useUpdateOTA';
import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from "./src/hooks/useColorScheme.web";
import Navigation, { UnsignedNavigation } from "./src/navigation";
import {Provider} from 'react-redux';
import store from './src/store';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const isCheckForUpdateComplete = useUpdateOTA();
  const colorScheme = useColorScheme();

  if (isCheckForUpdateComplete && isLoadingComplete) {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </Provider>
      </SafeAreaProvider>
    )
  } else {
    return null
  }
}
