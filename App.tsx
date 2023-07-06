import "react-native-gesture-handler";

import { useFonts } from "expo-font";
import { useColorScheme } from "react-native";
import { TamaguiProvider, Theme } from "tamagui";
import config from "./tamagui.config";
import RootNavigation from "./src/navigation/RootNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistedStore, store } from "@stores/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
export default function App() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),

    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  if (!loaded) {
    return null;
  }

  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <QueryClientProvider client={queryClient}>
          <SafeAreaProvider>
            <TamaguiProvider config={config}>
              <Theme name={colorScheme === "dark" ? "dark" : "light"}>
                <RootNavigation />
              </Theme>
            </TamaguiProvider>
          </SafeAreaProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
