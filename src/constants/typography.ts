const fonts = {
  Suite: {
    light: require("../../assets/fonts/SUITE-Light.otf"), // 10pt
    medium: require("../../assets/fonts/SUITE-Medium.otf"), // 12pt
    regular: require("../../assets/fonts/SUITE-Regular.otf"), // 12pt
    semiBold: require("../../assets/fonts/SUITE-SemiBold.otf"),
    bold: require("../../assets/fonts/SUITE-Bold.otf"), // 16pt
    heavy: require("../../assets/fonts/SUITE-Heavy.otf"), // 16pt
    extraBold: require("../../assets/fonts/SUITE-ExtraBold.otf"), // 20pt
  },
};

export const customFontsToLoad = {
  light: fonts.Suite.light,
  regular: fonts.Suite.regular,
  medium: fonts.Suite.medium,
  bold: fonts.Suite.bold,
  extraBold: fonts.Suite.extraBold,
  heavy: fonts.Suite.heavy,
};
