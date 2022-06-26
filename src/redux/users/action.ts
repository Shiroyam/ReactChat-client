import { AppDispatch } from "..";
import { IUser } from "../types";
import axios from "axios";
import { usersSlice } from "./usersReducer";


export const usersFetching = () => async (dispatch: AppDispatch) => {
    try {
       const response = await axios.get<IUser[]>("http://localhost:3005/user") 
       dispatch(usersSlice.actions.usersFetchingSuccess(response.data))
    } catch (error : any) {
        console.log(error);
        dispatch(usersSlice.actions.usersFetchingError(error))
    }
}