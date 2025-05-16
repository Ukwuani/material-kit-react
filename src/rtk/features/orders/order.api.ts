import API from "src/rtk/api.constants";

import { apiSlice } from "../apiSlice";

import type { Order } from "./order.dto";



export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
          getAllOrders: build.query<{data:  Order[] }, void>({
            query() {
              return {
                url: API.FETCH_ORDERS,
              }
            },
            providesTags: ["orders"]
          })
          
    })
})


export const { useGetAllOrdersQuery } = orderApiSlice;