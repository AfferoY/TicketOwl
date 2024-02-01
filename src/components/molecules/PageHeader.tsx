import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { lightTheme } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import useHeight from "../../hooks/useHeight";
import Icons from "../atoms/Icons";
import Text from "../atoms/Text";

const Container = styled.View<{ notchTop: number }>`
  padding: ${(props) => props.notchTop + spacing.padding}px ${spacing.offset}px
    ${spacing.padding}px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
const Blank = styled.View`
  width: ${spacing.iconBox}px;
  height: ${spacing.iconBox}px;
`;
const Title = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const PageHeader = ({
  headerLeftShown = true,
  headerRight,
  title,
}: {
  headerLeftShown?: boolean;
  headerRight?: React.ReactNode;
  title?: string;
}) => {
  const { NOTCH_TOP } = useHeight();
  const navigation = useNavigation();
  const HeaderLeft = () => (
    <Icons
      type="feather"
      name="chevron-left"
      size={spacing.iconBox}
      color={lightTheme.text}
      onPress={() => {
        navigation.goBack();
      }}
    />
  );

  return (
    <>
      <Container notchTop={NOTCH_TOP}>
        {headerLeftShown ? <HeaderLeft /> : <Blank />}
        {title && (
          <Title>
            <Text size="lg" weight="bold">
              {title}
            </Text>
          </Title>
        )}

        {headerRight ? headerRight : <Blank />}
      </Container>
      <View
        style={{
          height: 0.3,
          width: "100%",
          backgroundColor: lightTheme.separator,
        }}
      />
    </>
  );
};

export default PageHeader;
