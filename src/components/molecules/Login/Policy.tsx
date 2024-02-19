import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { lightTheme } from "../../../constants/colors";
import { spacing } from "../../../constants/spacing";
import FlexBox from "../../atoms/FlexBox";
import Text from "../../atoms/Text";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: ${spacing.small}px;
`;

const Policy = ({
  serviceOnPress,
  privacyOnPress,
}: {
  serviceOnPress: () => void;
  privacyOnPress: () => void;
}) => {
  return (
    <Container>
      <FlexBox>
        <Text size="xs" color={lightTheme.textDim}>
          계속 진행하면 TicketOwl의
        </Text>
        <TouchableOpacity
          onPress={serviceOnPress}
          style={{
            borderBottomWidth: 1,
            borderColor: lightTheme.text,
          }}
        >
          <Text size="xs" color={lightTheme.text}>
            {" "}
            서비스 약관{" "}
          </Text>
        </TouchableOpacity>
        <Text size="xs" color={lightTheme.textDim}>
          및{" "}
        </Text>
        <TouchableOpacity
          onPress={privacyOnPress}
          style={{
            borderBottomWidth: 1,
            borderColor: lightTheme.text,
          }}
        >
          <Text size="xs" color={lightTheme.text}>
            개인정보 보호정책
          </Text>
        </TouchableOpacity>
        <Text size="xs" color={lightTheme.textDim}>
          에
        </Text>
      </FlexBox>
      <Text size="xs" color={lightTheme.textDim}>
        동의한 것으로 간주합니다.
      </Text>
    </Container>
  );
};

export default Policy;
