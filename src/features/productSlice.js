import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BuilderStatusEnum } from "../enums/BuilderStatusEnum";

const initialState = {
    data: [],
    status: null
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        // fetchProducts(state, action){
        //     state.data = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state, action) =>{
            state.status = BuilderStatusEnum.LOADING
        })
        
        .addCase(getProducts.rejected, (state, action) =>{
            state.status = BuilderStatusEnum.REJECTED
        })
        
        .addCase(getProducts.fulfilled, (state, action) =>{
            state.data = action.payload
            state.status = BuilderStatusEnum.FULFILLED
        })
    }
})

export const {fetchProducts} = productSlice.actions
export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/get', async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    return await data.json()
})

// export function getProducts() {
//     return async function getProductsThunk(dispatch, getState){
//         const data = await fetch('https://fakestoreapi.com/products')
//         const result = await data.json()

//         dispatch(fetchProducts(result))
//     }    
// }