import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { lightTheme } from "../constants/colors";
import EmailLoginScreen from "../screens/Login/EmailLoginScreen";
import EmailSendScreen from "../screens/Login/EmailSendScreen";
import WelcomeScreen from "../screens/Login/WelcomeScreen";
import EmailCheckCodeScreen from "../screens/Login/EmailCheckCodeScreen";
import EmailRegisterScreen from "../screens/Login/EmailRegisterScreen";
import FindPwEmailSendScreen from "../screens/Login/FindPwEmailSendScreen";

export type LoginStackParamList = {
  Welcome: undefined;
  EmailLogin: undefined;
  EmailSend: undefined;
  EmailCheckCode: { email: string; codeId: Number; type: string };
  EmailRegister: { email: string };
  FindPwEmailSend: undefined;
};

const Stack = createNativeStackNavigator<LoginStackParamList>();

const LoginStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: lightTheme.background },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="EmailLogin" component={EmailLoginScreen} />
      <Stack.Screen name="EmailSend" component={EmailSendScreen} />
      <Stack.Screen name="EmailCheckCode" component={EmailCheckCodeScreen} />
      <Stack.Screen name="EmailRegister" component={EmailRegisterScreen} />
      <Stack.Screen name="FindPwEmailSend" component={FindPwEmailSendScreen} />
    </Stack.Navigator>
  );
};

export default LoginStack;
