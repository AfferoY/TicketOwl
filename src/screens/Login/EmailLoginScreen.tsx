import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { NextBtn } from "../../components/atoms/Buttons";
import FlexBox from "../../components/atoms/FlexBox";
import Text from "../../components/atoms/Text";
import TextInput from "../../components/atoms/TextInput";
import LoginContainer from "../../components/molecules/Login/LoginContainer";
import PageHeader from "../../components/molecules/PageHeader";
import { lightTheme } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import { useAppDispatch, useAppSelect } from "../../store/configureStore.hooks";
import { setLoggedIn } from "../../store/modules/auth";
import responsiveSize from "../../utils/responsiveSize";
import { client } from "../../utils/api";
import getDeviceId from "../../utils/getDeviceId";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LoginStackParamList } from "../../navigators/LoginStack";

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

const EmailLoginScreen = ({
  navigation,
}: NativeStackScreenProps<LoginStackParamList>) => {
  const dispatch = useAppDispatch();
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

  const handleLogin = async () => {
    const deviceId = await getDeviceId();
    try {
      const res = await client.post("", {
        email: user.email,
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
      console.log("emailLogin error: ", e.message);
    }
  };

  const { isLoggedIn } = useAppSelect((state) => state.auth);
  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate("MainTab", {
        screen: "ScheduleStack",
        params: { screen: "ScheduleMain" },
      });
    }
  }, [isLoggedIn]);

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
          onPress={() => handleLogin()}
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
