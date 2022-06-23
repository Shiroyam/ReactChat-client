import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserAuth } from "../types";

interface IState {
  user: IUserAuth;
  error: string;
}

const initialState: IState = {
  user: {
    _id: "",
    fullName: "",
    email: "",
    password: "",
    token: "",
  },
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginInSuccess(state: IState, action: PayloadAction<IUserAuth>) {
      state.user = action.payload;
      state.error = "";
    },
    loginFetchingErorr(state: IState, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
