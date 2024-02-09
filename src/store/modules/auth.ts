import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../utils/asyncStorage";

interface IInitialAuthState {
  auth: {
    accessToken: string;
    accessExp: number;
    refreshExp: number;
    deviceId: string;
    strategy: string;
  };
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
}

const initialAuthState: IInitialAuthState = {
  auth: {
    accessToken: "",
    accessExp: 0,
    refreshExp: 0,
    deviceId: "",
    strategy: "",
  },
  isLoggedIn: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setLoggedIn: (state, action) => {
      const { accessToken, refreshToken, accessExp, refreshExp, deviceId } =
        action.payload;
      state.auth.accessToken = accessToken;
      state.auth.accessExp = accessExp;
      state.auth.refreshExp = refreshExp;
      state.auth.deviceId = deviceId;

      storeData("accessToken", accessToken);
      storeData("refreshToken", refreshToken);
      storeData("accessExp", accessExp);
      storeData("refreshExp", refreshExp);
      storeData("deviceId", deviceId);

      state.isLoggedIn = true;
      console.log("로그인 성공");
    },
  },
  extraReducers: (builder) => {},
});

export const { setLoggedIn } = authSlice.actions;
export const authReducer = authSlice.reducer;
