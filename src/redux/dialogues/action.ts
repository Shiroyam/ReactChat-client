import { AppDispatch } from "..";
import { dialogSlice } from "./dialogReducer";
import { IDialog } from "../types";
import axios from "axios";

export const dialogFetching = (id: string | null) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get<IDialog[]>(
      `http://localhost:3005/dialog/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    dispatch(dialogSlice.actions.dialogFetchingSuccess(response.data));
  } catch (error: any) {
    console.log(error);
    dispatch(dialogSlice.actions.dialogFetchingError(error));
  }
};
