import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDialog } from "../types";

interface IState {
    dialogs: IDialog[];
    fetchingSuccess: boolean;
    error: string;
}

const initialState: IState = {
    dialogs: [],
    fetchingSuccess: false,
    error: "",
};

export const dialogSlice = createSlice({
    name:"dialog",
    initialState,
    reducers:{
        dialogFetchingSuccess(state: IState, action: PayloadAction<IDialog[]>){
            state.dialogs = action.payload;
            state.fetchingSuccess = true;
            state.error = "";
        },
        dialogFetchingError(state: IState, action: PayloadAction<string>){
            state.error = action.payload;
        }
    }
})

export default dialogSlice.reducer;