import { createSlice } from "@reduxjs/toolkit";

export interface Token {
    tokenVal?: {
        tokenV: string|null;
    }
}

const initialState: Token = {
    tokenVal: null
}

const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: { 
        addToken(state, action) {
            console.log('adding token object  ', action.payload)
            return action.payload;
        },
        deleteToken() {
            return initialState;
        },
        updateToken(state, action){
            state.tokenVal = action.payload.tokenVal
        },
    },
});

export const { addToken, deleteToken, updateToken } = tokenSlice.actions
export default tokenSlice.reducer