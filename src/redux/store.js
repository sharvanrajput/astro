import { configureStore } from "@reduxjs/toolkit";
import UserAuthReducer from "./slide/UserAuth";

export const store = configureStore({
  reducer: {
    userAuth: UserAuthReducer,
  },
});
