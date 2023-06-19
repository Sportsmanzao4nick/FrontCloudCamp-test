import {configureStore} from "@reduxjs/toolkit";
import personalPhone from "./personal-phone"
import personalName from "./personal-name";
import personalAdvantages from "./personal-advantages";

export const store = configureStore({
    reducer: {
        personalPhone: personalPhone,
        personalName: personalName,
        personalAdvantages: personalAdvantages,
    }
})