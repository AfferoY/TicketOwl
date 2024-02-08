import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import GoogleBtn from "../../components/molecules/Login/GoogleBtn";
import LoginContainer from "../../components/molecules/Login/LoginContainer";
import Policy from "../../components/molecules/Login/Policy";
import SocialBtn from "../../components/molecules/Login/SocialBtn";
import { spacing } from "../../constants/spacing";
import Text from "../../components/atoms/Text";
import FlexBox from "../../components/atoms/FlexBox";
import responsiveSize from "../../utils/responsiveSize";
import PageHeader from "../../components/molecules/PageHeader";

const Container = styled.View`
  gap: ${spacing.padding}px;
  width: 100%;
`;

const WelcomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <>
      <PageHeader title="" headerLeftShown={false} separator={false} />
      <LoginContainer>
        <Container>
          <FlexBox
            justifyContent="center"
            styles={{ paddingBottom: responsiveSize(24) }}
          >
            <Text size="lg" weight="bold">
              로그인/회원가입
            </Text>
          </FlexBox>
          <GoogleBtn onPress={() => {}} />
          <SocialBtn type="kakao" onPress={() => {}} />
          {Platform.OS === "ios" && (
            <SocialBtn type="apple" onPress={() => {}} />
          )}
          <SocialBtn
            type="email"
            onPress={() => {
              navigation.navigate("EmailLogin");
            }}
          />
        </Container>

        <Policy
          serviceOnPress={() => {
            navigation.navigate("MainTab", {
              screen: "ScheduleStack",
              params: "ScheduleMain",
            });
          }}
          privacyOnPress={() => {}}
        />
      </LoginContainer>
    </>
  );
};

export default WelcomeScreen;
