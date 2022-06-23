import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authorizational/authReducer";

const rootReducer = combineReducers({
  authReducer,
});

export const storeSetup = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof storeSetup>;
export type AppDispatch = AppStore["dispatch"];
