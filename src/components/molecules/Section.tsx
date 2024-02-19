import styled from "styled-components/native";
import { spacing } from "../../constants/spacing";
import { ReactNode } from "react";
import Text from "../atoms/Text";
import { View } from "react-native";

const SectionContainer = styled.View`
  padding: 0 ${spacing.offset}px ${spacing.offset}px;
`;

const Section = ({
  children,
  title,
  noPaddingVertical = false,
}: {
  children: ReactNode;
  title: string;
  noPaddingVertical?: boolean;
}) => {
  return (
    <View
      style={{
        paddingVertical: spacing.offset,
      }}
    >
      <SectionContainer
        style={{ paddingBottom: noPaddingVertical ? 0 : spacing.offset }}
      >
        <Text size="lg" weight="bold">
          {title}
        </Text>
      </SectionContainer>
      {children}
    </View>
  );
};

export default Section;
