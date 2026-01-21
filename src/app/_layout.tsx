import {StatusBar} from 'expo-status-bar';
import {Stack, SplashScreen} from 'expo-router';
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
} from '@expo-google-fonts/open-sans';
import {useEffect} from 'react';
import {KeyboardProvider} from 'react-native-keyboard-controller';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <KeyboardProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      />
    </KeyboardProvider>
  );
}
