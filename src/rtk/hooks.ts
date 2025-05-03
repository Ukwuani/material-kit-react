// This file serves as a central hub for re-exporting pre-typed Redux hooks.
import { useDispatch, useSelector } from "react-redux"
import { buildCreateSlice, asyncThunkCreator } from "@reduxjs/toolkit";

import type { RootState, AppDispatch } from "./store"

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()



// export const createAppAsyncThunk = createAsyncThunk.withTypes<{
//     state: RootState
//     dispatch: AppDispatch
//   }>()
  

  

// `buildCreateSlice` allows us to create a slice with async thunks.
export const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

