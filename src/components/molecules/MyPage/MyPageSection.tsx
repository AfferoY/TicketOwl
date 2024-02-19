import { View } from "react-native";
import React from "react";
import Text from "../../atoms/Text";
import { lightTheme } from "../../../constants/colors";
import { spacing } from "../../../constants/spacing";
import { SafeAreaConsumer } from "react-native-safe-area-context";

const MyPageSection = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <View style={{ padding: spacing.offset }}>
      <Text size="lg" weight="bold">
        {title}
      </Text>
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: lightTheme.text,
          marginTop: spacing.padding,
        }}
      />
      {children}
    </View>
  );
};

export default MyPageSection;
