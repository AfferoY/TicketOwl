import React from "react";
import useHeight from "../../../hooks/useHeight";
import FlexBox from "../../atoms/FlexBox";
import { lightTheme } from "../../../constants/colors";
import Text from "../../atoms/Text";
import { Alert, TouchableOpacity, View } from "react-native";
import Icons from "../../atoms/Icons";
import { spacing } from "../../../constants/spacing";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import responsiveSize from "../../../utils/responsiveSize";

const NotiBadge = styled.View`
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background-color: ${lightTheme.pointPink};
  position: absolute;
  right: ${responsiveSize(4)}px;
  top: ${responsiveSize(6)}px;
`;

const MainScreenHeader = () => {
  const { NOTCH_TOP } = useHeight();
  const navigation = useNavigation() as any;
  return (
    <FlexBox
      justifyContent="space-between"
      alignItems="center"
      styles={{
        paddingTop: NOTCH_TOP + spacing.padding,
        paddingHorizontal: spacing.offset,
        paddingBottom: spacing.padding,
        borderBottomWidth: 0.3,
        borderBottomColor: lightTheme.separator,
      }}
    >
      <View>
        <Text size="xl" weight="bold">
          11월 11일 토요일
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Notification")}
        style={{
          position: "relative",
          width: spacing.iconBox,
          height: spacing.iconBox,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icons type="material" name="bell-outline" size={24} />
        <NotiBadge></NotiBadge>
      </TouchableOpacity>
    </FlexBox>
  );
};

export default MainScreenHeader;
