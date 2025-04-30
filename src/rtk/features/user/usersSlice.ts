import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

import API from '../../api.constants'
import { client } from '../../api.response'
import { createAppSlice } from '../../hooks'

import type { RootState } from '../../store'
import { User } from './user.dto'

// export const fetchUsers = createAppAsyncThunk('users/fetchUsers', async () => {
//   const response = await client.get<User[]>(API.FETCH_USERS)
//   return response.data
// })

const usersAdapter = createEntityAdapter<User>()

const initialState = usersAdapter.getInitialState()


const usersSlice = createAppSlice({
  name: 'users',
  initialState,
  reducers: {},
  // extraReducers(builder) {
  //   builder.addCase(fetchUsers.fulfilled, usersAdapter.setAll)
  // },
})

export default usersSlice

// export const { selectAll: selectAllUsers, selectById: selectUserById } = usersAdapter.getSelectors(
//   (state: RootState) => state.users,
// )

// export const selectCurrentUser = (state: RootState) => {
//   const currentUsername = 
//   if (!currentUsername) {
//     return
//   }

//   return selectUserById(state, currentUsername)
// }
