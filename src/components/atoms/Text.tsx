import React from "react";
import { TextStyle } from "react-native";
import styled from "styled-components/native";
import { lightTheme } from "../../constants/colors";
import responsiveSize from "../../utils/responsiveSize";

export type SizeStyles = "xl" | "lg" | "md" | "sm" | "xs" | "xxs";
export type WeightStyles =
  | "light"
  | "regular"
  | "medium"
  | "bold"
  | "extraBold"
  | "heavy";

const $sizeStyles = {
  xl: { fontSize: responsiveSize(20) },
  lg: { fontSize: responsiveSize(18) },
  md: { fontSize: responsiveSize(16) },
  sm: { fontSize: responsiveSize(12) },
  xs: { fontSize: responsiveSize(10) },
  xxs: { fontSize: responsiveSize(9) },
};

const $weightStyles = {
  light: { fontFamily: "light" },
  regular: { fontFamily: "regular" },
  medium: { fontFamily: "medium" },
  bold: { fontFamily: "bold" },
  extraBold: { fontFamily: "extraBold" },
  heavy: { fontFamily: "heavy" },
};

const TextStyling = styled.Text<{
  size: SizeStyles;
  weight: WeightStyles;
  color: string;
}>`
  font-size: ${({ size }) => $sizeStyles[size].fontSize}px;
  font-family: ${({ weight }) => $weightStyles[weight].fontFamily};
  color: ${(props) => (props.color === "#000" ? lightTheme.text : props.color)};
`;

interface TextProps {
  children: string | string[] | number;
  size: SizeStyles;
  weight?: WeightStyles;
  color?: string;
  styles?: TextStyle;
}

const Text: React.FC<TextProps> = ({
  children,
  size = "md",
  weight = "regular",
  color = "#000",
  styles,
}) => {
  return (
    <TextStyling size={size} weight={weight} color={color} style={styles}>
      {children}
    </TextStyling>
  );
};

export default Text;
