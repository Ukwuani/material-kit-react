import type { Action, ThunkAction } from "@reduxjs/toolkit"

import { combineSlices, configureStore, createAsyncThunk } from "@reduxjs/toolkit"

import { apiSlice } from './features/apiSlice'
import userSlice from "./features/user/usersSlice"

const rootReducer = combineSlices( apiSlice, userSlice);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware as any);
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
