import { createSlice } from "@reduxjs/toolkit";
import { emailLogin } from "../../utils/auth/emailLogin";

interface IInitialAuthState {
  auth: {
    accessToken: string;
    accessExp: number;
    refreshExp: number;
    deviceId: string;
  };
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null; // Explicitly type the error property
}

const initialAuthState: IInitialAuthState = {
  auth: {
    accessToken: "",
    accessExp: 0,
    refreshExp: 0,
    deviceId: "",
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
      state.isLoggedIn = action.payload;
      console.log("로그인 성공");
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(emailLogin.pending, (state, action) => {
    //   state.loading = true;
    //   state.error = null;
    //   console.log("로그인중");
    // });
    // builder.addCase(emailLogin.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.isLoggedIn = true;
    //   console.log("로그인 성공");
    //   // state.auth = action.payload;
    // });
    // builder.addCase(emailLogin.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload as string;
    //   console.log("로그인 실패");
    // });
  },
});

export const { setLoggedIn } = authSlice.actions;
export const authReducer = authSlice.reducer;
