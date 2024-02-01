export const spacing = {
  xxxs: 2,
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  xxxl: 40,

  gutter: 20,
  offset: 12,
} as const;

export type Spacing = keyof typeof spacing;
