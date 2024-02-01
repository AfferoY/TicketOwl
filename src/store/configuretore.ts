import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./modules/auth";
import { userReducer } from "./modules/user";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
