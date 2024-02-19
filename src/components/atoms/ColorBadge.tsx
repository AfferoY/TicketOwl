import React from "react";
import { View } from "react-native";
import { lightTheme } from "../../constants/colors";

const ColorBadge = ({ color }: { color?: string }) => {
  return (
    <View
      style={{
        width: 7,
        height: 14,
        backgroundColor: color ? color : lightTheme.pointPink,
        borderRadius: 3,
      }}
    />
  );
};

export default ColorBadge;
