import React from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import Text from "../../components/atoms/Text";
import BottomDrawer from "../../components/molecules/Calendar/BottomDrawer";
import CalendarHeader from "../../components/organisms/Calendar/CalendarHeader";
import MainPageHeader from "../../components/molecules/MainPageHeader";
import { spacing } from "../../constants/spacing";
import Icons from "../../components/atoms/Icons";
import responsiveSize from "../../utils/responsiveSize";
import FlexBox from "../../components/atoms/FlexBox";
import { lightTheme } from "../../constants/colors";
import DrawerHeader from "../../components/organisms/Calendar/DrawerHeader";

const CalendarMainScreen = () => {
  return (
    <View>
      <CalendarHeader title="캘린더" />

      <BottomDrawer>
        <DrawerHeader onPress={() => {}} />
      </BottomDrawer>
    </View>
  );
};

export default CalendarMainScreen;
