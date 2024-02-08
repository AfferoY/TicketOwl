import React from "react";
import { NextBtn } from "../../components/atoms/Buttons";
import LoginContainer from "../../components/molecules/Login/LoginContainer";
import PageHeader from "../../components/molecules/PageHeader";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LoginStackParamList } from "../../navigators/LoginStack";

type EmailCheckCodeScreenProps = NativeStackScreenProps<
  LoginStackParamList,
  "EmailCheckCode"
>;

const EmailCheckCodeScreen = ({
  route,
  navigation,
}: EmailCheckCodeScreenProps) => {
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
