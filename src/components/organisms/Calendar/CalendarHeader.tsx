import React from "react";
import { Alert, TouchableOpacity } from "react-native";
import { spacing } from "../../../constants/spacing";
import Icons from "../../atoms/Icons";
import MainPageHeader from "../../molecules/MainPageHeader";
import responsiveSize from "../../../utils/responsiveSize";

const CalendarHeader = ({ title }: { title: string }) => {
  return (
    <MainPageHeader
      title={title}
      headerRight={
        <TouchableOpacity
          onPress={() => Alert.alert("추가")}
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
      }
    />
  );
};

export default CalendarHeader;
