import React from "react";
import { Text } from "react-native";
import LoginContainer from "../../components/molecules/Login/LoginContainer";
import PageHeader from "../../components/molecules/PageHeader";

const EmailRegisterScreen = () => {
  return (
    <>
      <PageHeader title="" separator={false} headerLeftShown={true} />
      <LoginContainer>
        <Text>EmailRegisterScreen</Text>
      </LoginContainer>
    </>
  );
};

export default EmailRegisterScreen;
