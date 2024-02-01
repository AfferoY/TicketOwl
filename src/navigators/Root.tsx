import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/Login/WelcomeScreen";
import MainTab from "./MainTab";

const Stack = createNativeStackNavigator();

const Root = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {isLoggedIn ? (
        <Stack.Screen name="MainTab" component={MainTab} />
      ) : (
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      )}
    </Stack.Navigator>
  );
};
export default Root;
