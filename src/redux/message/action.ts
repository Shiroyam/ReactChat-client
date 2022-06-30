import axios from "axios";
import { AppDispatch } from "..";
import { IMessage } from "../types";
import { messageSlice } from "./messageReducer";

export const messageFetching =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get<IMessage[]>(
        `http://localhost:3005/message/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(messageSlice.actions.messageFetchingSuccess(response.data));
    } catch (error: any) {
      console.log(error);
      dispatch(messageSlice.actions.messageFetchingError(error));
    }
  };
