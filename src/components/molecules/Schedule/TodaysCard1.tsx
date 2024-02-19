import React, { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { lightTheme } from "../../../constants/colors";
import { spacing } from "../../../constants/spacing";
import responsiveSize from "../../../utils/responsiveSize";
import { showSuccessToast } from "../../../utils/showToast";
import ColorBadge from "../../atoms/ColorBadge";
import ShadowForCard from "../../atoms/CustomShadow";
import FlexBox from "../../atoms/FlexBox";
import Icons from "../../atoms/Icons";
import Margin from "../../atoms/Margin";
import Text from "../../atoms/Text";
import Toast from "react-native-toast-message";

const Container = styled.View`
  padding: ${spacing.padding}px;
  background-color: ${lightTheme.background};
  border-radius: ${spacing.borderRadius}px;
`;
interface TodaysCardProps {
  data: {
    title: string;
    ticketing_time: string;
    ticketing_site: string[];
    alarmDeposit_isOn: boolean;
    alarmCancel_isOn: boolean;
  };
  onPress: () => void;
}
const TimeBox = () => {
  return (
    <FlexBox
      direction="column"
      justifyContent="center"
      alignItems="center"
      styles={{ paddingHorizontal: spacing.gutter }}
    >
      <Text size="lg" color={lightTheme.pointPink} weight="bold">
        2:00
      </Text>
      <Text size="xs" color={lightTheme.pointPink} weight="bold">
        PM
      </Text>
    </FlexBox>
  );
};
const MainBox = styled.View`
  gap: ${spacing.small}px;
  flex: 1;
  padding-left: ${responsiveSize(8)}px;
`;
const Title = ({ title }: { title: string }) => (
  <FlexBox gap={spacing.small} alignItems="center">
    <ColorBadge />
    <Text size="md" weight="bold">
      {title}
    </Text>
  </FlexBox>
);
const MoreBtn = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity onPress={onPress} style={{ padding: spacing.padding }}>
    <Icons
      type="feather"
      name="more-horizontal"
      size={24}
      color={lightTheme.pointPink}
    />
  </TouchableOpacity>
);
const Btn = styled.TouchableOpacity<{ isActive: boolean }>`
  background-color: rgba(240, 129, 149, 0.6);
  border-radius: 24px;
  padding: ${responsiveSize(7)}px ${responsiveSize(8)}px;
  flex-direction: row;
  align-items: center;
  gap: 3px;
  opacity: ${(props) => (props.isActive ? 1 : 0.6)};
`;

const AlarmBtn = ({
  type,
  isActive,
  onPress,
}: {
  type: "cash" | "ticket";
  isActive: boolean;
  onPress?: () => void;
}) => {
  return (
    <Btn isActive={isActive} onPress={onPress}>
      <Text
        size="xs"
        color={isActive ? lightTheme.red : lightTheme.background}
        weight="bold"
      >
        {type === "cash" ? "무통장 마감" : "취소표 티켓팅"}
      </Text>
      <Icons
        type="material"
        name="bell"
        size={14}
        color={isActive ? lightTheme.red : lightTheme.background}
      />
    </Btn>
  );
};
const TodaysCard1 = ({ onPress, data }: TodaysCardProps) => {
  const [isCashOn, setIsCashOn] = useState(false);
  const [isTicketOn, setIsTicketOn] = useState(false);

  const onPressNoti = (type: "cash" | "ticket") => {
    if (type === "cash") {
      setIsCashOn((prev) => !prev);
    } else if (type === "ticket") {
      setIsTicketOn((prev) => !prev);
    }
    const content =
      type === "cash"
        ? isCashOn
          ? `내일 ${data.ticketing_time}에 푸시 알림이 취소되었습니다`
          : `내일 ${data.ticketing_time}에 푸시 알림이 등록되었습니다`
        : isTicketOn
        ? `내일 ${data.ticketing_time}에 푸시 알림이 취소되었습니다`
        : `내일 ${data.ticketing_time}에 푸시 알림이 등록되었습니다`;
    showSuccessToast(content);

    Toast.show({
      type: "success",
      text1: content,

      visibilityTime: 2000,
      keyboardOffset: 100,
      topOffset: 60,
    });
  };

  return (
    <>
      <ShadowForCard>
        <Container>
          <FlexBox alignItems="center">
            <TimeBox />
            <MainBox>
              <Title title={"그날들 1차 티켓 오픈"} />
              <Text
                size="xs"
                color={lightTheme.textDim}
                styles={{ paddingLeft: 12 }}
              >
                {["인터파크", "멜론티켓", "티켓링크"].join(" | ")}
              </Text>
              <FlexBox gap={spacing.small}>
                <AlarmBtn
                  type="cash"
                  isActive={isCashOn}
                  onPress={() => onPressNoti("cash")}
                />
                <AlarmBtn
                  type="ticket"
                  isActive={isTicketOn}
                  onPress={() => onPressNoti("ticket")}
                />
              </FlexBox>
            </MainBox>
            <MoreBtn onPress={onPress} />
          </FlexBox>
        </Container>
      </ShadowForCard>
      <Margin margin={spacing.gutter} />
    </>
  );
};

export default TodaysCard1;
