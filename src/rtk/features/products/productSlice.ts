import { createEntityAdapter } from '@reduxjs/toolkit'

import { createAppSlice } from '../../hooks'

import type { Product } from './product.dto'

// export const fetchUsers = createAppAsyncThunk('users/fetchUsers', async () => {
//   const response = await client.get<User[]>(API.FETCH_USERS)
//   return response.data
// })

const productAdapter = createEntityAdapter<Product>()

const initialState = productAdapter.getInitialState()


const usersSlice = createAppSlice({
  name: 'product',
  initialState,
  reducers: {},
  // extraReducers(builder) {
  //   builder.addCase(fetchUsers.fulfilled, usersAdapter.setAll)
  // },
})

export default usersSlice