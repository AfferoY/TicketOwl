import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { NextBtn } from "../../components/atoms/Buttons";
import Text from "../../components/atoms/Text";
import TextInput from "../../components/atoms/TextInput";
import LoginContainer from "../../components/molecules/Login/LoginContainer";
import PageHeader from "../../components/molecules/PageHeader";
import { spacing } from "../../constants/spacing";
import { useAppDispatch, useAppSelect } from "../../store/configureStore.hooks";
import { setLoggedIn } from "../../store/modules/auth";
import { client } from "../../utils/api";
import getDeviceId from "../../utils/getDeviceId";

export interface IRegisterUser {
  email: string;
  id: string;
  password: string;
}

const EmailRegisterScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const dispatch = useAppDispatch();
  const email = route.params.email;
  const [user, setUser] = useState<IRegisterUser>({
    email: email,
    id: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [idAlert, setIdAlert] = useState("");
  const [pwAlert, setPwAlert] = useState("");
  const [confirmPwAlert, setConfirmPwAlert] = useState("");
  const handleChange = (name: string, value: string) => {
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // SERVER
  const handleRegister = async () => {
    const deviceId = await getDeviceId();
    try {
      const res = await client.post("", {
        email: user.email,
        id: user.id,
        password: user.password,
        deviceId: deviceId,
      });
      const {
        result,
        message,
        accessToken,
        refreshToken,
        accessExp,
        refreshExp,
      } = res;
      if (result === "success") {
        dispatch(
          setLoggedIn({
            accessToken,
            refreshToken,
            accessExp,
            refreshExp,
            deviceId,
          })
        );
      }
    } catch (e: any) {
      console.log("emailRegister error: ", e.message);
    }
  };
  const { isLoggedIn } = useAppSelect((state) => state.auth);
  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate("MainTab", {
        screen: "ScheduleStack",
        params: "ScheduleMain",
      });
    }
  }, [isLoggedIn]);
  return (
    <>
      <PageHeader title="" separator={false} headerLeftShown={true} />
      <LoginContainer>
        <TextInput
          placeholder="아이디"
          value={user.id}
          onChangeText={(text) => handleChange("id", text)}
          alert={!!idAlert}
          alertText={idAlert}
        />
        <View style={{ width: "100%", paddingBottom: spacing.padding }}>
          <Text size="sm">* 영어 대소문자, 숫자, 특수문자 포함 8자 이상</Text>
        </View>
        <TextInput
          placeholder="비밀번호"
          value={user.password}
          onChangeText={(text) => handleChange("password", text)}
          secureTextEntry
          alert={!!pwAlert}
          alertText={pwAlert}
        />
        <TextInput
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          alert={!!confirmPwAlert}
          alertText={confirmPwAlert}
        />
        <NextBtn
          text="다음"
          onPress={() => {}}
          style={{ marginTop: spacing.gutter }}
        />
      </LoginContainer>
    </>
  );
};

export default EmailRegisterScreen;
