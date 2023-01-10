import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    images:[],
}
export const getImages = createAsyncThunk(
    'images/getImages',
    async (id,thunkAPI) => {
        let res =await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${id}`)
        if (res ) {
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
export const imagesSlice = createSlice({
    name: "images",
    initialState,
    reducers: {

    },
    extraReducers: {
        [getImages.pending]: (state) => {
            state.loading = true
        },
        [getImages.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.category = payload

        },
        [getImages.rejected]: (state) => {
            state.loading = false
        },
    },
})
export default imagesSlice.reducer;