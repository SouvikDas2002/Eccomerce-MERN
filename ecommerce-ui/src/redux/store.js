import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cartRedux";

export default configureStore({
    reducer:{
        cart:CartReducer,
    }
})

