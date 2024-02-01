import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { lightTheme } from "../../../constants/colors";
import { spacing } from "../../../constants/spacing";
import responsiveSize from "../../../utils/responsiveSize";
import Icons from "../../atoms/Icons";
import MainPageHeader from "../../molecules/MainPageHeader";

const NotiBadge = styled.View`
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background-color: ${lightTheme.pointPink};
  position: absolute;
  right: ${responsiveSize(4)}px;
  top: ${responsiveSize(6)}px;
`;

const ScheduleHeader = ({ title }: { title: string }) => {
  const navigation = useNavigation() as any;
  return (
    <MainPageHeader
      title={title}
      headerRight={
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
      }
    />
  );
};

export default ScheduleHeader;
