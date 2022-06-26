import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authorizational/authReducer";
import regReducer from "./registration/regReducer"
import usersReducer from "./users/usersReducer";

const rootReducer = combineReducers({
  authReducer,
  regReducer,
  usersReducer,
});

export const storeSetup = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof storeSetup>;
export type AppDispatch = AppStore["dispatch"];
