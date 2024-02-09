import React, { createRef, forwardRef, useEffect, useState } from "react";
import { NextBtn } from "../../components/atoms/Buttons";
import LoginContainer from "../../components/molecules/Login/LoginContainer";
import PageHeader from "../../components/molecules/PageHeader";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LoginStackParamList } from "../../navigators/LoginStack";
import { TextInput, TextInputProps, View } from "react-native";
import { client } from "../../utils/api";
import Text from "../../components/atoms/Text";
import { lightTheme } from "../../constants/colors";
import { spacing } from "../../constants/spacing";
import FlexBox from "../../components/atoms/FlexBox";
import responsiveSize from "../../utils/responsiveSize";
import styled from "styled-components/native";

type EmailCheckCodeScreenProps = NativeStackScreenProps<
  LoginStackParamList,
  "EmailCheckCode"
>;

const CodeInputContainer = styled.View<{ alert: boolean }>`
  flex: 1;
  height: 100%;
  border-radius: 10px;
  border: 1px solid
    ${({ alert }) => (alert ? lightTheme.pointPink : lightTheme.text)};
`;

interface CodeInputProps extends TextInputProps {
  alert?: boolean;
}

const StyledInput = styled(TextInput)<CodeInputProps>`
  height: 50px;
  text-align: center;
  font-size: ${responsiveSize(22)}px;
  color: ${({ alert }) => (alert ? lightTheme.pointPink : lightTheme.text)};
`;

const CodeInput = forwardRef<TextInput, CodeInputProps>((props, ref) => (
  <StyledInput ref={ref} {...props} />
));

const EmailCheckCodeScreen = ({
  route,
  navigation,
}: EmailCheckCodeScreenProps) => {
  const { email, type, codeId } = route.params; // type: findPw, register

  const [code, setCode] = useState<string[]>(new Array(6).fill(""));
  const inputRefs = Array(6)
    .fill(null)
    .map(() => createRef<TextInput>());

  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState(true);

  const handleInputChange = (text: string, index: number) => {
    // (숫자만 입력 가능) 숫자가 아니면 무시
    if (!text.match(/^[0-9]$/)) {
      return;
    }

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // 다음 입력 박스로 포커스 이동
    if (text && index < 5) {
      inputRefs[index + 1].current?.focus();
    }
  };

  useEffect(() => {
    // code가 6자리이면 loading false
    if (code.join("").length === 6) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [code]);
  const handleBackspace = (key: string, index: number) => {
    if (key === "Backspace") {
      if (index > 0 && code[index] === "") {
        const newCode = [...code];
        newCode[index] = "";
        setCode(newCode);
        inputRefs[index - 1].current?.focus();
      } else if (code[index] !== "") {
        const newCode = [...code];
        newCode[index] = "";
        setCode(newCode);
        if (index > 0) {
          inputRefs[index - 1].current?.focus();
        }
      }
    }
  };

  const checkCode = async () => {
    try {
      const codeToSend = code.join("");
      const res = await client.post("~~~~~", {
        codeId: codeId,
        inputCode: parseInt(codeToSend),
      });

      console.log("인증코드 제출: ", res);
      const { result } = res;
      if (result === "success") {
        console.log("인증 성공");
        navigation.navigate("EmailRegister", { email });
      } else {
        console.log("인증 실패");
        setAlert("잘못된 코드입니다.");
      }
    } catch (error) {
      setAlert("오류가 발생했습니다.");
    }
  };

  return (
    <>
      <PageHeader title="" separator={false} />
      <LoginContainer comment="입력하신 이메일로 발송된 코드를 입력해주세요.">
        <FlexBox
          gap={10}
          styles={{
            marginBottom: !!alert ? spacing.padding : spacing.gutter,
            width: "90%",
          }}
        >
          {code.map((digit, index) => (
            <CodeInputContainer key={index} alert={!!alert}>
              <CodeInput
                keyboardType="number-pad"
                maxLength={1}
                ref={inputRefs[index]}
                onKeyPress={({ nativeEvent }) => {
                  handleBackspace(nativeEvent.key, index);
                }}
                onChangeText={(text) => handleInputChange(text, index)}
                value={digit}
                alert={!!alert}
              />
            </CodeInputContainer>
          ))}
        </FlexBox>
        {!!alert && (
          <View
            style={{
              paddingVertical: responsiveSize(3),
              width: "90%",
              marginBottom: spacing.padding,
            }}
          >
            <Text size="sm" color={lightTheme.pointPink}>
              {alert}
            </Text>
          </View>
        )}

        <NextBtn
          text="다음"
          onPress={() => navigation.navigate("EmailRegister", { email })}
          loading={loading}
        />
      </LoginContainer>
    </>
  );
};

export default EmailCheckCodeScreen;
