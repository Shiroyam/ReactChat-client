import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserAuth } from "../types";

interface IState {
  user: IUserAuth;
  error: string;
  fetchingSuccess: boolean;
}

const initialState: IState = {
  user: {
    user: {
      _id: "",
      fullName: "",
      email: "",
      password: "",
    },
    token: "",
  },
  fetchingSuccess: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginInSuccess(state: IState, action: PayloadAction<IUserAuth>) {
      state.user = action.payload;
      state.fetchingSuccess = true;
      state.error = "";
    },
    loginFetchingErorr(state: IState, action: PayloadAction<string>) {
      state.error = action.payload;
      state.fetchingSuccess = false;
    },
  },
});

export default authSlice.reducer;
