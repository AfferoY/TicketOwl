import React, { useState } from "react";
import LoginContainer from "../../components/molecules/Login/LoginContainer";
import PageHeader from "../../components/molecules/PageHeader";
import { NextBtn } from "../../components/atoms/Buttons";
import FlexBox from "../../components/atoms/FlexBox";
import { lightTheme } from "../../constants/colors";
import { TouchableOpacity, View } from "react-native";
import Text from "../../components/atoms/Text";
import { spacing } from "../../constants/spacing";
import TextInput from "../../components/atoms/TextInput";
import responsiveSize from "../../utils/responsiveSize";

const SubBtn = ({ text, onPress }: { text: string; onPress: () => void }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingHorizontal: 10,
      }}
    >
      <Text size="sm" color={lightTheme.textDim}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const EmailLoginScreen = ({ navigation }: { navigation: any }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState("");

  const handleChange = (name: string, value: string) => {
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
    setAlert("");
  };

  return (
    <>
      <PageHeader title="" separator={false} />
      <LoginContainer>
        <TextInput
          placeholder="이메일을 입력해주세요"
          value={user.email}
          onChangeText={(text) => handleChange("email", text)}
        />
        <TextInput
          placeholder="비밀번호를 입력해주세요"
          value={user.password}
          onChangeText={(text) => handleChange("password", text)}
          secureTextEntry
        />
        {alert && (
          <View
            style={{
              paddingVertical: responsiveSize(3),
              width: "100%",
            }}
          >
            <Text size="sm" color={lightTheme.pointPink}>
              {alert}
            </Text>
          </View>
        )}
        <NextBtn
          text="로그인"
          onPress={() =>
            navigation.navigate("MainTab", {
              screen: "ScheduleStack",
              params: "ScheduleMain",
            })
          }
          style={{ marginTop: spacing.gutter }}
        />
        <FlexBox justifyContent="center" styles={{ marginTop: spacing.gutter }}>
          <SubBtn
            text={"회원가입"}
            onPress={() => {
              navigation.navigate("EmailSend");
            }}
          />
          <View
            style={{
              backgroundColor: lightTheme.textDim,
              width: 1,
              height: "100%",
            }}
          />
          <SubBtn
            text={"비밀번호 찾기"}
            onPress={() => {
              navigation.navigate("FindPwEmailSend");
            }}
          />
        </FlexBox>
      </LoginContainer>
    </>
  );
};

export default EmailLoginScreen;
