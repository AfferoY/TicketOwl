import React from "react";
import { NextBtn } from "../../components/atoms/Buttons";
import LoginContainer from "../../components/molecules/Login/LoginContainer";
import PageHeader from "../../components/molecules/PageHeader";

const EmailCheckCodeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <>
      <PageHeader title="체크코드" separator={false} />
      <LoginContainer>
        <NextBtn
          text="다음"
          onPress={() => navigation.navigate("EmailRegister")}
        />
      </LoginContainer>
    </>
  );
};

export default EmailCheckCodeScreen;
