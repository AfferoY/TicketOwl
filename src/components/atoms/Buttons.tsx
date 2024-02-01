import styled from "styled-components/native";
import Text from "./Text";
import { lightTheme } from "../../constants/colors";
import responsiveSize from "../../utils/responsiveSize";

const NextBtnContainer = styled.TouchableOpacity<{ disabled: boolean }>`
  width: 100%;
  background-color: ${lightTheme.pointPink};
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: ${responsiveSize(15)}px 0;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const NextBtn = ({
  text,
  onPress,
  loading = false,
  style,
}: {
  text: string;
  onPress: () => void;
  loading?: boolean;
  style?: any;
}) => {
  return (
    <NextBtnContainer style={style} onPress={onPress} disabled={loading}>
      <Text size="md" color="white" weight="bold">
        {text}
      </Text>
    </NextBtnContainer>
  );
};
