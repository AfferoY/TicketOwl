import { View } from "react-native";
import Text from "../components/atoms/Text";
import { lightTheme } from "../constants/colors";

export const toastConfig = {
  /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
  success: ({
    text1,
    props,
  }: {
    text1?: string;
    props: {
      uuid: string;
    };
  }) => (
    <View
      style={{
        height: 60,
        width: "90%",
        backgroundColor: lightTheme.pointPink,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {text1 && (
        <Text size="md" color={lightTheme.text} weight="medium">
          {text1}
        </Text>
      )}
    </View>
  ),
  /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
  error: ({
    text1,
    text2,
    props,
  }: {
    text1?: string;
    text2?: string;
    props: {
      uuid: string;
    };
  }) => (
    <View
      style={{
        height: 60,
        width: "90%",
        backgroundColor: lightTheme.pointPink,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {text1 && (
        <Text size="md" color={lightTheme.text}>
          ⚠️ {text1}
        </Text>
      )}
      {text2 && (
        <Text size="md" color={lightTheme.text}>
          {text2}
        </Text>
      )}
    </View>
  ),
  /*
      Or create a completely new type - `tomatoToast`,
      building the layout from scratch.
  
      I can consume any custom `props` I want.
      They will be passed when calling the `show` method (see below)
    */
};
