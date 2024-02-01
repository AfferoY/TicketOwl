import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginStack from "./LoginStack";
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
        <>
          <Stack.Screen name="LoginStack" component={LoginStack} />
          <Stack.Screen name="MainTab" component={MainTab} />
        </>
      )}
    </Stack.Navigator>
  );
};
export default Root;
