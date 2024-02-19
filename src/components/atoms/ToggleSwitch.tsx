import React from "react";
import { Platform, Switch } from "react-native";
import { lightTheme } from "../../constants/colors";

const ToggleSwitch = ({
  isEnabled,
  setIsEnabled,
  toggleSwitch,
  disabled = false,
}: {
  isEnabled: boolean;
  setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSwitch: () => void;
  disabled?: boolean;
}) => {
  const handleToggleSwitch = () => {
    setIsEnabled((prev) => !prev);
    toggleSwitch();
  };
  return (
    <Switch
      trackColor={{ false: "#fff", true: lightTheme.pointPink }}
      thumbColor={"#fff"}
      ios_backgroundColor={"#fff"}
      onValueChange={handleToggleSwitch}
      value={isEnabled}
      style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.65 }] }}
      disabled={disabled}
    />
  );
};

export default ToggleSwitch;
