import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMessage } from "../types";

interface IState {
    messages: IMessage[];
    fetchingSuccess: boolean;
    error: string;
}

const initialState: IState = {
    messages: [],
    fetchingSuccess: false,
    error: "",
};

export const messageSlice = createSlice({
    name:"message",
    initialState,
    reducers:{
        messageFetchingSuccess(state: IState, action: PayloadAction<IMessage[]>){
            state.messages = action.payload;
            state.fetchingSuccess = true;
            state.error = "";
        },
        messageFetchingError(state: IState, action: PayloadAction<string>){
            state.error = action.payload;
        }
    }
})

export default messageSlice.reducer;