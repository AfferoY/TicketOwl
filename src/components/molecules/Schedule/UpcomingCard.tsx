import React from "react";
import { Alert, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { lightTheme } from "../../../constants/colors";
import { spacing } from "../../../constants/spacing";
import ShadowForCard from "../../atoms/CustomShadow";
import FlexBox from "../../atoms/FlexBox";
import Icons from "../../atoms/Icons";
import Text from "../../atoms/Text";
import responsiveSize from "../../../utils/responsiveSize";
import ColorBadge from "../../atoms/ColorBadge";

const Container = styled.View`
  padding: ${responsiveSize(14)}px;
  border-radius: ${spacing.borderRadius}px;
  background-color: ${lightTheme.background};
`;

const UpcomingCard = ({
  data,
}: {
  data: {
    id: number;
    title: string;
    ticketing_site: string[];
  };
}) => {
  return (
    <ShadowForCard>
      <Container>
        <FlexBox justifyContent="space-between" alignItems="center">
          <Text size="sm">11월 12일 (일)</Text>
          <TouchableOpacity
            onPress={() => Alert.alert("티켓정보 더보기")}
            style={{ padding: 5 }}
          >
            <Icons
              type="feather"
              name="more-horizontal"
              size={24}
              color={lightTheme.pointPink}
            />
          </TouchableOpacity>
        </FlexBox>
        <FlexBox
          alignItems="flex-end"
          styles={{ paddingTop: spacing.small, paddingBottom: 16 }}
        >
          <Text size="lg" weight="bold">
            11:00
          </Text>
          <Text size="sm" weight="bold">
            AM
          </Text>
        </FlexBox>

        <FlexBox alignItems="center" gap={spacing.small}>
          <ColorBadge />
          <Text size="sm" styles={{ paddingBottom: 2 }}>
            {data.title}
          </Text>
        </FlexBox>
        <Text size="xs" color={lightTheme.textDim}>
          {" "}
          {data.ticketing_site.join(" | ")}
        </Text>
      </Container>
    </ShadowForCard>
  );
};

export default UpcomingCard;
