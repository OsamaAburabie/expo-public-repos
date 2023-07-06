import { TouchableOpacity } from "react-native";
import React from "react";
import { XStack } from "tamagui";

type Props = {
  onPress: () => void;
  children: React.ReactNode;
};

const SelectButton = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <XStack
        borderWidth={1}
        borderRadius={8}
        padding={20}
        borderColor={"gray"}
        ai="center"
        gap={10}
      >
        {props.children}
      </XStack>
    </TouchableOpacity>
  );
};

export default SelectButton;
