import { Stack } from "expo-router";
import AuthContextProvider from "../src/contexts/AuthContextProvider";
import { PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Toast from "react-native-toast-message"
import CustomeToast from "../src/components/Shared/CustomeToast";
import { useFonts } from 'expo-font'

const client = new QueryClient();

export default function RootLayout() {

  useFonts({
    'KaiseiDecol-Regular': require('../assets/fonts/KaiseiDecol-Regular.ttf'),
    "KaiseiDecol-Bold": require('../assets/fonts/KaiseiDecol-Bold.ttf'),
    "NotoSansJP-Bold": require('../assets/fonts/NotoSansJP-Bold.ttf'),  
    "NotoSansJP-Regular": require('../assets/fonts/NotoSansJP-Regular.ttf'),
    "Outfit-Bold": require('../assets/fonts/Outfit-Bold.ttf'),  
    "Outfit-Regular": require('../assets/fonts/Outfit-Regular.ttf'),
    "Outfit-Medium": require('../assets/fonts/Outfit-Medium.ttf'),
    "Outfit-Light": require('../assets/fonts/Outfit-Light.ttf'),
    "Outfit-ExtraLight": require('../assets/fonts/Outfit-ExtraLight.ttf'),

  })

  return (
    <QueryClientProvider client={client}>
    <GestureHandlerRootView style={{flex:1}}>
      <BottomSheetModalProvider>
      <PaperProvider>
        <AuthContextProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(main)" />
             <Stack.Screen name="(profileBuild)" />
              <Stack.Screen name="magScreen" />
              <Stack.Screen name="profileScreen" />
              <Stack.Screen name="profileDetail" />
              <Stack.Screen name="magScreen2" options={{animation: 'slide_from_bottom'}} />
              <Stack.Screen name="periodCalanderScreen" options={{animation: 'slide_from_right'}} />
          </Stack>
          <Toast 
          config={{
            'custome' : (props) => <CustomeToast {...props} />
          }} /> 
        </AuthContextProvider>
      </PaperProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
