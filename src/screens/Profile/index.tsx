import React, { useState } from "react";
import CustomContainer from "@components/CustomContainer";
import { Stack, Text, XStack, YStack } from "tamagui";
import { Image } from "expo-image";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useAppDispatch, useAppSelector } from "@stores/index";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import CustomBottomSheet from "@components/CustomBottomSheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import SelectButton from "@components/SelectButton";
import * as ImagePicker from "expo-image-picker";
import { setAvatar } from "@stores/AuthReducer";

const Profile = () => {
  const bottomSheetRef = React.useRef<BottomSheetMethods>(null);
  const account = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };

  const openCamera = async () => {
    closeBottomSheet();

    const result = await ImagePicker.launchCameraAsync();

    if (!result.canceled) {
      dispatch(setAvatar(result.assets[0].uri));
    }
  };

  const openGallery = async () => {
    closeBottomSheet();

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled) {
      dispatch(setAvatar(result.assets[0].uri));
    }
  };

  return (
    <React.Fragment>
      <CustomContainer withHeader headerTitle="Profile">
        <XStack jc="center">
          <YStack jc="center" ai="center" gap={10}>
            <Image source={account?.avatar_url} style={styles.avatar} />
            <Text fontSize={20}>{account?.name}</Text>

            <TouchableOpacity onPress={openBottomSheet} style={styles.editIcon}>
              <Stack
                height={30}
                width={30}
                borderRadius={15}
                backgroundColor={"$white"}
                jc="center"
                ai="center"
              >
                <Feather name="edit-2" size={16} color="black" />
              </Stack>
            </TouchableOpacity>
          </YStack>
        </XStack>

        <YStack mt={40} gap={20}>
          <XStack
            bg={"$secondary"}
            ai="center"
            padding={20}
            borderRadius={8}
            gap={10}
          >
            <FontAwesome name="phone" size={24} color="gray" />
            <Text fontSize={12} fontWeight={"700"}>
              {account.phone}
            </Text>
          </XStack>

          <XStack
            bg={"$secondary"}
            ai="center"
            padding={20}
            borderRadius={8}
            gap={10}
          >
            <Ionicons name="location-sharp" size={24} color="gray" />
            <Text fontSize={12} fontWeight={"700"}>
              {account?.country?.country_name}
            </Text>
          </XStack>
        </YStack>
      </CustomContainer>

      <CustomBottomSheet bottomSheetRef={bottomSheetRef}>
        <YStack gap={15}>
          <SelectButton onPress={openCamera}>
            <Feather name="camera" size={24} color="#ccc" />
            <Text>Open Camera</Text>
          </SelectButton>

          <SelectButton onPress={openGallery}>
            <FontAwesome name="photo" size={24} color="#ccc" />
            <Text>Open Gallery</Text>
          </SelectButton>
        </YStack>
      </CustomBottomSheet>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: "absolute",
    right: -5,
    top: 80,
  },
});

export default Profile;
