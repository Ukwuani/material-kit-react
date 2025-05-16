import API from "src/rtk/api.constants";

import { apiSlice } from "../apiSlice";

import type { Product } from "./product.dto";



export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
          getAllProducts: build.query<{data:  Product[] }, void>({
            query() {
              return {
                url: API.FETCH_PRODUCTS,
              }
            },
            providesTags: ["user"]
          })
          
    })
})


export const { useGetAllProductsQuery } = userApiSlice;