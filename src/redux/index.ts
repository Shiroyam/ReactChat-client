import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authorizational/authReducer";
import regReducer from "./registration/regReducer";
import usersReducer from "./users/usersReducer";
import dialogReducer from "./dialogues/dialogReducer";
import messageReducer from "./message/messageReducer";

const rootReducer = combineReducers({
  authReducer,
  regReducer,
  usersReducer,
  dialogReducer,
  messageReducer,
});

export const storeSetup = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof storeSetup>;
export type AppDispatch = AppStore["dispatch"];
