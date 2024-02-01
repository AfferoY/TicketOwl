import { useSafeAreaInsets } from "react-native-safe-area-context";

const useHeight = () => {
  const insets = useSafeAreaInsets();
  const NOTCH_TOP = insets.top;
  const NOTCH_BOTTOM = insets.bottom;

  const HEADER_HEIGHT = 60 + insets.top;
  const TABBAR_HEIGHT = 60 + insets.bottom;

  return {
    NOTCH_TOP,
    NOTCH_BOTTOM,
    HEADER_HEIGHT,
    TABBAR_HEIGHT,
  };
};

export default useHeight;
