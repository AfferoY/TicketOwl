import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ScheduleMainScreen from "../screens/Schedule/ScheduleMainScreen";
import NotificationScreen from "../screens/Schedule/NotificationScreen";
import { lightTheme } from "../constants/colors";

export type ScheduleStackParamList = {
  ScheduleMain: undefined; 
  Notification: undefined;
};

const Stack = createNativeStackNavigator<ScheduleStackParamList>();

const ScheduleStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: lightTheme.background },
      }}
    >
      <Stack.Screen name="ScheduleMain" component={ScheduleMainScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
    </Stack.Navigator>
  );
};

export default ScheduleStack;
