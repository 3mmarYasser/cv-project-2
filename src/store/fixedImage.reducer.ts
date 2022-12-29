import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const fixedImageReducer = createSlice({
    name:"fixedImage",
    initialState:{
        image:""as string,
        show:false as boolean
    },
    reducers:{
        open:(state,action:PayloadAction<string>) => {
            state.show = true
            state.image = action.payload
        },
        close:(state)=>{
            state.show = false
        }
    }
})
export const {open,close} = fixedImageReducer.actions
export default fixedImageReducer.reducer;