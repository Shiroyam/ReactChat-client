import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../types";

interface IState {
  users: IUser[];
  fetchingSuccess: boolean;
  error: string;
}

const initialState: IState = {
  users: [],
  fetchingSuccess: false,
  error: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersFetchingSuccess(state: IState, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
      state.fetchingSuccess = true;
      state.error = "";
    },
    usersFetchingError(state: IState, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export default usersSlice.reducer;
