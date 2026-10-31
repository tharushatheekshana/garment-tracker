import { Barlow_400Regular, Barlow_600SemiBold, Barlow_700Bold } from '@expo-google-fonts/barlow';
import { BarlowCondensed_800ExtraBold } from '@expo-google-fonts/barlow-condensed';
import { JetBrainsMono_700Bold } from '@expo-google-fonts/jetbrains-mono';
import { useFonts } from 'expo-font';
import { DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import { AnimatedSplashOverlay } from '@/components/animated-icon';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Barlow_400Regular,
    Barlow_600SemiBold,
    Barlow_700Bold,
    BarlowCondensed_800ExtraBold,
    JetBrainsMono_700Bold,
  });

  // Splash stays up until the overlay mounts; fall back to system fonts on error.
  if (!fontsLoaded && !fontError) return null;

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }} />
      <AnimatedSplashOverlay />
    </ThemeProvider>
  );
}
