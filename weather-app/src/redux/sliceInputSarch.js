import { createSlice } from "@reduxjs/toolkit";
export const inputSearchSlice = createSlice({
    name: 'inputSearch',
    initialState: {value:''},
    reducers:{
        setText: (state, action)=>{
            state.value = action.payload;
        }
    }
})

export const { setText } = inputSearchSlice.actions;
export default inputSearchSlice.reducer;