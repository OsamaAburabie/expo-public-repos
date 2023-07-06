import React, { useCallback, useMemo } from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackgroundProps,
  BottomSheetScrollView,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { YStack } from "tamagui";
import { StyleSheet } from "react-native";
interface Props {
  children: React.ReactNode;
  bottomSheetRef: React.RefObject<BottomSheetMethods>;
  onClose?: () => void;
  onChange?: (index: number) => void;
}
const CustomBottomSheet = ({
  bottomSheetRef,
  children,
  onClose,
  onChange,
}: Props) => {
  const initialSnapPoints = useMemo(() => ["CONTENT_HEIGHT"], []);
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackgroundProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
      />
    ),
    []
  );

  const BottomSheetBackground = (props: BottomSheetBackgroundProps) => {
    return <YStack borderRadius={30} backgroundColor="$secondary" {...props} />;
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={animatedSnapPoints}
      index={-1}
      onClose={onClose}
      onChange={onChange}
      backdropComponent={renderBackdrop}
      enablePanDownToClose={true}
      handleIndicatorStyle={sheetStyles.sheetHandle}
      backgroundComponent={(props) => <BottomSheetBackground {...props} />}
      contentHeight={animatedContentHeight}
      handleHeight={animatedHandleHeight}
    >
      <BottomSheetView style={sheetStyles.flex} onLayout={handleContentLayout}>
        <BottomSheetScrollView bounces={false}>
          <YStack px={20}>{children}</YStack>
        </BottomSheetScrollView>
      </BottomSheetView>
    </BottomSheet>
  );
};

const sheetStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  sheetHandle: {
    backgroundColor: "#BFC3CA",
    width: 44,
  },
});
export default CustomBottomSheet;
