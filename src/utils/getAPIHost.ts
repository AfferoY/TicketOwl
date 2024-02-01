import { LOCAL_API_HOST_ANDROID, LOCAL_API_HOST_IOS } from "@env";
import { Platform } from "react-native";

export const getAPIHost = (): string => {
  const _ANDROID_API_HOST = `${LOCAL_API_HOST_ANDROID}`;
  const _IOS_API_HOST = `${LOCAL_API_HOST_IOS}`;

  if (Platform.OS === "ios") {
    return _IOS_API_HOST;
  } else if (Platform.OS === "android") {
    return _ANDROID_API_HOST;
  } else {
    throw "Platform not supported";
  }
};
