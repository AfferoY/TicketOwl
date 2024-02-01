import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Text from "./src/components/atoms/Text";
import { customFontsToLoad } from "./src/constants/typography";
import SplashScreen from "./src/screens/SplashScreen";

export default function App() {
  const [fontsLoaded] = Font.useFonts(customFontsToLoad);

  if (!fontsLoaded) return <SplashScreen />;

  return (
    <View style={styles.container}>
      <Text size="lg">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
