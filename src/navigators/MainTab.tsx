import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icons from "../components/atoms/Icons";
import { lightTheme } from "../constants/colors";
import useHeight from "../hooks/useHeight";
import CalendarMainScreen from "../screens/Calendar/CalendarMainScreen";
import ConcertMainScreen from "../screens/Concert/ConcertMainScreen";
import MyPageMainScreen from "../screens/MyPage/MyPageMainScreen";
import ScheduleStack from "./ScheduleStack";

export type MainTabParamList = {
  ScheduleStack: undefined;
  CalendarMain: undefined;
  ConcertMain: undefined;
  MyPageMain: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

const ScheduleOptions = {
  tabBarLabel: "일정",
  tabBarIcon: ({
    focused,
    color,
    size,
  }: {
    focused: boolean;
    color: string;
    size: number;
  }) => <Icons type="material" name="bell-outline" size={size} color={color} />,
};
const CalendarOptions = {
  // tab bar
  tabBarLabel: "캘린더",
  tabBarIcon: ({
    focused,
    color,
    size,
  }: {
    focused: boolean;
    color: string;
    size: number;
  }) => (
    <Icons
      type="material"
      name="calendar-blank-outline"
      size={size}
      color={color}
    />
  ),
};
const ConcertOptions = {
  tabBarLabel: "공연",
  tabBarIcon: ({
    focused,
    color,
    size,
  }: {
    focused: boolean;
    color: string;
    size: number;
  }) => (
    <Icons
      type="ionicons"
      name="information-circle-outline"
      size={size}
      color={color}
    />
  ),
};
const MyPageOptions = {
  tabBarLabel: "마이",
  tabBarIcon: ({
    focused,
    color,
    size,
  }: {
    focused: boolean;
    color: string;
    size: number;
  }) => (
    <Icons
      type="ionicons"
      name="person-circle-outline"
      size={size}
      color={color}
    />
  ),
};

const MainTab = () => {
  const { HEADER_HEIGHT, TABBAR_HEIGHT } = useHeight();
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: lightTheme.background,
      }}
      screenOptions={{
        tabBarActiveTintColor: lightTheme.pointPink,
        tabBarInactiveTintColor: lightTheme.inactiveTint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: lightTheme.background,
          height: TABBAR_HEIGHT,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "700",
          marginTop: -5,
          marginBottom: 10,
        },
        headerStyle: {
          height: HEADER_HEIGHT,
          borderBottomColor: lightTheme.separator,
          borderBottomWidth: 0.3,
        },
      }}
    >
      <Tab.Screen
        name="ScheduleStack"
        component={ScheduleStack}
        options={ScheduleOptions}
      />
      <Tab.Screen
        name="CalendarMain"
        component={CalendarMainScreen}
        options={CalendarOptions}
      />
      <Tab.Screen
        name="ConcertMain"
        component={ConcertMainScreen}
        options={ConcertOptions}
      />
      <Tab.Screen
        name="MyPageMain"
        component={MyPageMainScreen}
        options={MyPageOptions}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
