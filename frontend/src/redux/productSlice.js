import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  loading: false,
  items: [],
  error: '',
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch", () => {
    return axios
      .get('/api/products')
      .then((response) => response.data) 
  }
)

export const productsByIDFetch = createAsyncThunk(
  "products/productsByIDFetch", (id) => {
    return axios
      .get(`/api/products/${id}`)
      .then((response) => response.data) 
  }
)

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(productsFetch.pending, (state) => {
      state.loading = true
    })
    builder.addCase(productsFetch.fulfilled, (state, action) => {
      state.loading = false
      state.items = action.payload
      state.error = " "
    })
    builder.addCase(productsFetch.rejected, (state, action) => {
      state.loading = false
      state.items = []
      state.error = action.error.message
    })

    builder.addCase(productsByIDFetch.pending, (state) => {
      state.loading = true
    })
    builder.addCase(productsByIDFetch.fulfilled, (state, action) => {
      state.loading = false
      state.items = action.payload
      state.error = " "
    })
    builder.addCase(productsByIDFetch.rejected, (state, action) => {
      state.loading = false
      state.items = []
      state.error = action.error.message
    })
  },
});



export default productSlice.reducer


