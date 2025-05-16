import { createEntityAdapter } from '@reduxjs/toolkit'

import { createAppSlice } from '../../hooks'

import type { Product } from './product.dto'

const productAdapter = createEntityAdapter<Product>()

const initialState = productAdapter.getInitialState()


const usersSlice = createAppSlice({
  name: 'product',
  initialState,
  reducers: {}
})

export default usersSlice