import { createSlice } from "@reduxjs/toolkit";

interface IInitialAuthState {
  auth: {
    accessToken: string;
    accessExp: number;
    refreshExp: number;
    deviceId: string;
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
  },
  isLoggedIn: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(login.pending, (state, action) => {
    //     state.loading = true;
    //     state.error = null;
    // });
    // builder.addCase(login.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.isLoggedIn = true;
    //     state.auth = action.payload;
    // });
    // builder.addCase(login.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.error.message;
    // });
  },
});

// export const {} = authSlice.actions;
export const authReducer = authSlice.reducer;
