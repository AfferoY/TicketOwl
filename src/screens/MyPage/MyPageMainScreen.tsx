import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import Text from "../../components/atoms/Text";
import { useAppSelect } from "../../store/configureStore.hooks";
import PageHeader from "../../components/molecules/PageHeader";
import WelcomeBox from "../../components/organisms/MyPage/WelcomeBox";
import { ScrollView, TouchableOpacity, View } from "react-native";
import MyPageSection from "../../components/molecules/MyPage/MyPageSection";
import ToggleSwitch from "../../components/atoms/ToggleSwitch";
import FlexBox from "../../components/atoms/FlexBox";
import { lightTheme } from "../../constants/colors";
import Separator from "../../components/atoms/Separator";
import { spacing } from "../../constants/spacing";
import Margin from "../../components/atoms/Margin";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const BoxContainer = styled.View`
  padding: ${spacing.padding}px 0;
`;

const PushNoti_1 = ({
  alarm,
  setAlarm,
}: {
  alarm: boolean;
  setAlarm: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <BoxContainer>
    <FlexBox justifyContent="space-between" alignItems="center">
      <Text size="md">관심 공연 티켓 오픈 공지</Text>
      <ToggleSwitch
        isEnabled={alarm}
        setIsEnabled={setAlarm}
        toggleSwitch={() => {}}
      />
    </FlexBox>
    <Text size="xs" color={lightTheme.textDim}>
      업데이트가 있는 경우, 매일 오후 9시에 제공돼요.
    </Text>
  </BoxContainer>
);
const PushNoti_2 = ({
  alarm,
  setAlarm,
  children,
}: {
  alarm: boolean;
  setAlarm: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) => (
  <BoxContainer>
    <FlexBox justifyContent="space-between" alignItems="center">
      <Text size="md">티켓 리마인드</Text>
      <ToggleSwitch
        isEnabled={alarm}
        setIsEnabled={setAlarm}
        toggleSwitch={() => {}}
      />
    </FlexBox>
    {children}
  </BoxContainer>
);

const AlarmNoti = ({
  alarm,
  setAlarm,
  children,
}: {
  alarm: boolean;
  setAlarm: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) => (
  <BoxContainer>
    <FlexBox justifyContent="space-between" alignItems="center">
      <Text size="md">티켓오픈 알람</Text>
      <ToggleSwitch
        isEnabled={alarm}
        setIsEnabled={setAlarm}
        toggleSwitch={() => {}}
      />
    </FlexBox>
    <Text size="xs" color={lightTheme.textDim}>
      화면을 가득 채우는 기상 알람 형식이에요!
    </Text>
    <Text size="xs" color={lightTheme.textDim}>
      무음모드여도 소리로 설정하면 소리가 울려요
    </Text>
    {children}
  </BoxContainer>
);

const SubBox = ({
  text,
  manager,
  isEnabled,
  setIsEnabled,
}: {
  text: string;
  manager: boolean;
  isEnabled: boolean;
  setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <FlexBox
    justifyContent="space-between"
    alignItems="center"
    styles={{ paddingLeft: spacing.padding, paddingVertical: spacing.small }}
  >
    <Text size="md" color={manager ? lightTheme.text : lightTheme.textDim}>
      {text}
    </Text>
    <ToggleSwitch
      isEnabled={isEnabled}
      setIsEnabled={setIsEnabled}
      toggleSwitch={() => {}}
      disabled={!manager}
    />
  </FlexBox>
);

const ServiceBox = ({
  text,
  onPress,
}: {
  text: string;
  onPress: () => void;
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{ paddingVertical: spacing.padding }}
  >
    <Text size="md">{text}</Text>
  </TouchableOpacity>
);
const MyPageMainScreen = () => {
  const { nickname } = useAppSelect((state) => state.user.user);
  const [pushNoti1, setPushNoti1] = useState(false);

  const [pushNoti2, setPushNoti2] = useState(false);
  const [pushNoti2_1, setPushNoti2_1] = useState(false);
  const [pushNoti2_2, setPushNoti2_2] = useState(false);
  const [pushNoti2_3, setPushNoti2_3] = useState(false);

  const [alarmNoti, setAlarmNoti] = useState(false);
  const [alarmSound, setAlarmSound] = useState(false);
  const [alarmVibration, setAlarmVibration] = useState(false);
  const [alarmNoti_1, setAlarmNoti_1] = useState(false);
  const [alarmNoti_2, setAlarmNoti_2] = useState(false);
  const [alarmNoti_3, setAlarmNoti_3] = useState(false);

  useEffect(() => {
    if (!pushNoti2) {
      setPushNoti2_1(false);
      setPushNoti2_2(false);
      setPushNoti2_3(false);
    }
  }, [pushNoti2]);

  useEffect(() => {
    if (!alarmNoti) {
      setAlarmSound(false);
      setAlarmVibration(false);
      setAlarmNoti_1(false);
      setAlarmNoti_2(false);
      setAlarmNoti_3(false);
    }
  }, [alarmNoti]);
  return (
    <>
      <PageHeader title="마이페이지" headerLeftShown={false} />
      <Container>
        <ScrollView style={{ width: "100%" }}>
          <WelcomeBox nickname={nickname} />
          {/* 푸시알림 설정 */}
          <MyPageSection title={"푸시알림 설정"}>
            <PushNoti_1 alarm={pushNoti1} setAlarm={setPushNoti1} />
            <Separator />
            <PushNoti_2 alarm={pushNoti2} setAlarm={setPushNoti2}>
              <SubBox
                text="전날 밤 11시"
                manager={pushNoti2}
                isEnabled={pushNoti2_1}
                setIsEnabled={setPushNoti2_1}
              />
              <Separator />
              <SubBox
                text="당일 아침 8시"
                manager={pushNoti2}
                isEnabled={pushNoti2_2}
                setIsEnabled={setPushNoti2_2}
              />
              <Separator />
              <SubBox
                text="당일 아침 11시"
                manager={pushNoti2}
                isEnabled={pushNoti2_3}
                setIsEnabled={setPushNoti2_3}
              />
            </PushNoti_2>
          </MyPageSection>

          {/* 알람설정 */}
          <MyPageSection title={"알람설정"}>
            <AlarmNoti alarm={alarmNoti} setAlarm={setAlarmNoti}>
              <Margin margin={spacing.padding} />
              <SubBox
                text="소리"
                manager={alarmNoti}
                isEnabled={alarmSound}
                setIsEnabled={setAlarmSound}
              />
              <Separator />
              <SubBox
                text="진동"
                manager={alarmNoti}
                isEnabled={alarmVibration}
                setIsEnabled={setAlarmVibration}
              />
              <Text
                size="md"
                color={alarmNoti ? lightTheme.text : lightTheme.textDim}
                styles={{
                  paddingLeft: spacing.padding,
                  paddingTop: spacing.padding,
                  paddingBottom: spacing.small,
                }}
              >
                알람 시간
              </Text>
              <SubBox
                text="5분 전"
                manager={alarmNoti}
                isEnabled={alarmNoti_1}
                setIsEnabled={setAlarmNoti_1}
              />
              <Separator />
              <SubBox
                text="10분 전"
                manager={alarmNoti}
                isEnabled={alarmNoti_2}
                setIsEnabled={setAlarmNoti_2}
              />
              <Separator />
              <SubBox
                text="15분 전"
                manager={alarmNoti}
                isEnabled={alarmNoti_3}
                setIsEnabled={setAlarmNoti_3}
              />
            </AlarmNoti>
          </MyPageSection>

          {/* 고객센터 */}
          <MyPageSection title={"고객센터"}>
            <ServiceBox text="자주 묻는 질문" onPress={() => {}} />
            <ServiceBox text="공지사항" onPress={() => {}} />
            <ServiceBox text="서비스 이용약관" onPress={() => {}} />
          </MyPageSection>
        </ScrollView>
      </Container>
    </>
  );
};

export default MyPageMainScreen;
