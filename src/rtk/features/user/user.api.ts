import API, { QueryDto } from "src/rtk/api.constants";

import { apiSlice } from "../apiSlice";

import type { LoginRequest, LoginResponse, User } from "./user.dto";



export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<{data: Partial<LoginResponse>}, LoginRequest>({
            query(body) {
              return {
                url: API.LOGIN,
                method: 'POST',
                body,
              }
            },
            extraOptions: {
              maxRetries: 1,
            },
            // invalidatesTags: ['auth'],
          }),
          getAllUsers: build.query<{data:  User[] }, void>({
            query() {
              return {
                url: API.FETCH_USERS,
              }
            },
            providesTags: ["user"]
          }),
          // getMessages: build.query<{ data: IConversation }, string>({
          //   query(conversationId) {
          //     return {
          //       url: API.CHAT_MESSAGES(conversationId),
          //     }
          //   },
          //   providesTags: ["message"]
          // }),
          
    })
})


export const { useLoginMutation, useGetAllUsersQuery, useLazyGetAllUsersQuery } = userApiSlice;