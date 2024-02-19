import { Image, View } from "react-native";
import React from "react";
import Text from "../../atoms/Text";
import FlexBox from "../../atoms/FlexBox";
import styled from "styled-components/native";
import { lightTheme } from "../../../constants/colors";
import responsiveSize from "../../../utils/responsiveSize";
import { spacing } from "../../../constants/spacing";

const Container = styled.View`
  background-color: ${lightTheme.blue};
  flex-direction: row;
  width: 100%;
  padding: ${responsiveSize(50)}px;
  justify-content: space-between;
  align-items: center;
`;

const WelcomeBox = ({ nickname }: { nickname: string }) => {
  return (
    <Container>
      <View>
        <Text size="lg" color={lightTheme.background}>
          반갑습니다!
        </Text>
        <Text
          size="xl"
          weight="bold"
          color={lightTheme.background}
          styles={{
            paddingTop: spacing.padding,
            paddingBottom: spacing.gutter,
          }}
        >
          {nickname} 님
        </Text>
        <Text
          size="sm"
          color={lightTheme.background}
          styles={{ marginBottom: -4 }}
        >
          만나서 반가워요
        </Text>
        <Text size="sm" color={lightTheme.background}>
          우리 더 자주 만나요:)🤍
        </Text>
      </View>
      <Image
        source={require("../../../../assets/images/mypage_face.png")}
        style={{
          width: 73,
          height: 77,
          resizeMode: "contain",
        }}
      />
    </Container>
  );
};

export default WelcomeBox;
