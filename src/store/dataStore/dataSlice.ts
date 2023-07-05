import React from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IDataState} from "./types";

const initialState: IDataState = {
    data: null,
    sex: "Не выбрано",
    loading: false,
    error: null
} 

const userDataSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        addProfileData(state, action: PayloadAction<any>) {
            state.data = ({
                ...state.data,
                ...action.payload
            })
        }, 
        addSex(state, action) {
            console.log(action.payload);
            console.log(state);
            state.sex = action.payload;
            // if(action.payload == "woman") {
            //     state.sex = "woman"
            // } else if (action.payload = "man") {
            //     state.sex = "man"
            // }
        }
    }
});

export const {addProfileData, addSex} = userDataSlice.actions;

export default userDataSlice.reducer;