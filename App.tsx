import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { customFontsToLoad } from "./src/constants/typography";
import Root from "./src/navigators/Root";
import SplashScreen from "./src/screens/SplashScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

export default function App() {
  const [fontsLoaded] = Font.useFonts(customFontsToLoad);

  if (!fontsLoaded) return <SplashScreen />;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Root isLoggedIn={true} />
      </NavigationContainer>
      <StatusBar barStyle="dark-content" />
    </SafeAreaProvider>
  );
}
