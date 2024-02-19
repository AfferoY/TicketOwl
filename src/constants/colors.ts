export const palette = {
  gray100: "#FFFFFF",
  gray200: "#F8F8F8",
  gray300: "#E1DDDE",
  gray400: "#D8D8D8",
  gray500: "#C7C7C7",
  gray600: "#BBBBBB",
  gray700: "#868686",
  gray800: "#727272",
  gray900: "#000000",

  pink100: "#FBE4EE",
  pink200: "#FBD8DE",
  pink300: "#F4B4D0",
  pink400: "#ED8093",

  brown100: "#958185",
  brown200: "#2A030A",

  // brand colors
  interpark: "#8E43E7",
  melon: "#04E532",
  yes24: "#0080FF",
  ticketRed: "#F71F38",
  kakao: "#FEE500",
  google: "#4285F4",

  backdrop: "rgba(185, 185, 185, 0.57)",
  shadow: "rgba(0, 0, 0, 0.15)",
} as const;

// 확장성을 위해 theme을 객체로 만들어서 사용. 나중에 darkTheme 추가 가능
// palette에서 가져와서 사용
export const lightTheme = {
  name: "light",
  palette,

  background: palette.gray100,
  backdrop: palette.backdrop,
  border: palette.gray800,
  separator: palette.gray500,

  text: palette.gray900,
  textDim: palette.gray700,

  pointPink: palette.pink400,
  subPink: palette.pink200,

  inactiveTint: palette.gray600,
};
