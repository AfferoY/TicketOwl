import React from "react";
import { View } from "react-native";
import Text from "../../components/atoms/Text";
import BottomDrawer from "../../components/molecules/Calendar/BottomDrawer";
import CalendarHeader from "../../components/organisms/Calendar/CalendarHeader";

const CalendarMainScreen = () => {
  return (
    <View>
      <CalendarHeader title="캘린더" />

      <BottomDrawer>
        <Text size="lg">Drawer!</Text>
      </BottomDrawer>
    </View>
  );
};

export default CalendarMainScreen;
