import React from "react";
import { Shadow } from "react-native-shadow-2";
import { palette } from "../../constants/colors";
import { spacing } from "../../constants/spacing";

/* 안드로이드용 */
/* elevation: 2; */

/* IOS용으로 추가 */
// shadow-color: #000;
// shadow-offset: 0px 4px;
/* shadow-opacity: 0.1; */
// shadow-radius: 10px;

export default function ShadowForCard({
  children,
  radius,
}: {
  children: React.ReactNode;
  radius?: number;
}) {
  return (
    <Shadow
      distance={3}
      offset={[0, 0]}
      startColor={palette.shadow}
      style={{
        borderRadius: radius ? radius : spacing.borderRadius,
        width: "100%",
      }}
    >
      {children}
    </Shadow>
  );
}
