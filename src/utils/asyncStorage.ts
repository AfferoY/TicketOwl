import AsyncStorage from "@react-native-async-storage/async-storage";

// 데이터 저장
export const storeData = async (key: string, value: any): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);

    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error("AsyncStorage Error: ", e);
  }
};

// 데이터 가져오기
export const getData = async (key: string): Promise<any | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("AsyncStorage Error: ", e);
  }
};
// 데이터 제거
export const removeData = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error("AsyncStorage Error: ", e);
  }
};
