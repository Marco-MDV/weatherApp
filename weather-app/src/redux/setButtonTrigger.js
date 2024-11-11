import { createSlice } from "@reduxjs/toolkit"
export const buttonTriggerSlice = createSlice({
    name: "buttonTriggerSearch",
    initialState: { value: false },
    reducers: {
        triggerSearch: state => {
            state.value = !state.value;
        }
    }
})

export const { triggerSearch } = buttonTriggerSlice.actions;
export default buttonTriggerSlice.reducer;