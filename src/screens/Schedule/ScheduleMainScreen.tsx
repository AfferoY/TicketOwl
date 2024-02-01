import React from "react";
import { Text, View } from "react-native";
import MainScreenHeader from "../../components/organisms/Schedule/MainScreenHeader";
import { useAppSelect } from "../../store/configureStore.hooks";

const ScheduleMainScreen = () => {
  return (
    <View>
      <MainScreenHeader />
    </View>
  );
};

export default ScheduleMainScreen;
