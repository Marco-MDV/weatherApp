import { configureStore } from "@reduxjs/toolkit";
import triggerSearch from "./sliceSetButtonTrigger";
import inputSearchReducer from "./sliceInputSarch";

export const store = configureStore({
    reducer: {
        buttonTriggerSearch: triggerSearch,
        inputSearch: inputSearchReducer,
    }
})