import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import { lightTheme } from "../../../constants/colors";
import { spacing } from "../../../constants/spacing";
import responsiveSize from "../../../utils/responsiveSize";
import Text from "../../atoms/Text";
import PageHeader from "../PageHeader";

const Container = styled.View<{ background?: string }>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ background, theme }) =>
    background ? background : theme.loginBackground};
`;
const Logo = styled.View`
  padding: ${responsiveSize(90)}px ${spacing.gutter}px ${responsiveSize(20)}px;
  gap: ${responsiveSize(38)}px;
  align-items: center;
`;
const Children = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding: ${spacing.gutter}px;
`;

const LoginContainer = ({
  children,
  comment = "none",
  background,
}: {
  children: React.ReactNode;
  comment?: string;
  background?: string;
}) => {
  return (
    <Container background={background}>
      <PageHeader title="" headerLeftShown={false} separator={false} />
      <Logo>
        <Image
          source={require("../../../../assets/images/logo.png")}
          style={{
            width: responsiveSize(148),
            height: responsiveSize(70),
            resizeMode: "contain",
          }}
        />
        <Text
          size="md"
          color={comment !== "none" ? lightTheme.text : "transparent"}
          styles={{
            textAlign: "center",
            lineHeight: spacing.lineHeight,
          }}
        >
          {comment}
        </Text>
      </Logo>
      <Children>{children}</Children>
    </Container>
  );
};

export default LoginContainer;
