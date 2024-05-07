import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";


export const GetProdects = createAsyncThunk('GetProdects', async () =>{
    const data = await fetch('http://localhost:3000/Products')
    return data.json()
})



const ProdectSlice = createSlice({
    name: "ProdectSlice",
    initialState: {
        prodects: [],
        isLoading: false,
        error: false
    },
    extraReducers:(builder)=>{
        builder.addCase(GetProdects.pending,(state)=>{
            state.isLoading = true
        })
        builder.addCase(GetProdects.fulfilled,(state,action)=>{
            state.isLoading = false
            state.prodects = action.payload
        })
        builder.addCase(GetProdects.rejected,(state)=>{
            state.isLoading = false
            state.error = true
        })
    }
})

export default ProdectSlice.reducer ;