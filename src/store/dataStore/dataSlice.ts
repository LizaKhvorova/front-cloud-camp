import React from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IDataState} from "./types";

const initialState: IDataState = {
    data: null,
    sex: "Не выбрано",
    loading: false,
    error: null,
    advantages: [{id: 0, value: ""}, {id: 1, value: ""}, {id: 2, value: ""}]
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
            // console.log(action.payload);
            // console.log(state);
            // state.sex = action.payload;
            // if(action.payload == "woman") {
            //     state.sex = "woman"
            // } else if (action.payload = "man") {
            //     state.sex = "man"
            // }
        },
       
        addAdvantage(state, action) {
            state.advantages?.push({id: state.advantages.length + 1, value: ""})
        },
         // TODO
        deleteAdvantage(state, action) {
            state.advantages.filter(item => item.id !== action.payload);
        },
         // TODO
        addValueToAdvantange(state,action) {
            console.log(action.payload);
            for(let i = 0; i <= state.advantages.length; i++) {
                state.advantages[i] = ({id: i, value: action.payload})
            }
        }
    }
});

export const {addProfileData, addSex, addAdvantage, deleteAdvantage, addValueToAdvantange} = userDataSlice.actions;

export default userDataSlice.reducer;