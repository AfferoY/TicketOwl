import responsiveSize from "../utils/responsiveSize";

export const spacing = {
  gutter: responsiveSize(20),
  offset: responsiveSize(24),
  padding: responsiveSize(10),
  small: responsiveSize(4),

  iconBox: responsiveSize(35),
  lineHeight: responsiveSize(20),
} as const;

export type Spacing = keyof typeof spacing;
