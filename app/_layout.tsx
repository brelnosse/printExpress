import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayout() {
  const [loaded] = useFonts({
    'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Comfortaa-Regular': require('../assets/fonts/Comfortaa-Regular.ttf')
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
      <Stack
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="index"/>
        <Stack.Screen name="+not-found"/>
      </Stack>
  );
}
