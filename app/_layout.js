import { Stack } from "expo-router";
import AuthContextProvider, {} from '../src/contexts/AuthContextProvider'
import { PaperProvider } from 'react-native-paper'

export default function RootLayout() {
  return (
  <PaperProvider>
    <AuthContextProvider>

    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(main)" />

    </Stack>

    </AuthContextProvider>
  </PaperProvider>

  )
}
