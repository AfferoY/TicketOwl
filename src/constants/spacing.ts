import responsiveSize from "../utils/responsiveSize";

export const spacing = {
  gutter: responsiveSize(20),
  offset: responsiveSize(24),
  padding: responsiveSize(10),

  iconBox: responsiveSize(35),
} as const;

export type Spacing = keyof typeof spacing;
