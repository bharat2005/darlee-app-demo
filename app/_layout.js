import { Stack } from "expo-router";
import AuthContextProvider from "../src/contexts/AuthContextProvider";
import { PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const client = new QueryClient();

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <BottomSheetModalProvider>

    <QueryClientProvider client={client}>
      <PaperProvider>
        <AuthContextProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(main)" />
             <Stack.Screen name="(profileBuild)" />
              <Stack.Screen name="magScreen" />
             
          </Stack>
        </AuthContextProvider>
      </PaperProvider>
    </QueryClientProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
