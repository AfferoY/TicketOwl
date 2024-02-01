import { createAsyncThunk } from "@reduxjs/toolkit";

export const emailLogin = createAsyncThunk(
  "auth/emailLogin",
  async (_, { rejectWithValue }) => {
    try {
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
