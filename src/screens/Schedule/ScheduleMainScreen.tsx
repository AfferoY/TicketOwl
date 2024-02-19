import React from "react";
import { View } from "react-native";
import Separator from "../../components/atoms/Separator";
import ScheduleHeader from "../../components/organisms/Schedule/ScheduleHeader";
import TodaysTicketing from "../../components/organisms/Schedule/TodaysTicketing";
import UpcomingTicketing from "../../components/organisms/Schedule/UpcomingTicketing";

const ScheduleMainScreen = () => {
  return (
    <View>
      <ScheduleHeader title="11월 11일 토요일" />
      <TodaysTicketing />
      <Separator />
      <UpcomingTicketing />
    </View>
  );
};

export default ScheduleMainScreen;
