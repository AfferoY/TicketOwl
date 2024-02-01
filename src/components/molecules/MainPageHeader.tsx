import { View, TouchableOpacity } from "react-native";
import React from "react";
import useHeight from "../../hooks/useHeight";
import { useNavigation } from "@react-navigation/native";
import FlexBox from "../atoms/FlexBox";
import { spacing } from "../../constants/spacing";
import Text from "../atoms/Text";
import { lightTheme } from "../../constants/colors";
import styled from "styled-components/native";

const Blank = styled.View`
  width: ${spacing.iconBox}px;
  height: ${spacing.iconBox}px;
`;

const MainPageHeader = ({
  title,
  headerRight,
}: {
  title: string;
  headerRight?: React.ReactNode;
}) => {
  const { NOTCH_TOP } = useHeight();
  return (
    <FlexBox
      justifyContent="space-between"
      alignItems="center"
      styles={{
        paddingTop: NOTCH_TOP + spacing.padding,
        paddingHorizontal: spacing.offset,
        paddingBottom: spacing.padding,
        borderBottomWidth: 0.3,
        borderBottomColor: lightTheme.separator,
      }}
    >
      <View>
        <Text size="xl" weight="bold">
          {title}
        </Text>
      </View>
      {headerRight ? headerRight : <Blank />}
    </FlexBox>
  );
};

export default MainPageHeader;
