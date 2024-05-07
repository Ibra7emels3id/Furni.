import { configureStore } from "@reduxjs/toolkit";
import ProdectSlice from '../Features/ProductsSlise'
import Cartslise from "../Features/Cartslise";

export const store = configureStore({
    reducer: {
        Products : ProdectSlice,
        Cart : Cartslise
    },
})