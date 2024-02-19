import React, { useState } from "react";
import { NextBtn } from "../../components/atoms/Buttons";
import TextInput from "../../components/atoms/TextInput";
import LoginContainer from "../../components/molecules/Login/LoginContainer";
import PageHeader from "../../components/molecules/PageHeader";
import { spacing } from "../../constants/spacing";
import { client } from "../../utils/api";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LoginStackParamList } from "../../navigators/LoginStack";

const EmailSendScreen = ({
  navigation,
}: NativeStackScreenProps<LoginStackParamList>) => {
  const [email, setEmail] = useState("");
  const [emailAlert, setEmailAlert] = useState("");
  const [ready, setReady] = useState(false);

  const sendMail = async () => {
    setReady(false);
    // send email

    try {
      const res = await client.post("/api/members/signup-code", {
        email: email,
      });

      // status code 출력

      const { success, code, result } = res;

      if (success) {
        console.log(res);
        // navigation.navigate("EmailCheckCode", {
        //   email,
        //   code,
        //   type: "register",
        // });
      } else if (!success) {
        setEmailAlert("이미 가입된 이메일입니다.");
      } else {
        setEmailAlert("이메일 전송에 실패했습니다.");
      }
    } catch (error) {
      console.error("[client] 이메일 전송 오류 발생:", error);
      setEmailAlert("이메일 전송 중 오류가 발생했습니다.");
    }
    setReady(true);
  };

  return (
    <>
      <PageHeader title="" separator={false} />
      <LoginContainer comment="인증 번호를 받을 이메일을 입력해주세요.">
        <TextInput
          placeholder="이메일을 입력해주세요"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setEmailAlert("");
            text.includes("@") ? setReady(true) : setReady(false);
          }}
          alert={!!emailAlert}
          alertText={emailAlert}
        />

        <NextBtn
          text="다음"
          onPress={() => {
            // 임시로 바로 넘어가게 설정. sendMail()로 변경해야 함.
            sendMail();
            // navigation.navigate("EmailCheckCode", {
            //   email,
            //   code: 1,
            //   type: "register",
            // });
          }}
          style={{ marginTop: spacing.gutter }}
          loading={!ready}
        />
      </LoginContainer>
    </>
  );
};

export default EmailSendScreen;
