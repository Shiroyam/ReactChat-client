import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserReg } from "../types";

interface IState {
  user: IUserReg;
  fetchingSuccess: boolean;
  error: string;
}

const initialState: IState = {
  user: {
    _id: "",
    email: "",
    fullName: "",
    password: "",
  },
  fetchingSuccess: false,
  error: "",
};

export const regSlice = createSlice({
  name: "reg",
  initialState,
  reducers: {
    singUpSuccess(state: IState, action: PayloadAction<IUserReg>) {
      state.user = action.payload;
      state.fetchingSuccess = true;
      state.error = "";
    },
    singUpError(state: IState, action: PayloadAction<any>) {
      state.error = action.payload;
    },
  },
});

export default regSlice.reducer;
