import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

import API from '../api.constants'
import { client } from '../api.response'
import {createAppAsyncThunk } from '../store'

import type { RootState } from '../store'

interface User {
  id: string
  name: string
  username?: string
  email: string
  phone: string
  isEmailVerified: boolean
  avatarUrl: "/assets/images/avatar/avatar-1.webp"
  status?: string,
  role: string
  createdAt: string
  defaultLocation: any
}

export const fetchUsers = createAppAsyncThunk('users/fetchUsers', async () => {
  const response = await client.get<User[]>(API.FETCH_USERS)
  return response.data
})

const usersAdapter = createEntityAdapter<User>()

const initialState = usersAdapter.getInitialState()


const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, usersAdapter.setAll)
  },
})

export default usersSlice.reducer

export const { selectAll: selectAllUsers, selectById: selectUserById } = usersAdapter.getSelectors(
  (state: RootState) => state.users,
)

// export const selectCurrentUser = (state: RootState) => {
//   const currentUsername = 
//   if (!currentUsername) {
//     return
//   }

//   return selectUserById(state, currentUsername)
// }
