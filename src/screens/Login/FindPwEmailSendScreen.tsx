import React from "react";
import { Text } from "react-native";
import LoginContainer from "../../components/molecules/Login/LoginContainer";
import PageHeader from "../../components/molecules/PageHeader";

const FindPwEmailSendScreen = () => {
  return (
    <>
      <PageHeader title="" separator={false} />
      <LoginContainer>
        <Text>FindPwEmailSendScreen</Text>
      </LoginContainer>
    </>
  );
};

export default FindPwEmailSendScreen;
