import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const responsiveSize = (fontSize: number) => {
  return Math.round((fontSize * windowWidth) / 430);
};

export default responsiveSize;
