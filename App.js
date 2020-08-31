import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useUpdateOTA from './src/hooks/useUpdateOTA';
import Navigation from './src/navigation';
import useColorScheme from "./src/hooks/useColorScheme";
import useCachedResources from './src/hooks/useCachedResources';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const isCheckForUpdateComplete = useUpdateOTA();
  const colorScheme = useColorScheme();

  if (isCheckForUpdateComplete && isLoadingComplete) {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    )
  } else {
    return null
  }
}
