import { createSlice } from "@reduxjs/toolkit";

interface IInitialUserState {
  user: {
    user_id: number;
    email: string;
    nickname: string;
    created_time: string;
    strategy: string;
  };
  loading: boolean;
  error: string | null;
}

const initialUserState: IInitialUserState = {
  user: {
    user_id: 0,
    email: "",
    nickname: "정환희",
    created_time: "",
    strategy: "",
  },
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "auth",
  initialState: initialUserState,
  reducers: {},
  extraReducers: (builder) => {},
});

// export const {} = userSlice.actions;
export const userReducer = userSlice.reducer;
