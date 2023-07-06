import { useFonts } from "expo-font";

import { StatusBar } from "expo-status-bar";

import { useColorScheme } from "react-native";

import { Paragraph, TamaguiProvider, Theme, YStack } from "tamagui";
import config from "./tamagui.config";
import RootNavigation from "./src/navigation/RootNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function App() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),

    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <TamaguiProvider config={config}>
        <Theme name={colorScheme === "dark" ? "dark" : "light"}>
          <RootNavigation />
        </Theme>
      </TamaguiProvider>
    </SafeAreaProvider>
  );
}
