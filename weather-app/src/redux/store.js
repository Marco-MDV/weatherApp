import { configureStore } from "@reduxjs/toolkit";
import triggerSearch from "./setButtonTrigger";

export const store = configureStore({
    reducer: {
        buttonTriggerSearch: triggerSearch,
    }
})