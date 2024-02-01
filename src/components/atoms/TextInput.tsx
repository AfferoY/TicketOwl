import { forwardRef, useRef } from "react";
import { TextInput as RNTextInput, TextInputProps, View } from "react-native";
import styled from "styled-components/native";
import { lightTheme } from "../../constants/colors";
import responsiveSize from "../../utils/responsiveSize";
import Text from "./Text";
import { spacing } from "../../constants/spacing";

interface ITextInput extends TextInputProps {
  placeholder: string;
  alert?: boolean;
  alertText?: any;
  numberOfLines?: number;
}

const Input = styled(
  forwardRef<RNTextInput, TextInputProps>((props, ref) => (
    <RNTextInput ref={ref} {...props} />
  ))
)`
  font-size: ${responsiveSize(14)}px;
  color: ${lightTheme.text};
`;

const Container = styled.Pressable<{
  alert: boolean;
  onPress: () => void;
  minHeight?: number;
}>`
  border: 1px solid
    ${(props) => (props.alert ? lightTheme.pointPink : lightTheme.border)};
  border-radius: ${responsiveSize(6)}px;
  width: 100%;
  padding: ${responsiveSize(18)}px ${responsiveSize(8)}px;
  gap: ${responsiveSize(7)}px;
  margin-bottom: ${(props) => (props.alert ? 0 : spacing.padding)}px;
`;

const TextInput: React.FC<ITextInput> = ({
  placeholder,
  value,
  onChangeText,
  alert = false,
  alertText,
  numberOfLines = 1,

  ...props
}) => {
  const inputRef = useRef<RNTextInput>(null);
  return (
    <>
      <Container alert={alert} onPress={() => inputRef.current?.focus()}>
        <Input
          ref={inputRef}
          placeholder={placeholder}
          placeholderTextColor={lightTheme.textDim}
          value={value}
          numberOfLines={numberOfLines}
          onChangeText={onChangeText}
          autoCapitalize="none"
          autoCorrect={false} // iOS only
          autoComplete="off" // Android only
          {...props}
        />
      </Container>
      {alert && (
        <View
          style={{
            paddingVertical: responsiveSize(3),
            width: "100%",
          }}
        >
          <Text size="xs" color={lightTheme.pointPink}>
            {alertText}
          </Text>
        </View>
      )}
    </>
  );
};

export default TextInput;
