import { configureStore, applyMiddleware } from "@reduxjs/toolkit/";
import createSagaMiddleware from "redux-saga";
import cartSlice from "./cartSlice";
import productsMainSlice from "./productsMainSlice";
import categoriesSlice from "./categoriesSlice";
import aboutProductSlice from "./aboutProductSlice";
import { RootSaga } from "./saga/saga";
import productsCategorySlice from "./productsCategorySlice";
import filtersSlice from "./filtersSlice";
import menuSlice from "./menuSlice";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer : {
        cart : cartSlice,
        categories : categoriesSlice,
        productsMain : productsMainSlice,
        aboutProduct: aboutProductSlice,
        productsCategory: productsCategorySlice,
        filters: filtersSlice,
        menu: menuSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
    sagaMiddleware.run(RootSaga);



