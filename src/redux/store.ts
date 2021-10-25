import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import tokenReducer from "./slices/tokenSlice";

const reducer = {
  auth: authReducer,
  user: userReducer,
  token: tokenReducer,
};

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
});
