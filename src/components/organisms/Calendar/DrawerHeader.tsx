import { TouchableOpacity, View } from "react-native";
import React from "react";
import FlexBox from "../../atoms/FlexBox";
import responsiveSize from "../../../utils/responsiveSize";
import { spacing } from "../../../constants/spacing";
import { lightTheme } from "../../../constants/colors";
import Text from "../../atoms/Text";
import Icons from "../../atoms/Icons";

const DrawerHeader = ({ onPress }: { onPress: () => void }) => {
  return (
    <FlexBox
      justifyContent="space-between"
      alignItems="center"
      styles={{
        paddingVertical: responsiveSize(16),
        paddingHorizontal: spacing.offset,
        borderBottomWidth: 0.3,
        borderBottomColor: lightTheme.separator,
      }}
    >
      <View>
        <Text size="lg" weight="bold">
          11월 11일 수요일
        </Text>
      </View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          position: "relative",
          width: spacing.iconBox,
          height: spacing.iconBox,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icons type="material" name="plus" size={responsiveSize(30)} />
      </TouchableOpacity>
    </FlexBox>
  );
};

export default DrawerHeader;
