const API = {
    LOGIN: "/api/auth/login",
    SIGNUP: "/user/signup",
    FETCH_USERS: "/api/users/all",
    FETCH_ORDERS: "/api/orders/all",
    FETCH_PRODUCTS: "/api/products/all",
    FETCH_LOCKERS: "/api/lockers/all",

}



export interface QueryDto {
    query: any
  }


export const baseurl =  "https://pub-backend-monolith.65s99x2x1kax4.us-west-2.cs.amazonlightsail.com"
// console.log( process.env.NEXT_PUBLIC_SERVER_URL, baseurl, "url")


export const fetchURL = (url: string) => `http://localhost/api/v1${url}`

export default API;