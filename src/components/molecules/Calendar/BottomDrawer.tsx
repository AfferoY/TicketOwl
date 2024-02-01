import { useRef } from "react";
import { Animated, Dimensions, PanResponder } from "react-native";
import styled from "styled-components/native";
import { lightTheme } from "../../../constants/colors";
import { spacing } from "../../../constants/spacing";
import useHeight from "../../../hooks/useHeight";
import responsiveSize from "../../../utils/responsiveSize";

const { height: screenHeight } = Dimensions.get("window");

const HorizontalLine = styled.View`
  background-color: ${lightTheme.pointPink};
  width: ${responsiveSize(46)}px;
  height: ${spacing.small}px;
  margin: ${spacing.small}px auto;
  border-radius: ${spacing.small}px;
`;

const Drawer = styled.View`
  width: 100%;
  background-color: ${lightTheme.background};
  border-radius: ${responsiveSize(20)}px;
  position: absolute;
  border: 2px solid ${lightTheme.separator};
`;

const AnimatedBox = Animated.createAnimatedComponent(Drawer);

const BottomDrawer = ({ children }: { children: React.ReactNode }) => {
  const { TABBAR_HEIGHT } = useHeight();
  const drawerPositionY = useRef<any>(new Animated.Value(0)).current;

  const closedState = 500;
  const openState = 300;
  const open = closedState - openState;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        drawerPositionY.setOffset(drawerPositionY._value); // 현재 위치를 오프셋으로 설정
        drawerPositionY.setValue(0); // 현재 값 초기화
      },
      onPanResponderMove: Animated.event([null, { dy: drawerPositionY }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, { dy }) => {
        drawerPositionY.flattenOffset(); // 오프셋 초기화

        const openThreshold = -200;
        if (drawerPositionY._value < openThreshold) {
          if (dy > 100) {
            // 열린 상태에서 아래로 충분히 드래그한 경우
            Animated.spring(drawerPositionY, {
              toValue: 0, // 닫힘 위치로 이동
              useNativeDriver: false,
            }).start();
          } else {
            // 열린 상태에서 아래로 충분히 드래그하지 않은 경우
            Animated.spring(drawerPositionY, {
              toValue: -open, // 열린 상태 유지
              useNativeDriver: false,
            }).start();
          }
        } else {
          if (dy < -100) {
            // 닫힌 상태에서 위로 충분히 드래그한 경우
            Animated.spring(drawerPositionY, {
              toValue: -open, // 열린 위치로 이동
              useNativeDriver: false,
            }).start();
          } else {
            // 위로 충분히 드래그하지 않은 경우

            Animated.spring(drawerPositionY, {
              toValue: 0, // 닫힌 상태 유지
              useNativeDriver: false,
            }).start();
          }
        }
      },
    })
  ).current;

  return (
    <AnimatedBox
      {...panResponder.panHandlers}
      style={{
        height: screenHeight - TABBAR_HEIGHT,
        top: closedState,
        transform: [{ translateY: drawerPositionY }],
      }}
    >
      <HorizontalLine />
      {children}
    </AnimatedBox>
  );
};

export default BottomDrawer;
