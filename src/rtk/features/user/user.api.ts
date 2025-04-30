import API from "src/rtk/api.constants";
import { apiSlice } from "../apiSlice";
import { User } from "./user.dto";



export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<any, Partial<User>>({
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
            invalidatesTags: ['user'],
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