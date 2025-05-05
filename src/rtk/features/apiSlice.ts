
import { getCookie } from 'minimal-shared/utils';
// Import the RTK Query methods from the React-specific entry point
import { retry, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { baseurl } from '../api.constants';



// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  
    baseUrl: baseurl, //!::anti-pattern: no env file setup yet
    prepareHeaders: (headers, { getState }) => {
    const authSession = getCookie<{ access_token: string }>('auth')

      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = authSession?.access_token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);  
      }
      return headers;
    },
  });

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 });

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'api',
  baseQuery: baseQueryWithRetry,
  tagTypes: ["user", "auth", "orders", "store"],
  endpoints: () =>({})

})

// Export the auto-generated hook for the `getPosts` query endpoint
// export const { useGetPostsQuery } = apiSlice