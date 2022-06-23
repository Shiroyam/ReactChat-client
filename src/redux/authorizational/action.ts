import { AppDispatch } from "..";
import { IUserAuth, IUserLogIn } from "../types";
import { authSlice } from "./authReducer";
import { toast } from "react-toastify";
import axios from "axios";

export const loginIn =
  (userData: IUserLogIn) => async (dispatch: AppDispatch) => {
    try {
      const response = await toast.promise(
        axios.post<IUserAuth>("http://localhost:3005/user/login", {
          password: userData.password,
          email: userData.email,
        }),
        {
          pending: "Promise is pending",
          success: "Promise resolved 👌",
          error: "Promise rejected 🤯",
        }
      );
      const { _id, token } = response.data;
      localStorage.setItem("id", _id);
      localStorage.setItem("token", token);
      dispatch(authSlice.actions.loginInSuccess(response.data));
    } catch (error: any) {
      dispatch(authSlice.actions.loginFetchingErorr(error.message));
    }
  };
