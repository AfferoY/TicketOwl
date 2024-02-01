import React from "react";
import styled from "styled-components/native";
import Text from "../../components/atoms/Text";
import { useAppSelect } from "../../store/configureStore.hooks";
import PageHeader from "../../components/molecules/PageHeader";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const MyPageMainScreen = () => {
  const { nickname } = useAppSelect((state) => state.user.user);
  return (
    <>
      <PageHeader title="마이페이지" headerLeftShown={false} />
      <Container>
        <Text size="lg">반갑습니다! {nickname}님</Text>
      </Container>
    </>
  );
};

export default MyPageMainScreen;
