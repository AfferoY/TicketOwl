import React from "react";
import { lightTheme } from "../../constants/colors";
import FlexBox from "../atoms/FlexBox";
import Text from "../atoms/Text";

const NoData = ({ text, height = 100 }: { text: string; height?: number }) => {
  return (
    <FlexBox
      justifyContent="center"
      alignItems="center"
      styles={{ height: height }}
    >
      <Text size="xs" color={lightTheme.textDim}>
        {text}
      </Text>
    </FlexBox>
  );
};

export default NoData;
