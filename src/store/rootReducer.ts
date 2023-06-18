import {configureStore} from "@reduxjs/toolkit";
import personalPhone from "./personal-phone"
import personalName from "./personal-name";

export const store = configureStore({
    reducer: {
        personalPhone: personalPhone,
        personalName: personalName,
    }
})