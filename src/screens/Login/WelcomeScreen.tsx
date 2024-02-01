import React from "react";

import styled from "styled-components/native";
import Text from "../../components/atoms/Text";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const WelcomeScreen = () => {
  return (
    <Container>
      <Text size="lg">WelcomeScreen</Text>
    </Container>
  );
};

export default WelcomeScreen;
