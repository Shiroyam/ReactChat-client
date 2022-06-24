import { AppDispatch } from "..";
import { IUserReg, IUserSingIn } from "../types";
import { toast } from "react-toastify";
import { regSlice } from "./regReducer";
import axios from "axios";

export const singIn =
  (userData: IUserSingIn) => async (dispatch: AppDispatch) => {
    try {
      const response = await toast.promise(
        axios.post<IUserReg>("http://localhost:3005/user/create", {
          fullname: userData.fullName,
          email: userData.email,
          password: userData.password,
        }),
        {
          pending: "Promise is pending",
          success: "Promise resolved 👌",
          error: "Promise rejected 🤯",
        }
      );
      dispatch(regSlice.actions.singUpSuccess(response.data));
    } catch (error: any) {
      dispatch(regSlice.actions.singUpError(error));
    }
  };
