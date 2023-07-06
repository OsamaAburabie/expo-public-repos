import NavigationButton from "@components/NavigationButton";
import { Text } from "react-native";
import { XStack, YStack } from "tamagui";

function CustomBottomTabs({ state, descriptors, navigation }) {
  return (
    <XStack
      backgroundColor={"$secondary"}
      height={80}
      jc="space-around"
      ai="center"
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        return (
          <NavigationButton
            key={index}
            onPress={onPress}
            title={label}
            active={isFocused}
          />
        );
      })}
    </XStack>
  );
}

export default CustomBottomTabs;
