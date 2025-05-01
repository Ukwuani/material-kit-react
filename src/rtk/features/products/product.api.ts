import API from "src/rtk/api.constants";

import { apiSlice } from "../apiSlice";

import type { Product } from "./product.dto";



export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<any, Partial<Product>>({
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
          getAllProducts: build.query<{data:  Product[] }, void>({
            query() {
              return {
                url: API.FETCH_PRODUCTS,
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


export const { useLoginMutation, useGetAllProductsQuery } = userApiSlice;