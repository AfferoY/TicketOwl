import React from "react";
import { NextBtn } from "../../components/atoms/Buttons";
import LoginContainer from "../../components/molecules/Login/LoginContainer";
import PageHeader from "../../components/molecules/PageHeader";

const EmailCheckCodeScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const { email, type } = route.params;
  return (
    <>
      <PageHeader title="체크코드" separator={false} />
      <LoginContainer>
        <NextBtn
          text="다음"
          onPress={() => navigation.navigate("EmailRegister", { email })}
        />
      </LoginContainer>
    </>
  );
};

export default EmailCheckCodeScreen;
