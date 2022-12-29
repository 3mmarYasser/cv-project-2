import {configureStore} from "@reduxjs/toolkit";
import fixedImageReducer from "./fixedImage.reducer";
const store = configureStore({
    reducer: {
        fixedImage:fixedImageReducer
    }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export default store;