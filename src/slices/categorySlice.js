import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    category:[]
}
export const getCategory = createAsyncThunk(
    'category/getCategory',
    async (thunkAPI) => {
        let res =await axios.get("https://api.thecatapi.com/v1/categories")
        if (res ) {
            console.log("redux res", res)
            return {
                code: 200,
                payload: res
            }
        } else {
            return {
                code: 400,
            }
        }

    })
export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
    },
    extraReducers: {
        [getCategory.pending]: (state) => {
            state.loading = true
        },
        [getCategory.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.category = payload
        },
        [getCategory.rejected]: (state) => {
            state.loading = false
        },
    },
})

export default categorySlice.reducer;