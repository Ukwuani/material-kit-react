import type { Action, ThunkAction } from "@reduxjs/toolkit"

import { configureStore, createAsyncThunk } from "@reduxjs/toolkit"

import { apiSlice } from './features/apiSlice'
import userReducer from "./features/usersSlice"


export const store = configureStore({
  reducer: {
    users: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
})

// Infer the type of `store`
export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch
// Same for the `RootState` type
export type RootState = ReturnType<typeof store.getState>
// Export a reusable type for handwritten thunks
export type AppThunk = ThunkAction<void, RootState, unknown, Action>




export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState
  dispatch: AppDispatch
}>()
