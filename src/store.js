import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import imageReducer from "./slices/imagesSlice";

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        images: imageReducer,
        devTools: true,
    }
});

