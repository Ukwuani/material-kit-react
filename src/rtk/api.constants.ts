const API = {
    LOGIN: "/user/loginOrSignup",
    SIGNUP: "/user/signup",
    FETCH_USERS: "/api/users/all",
    CHAT_CONVERSATIONS: "/chat/conversations",
    CHAT_MESSAGES: (conversationId: string) => `/chat/${conversationId}/messages`,
    CHAT_REACTION: (messageId: string) => `/chat/message/${messageId}/react`,
}



export const baseurl =  "https://pub-backend-monolith.65s99x2x1kax4.us-west-2.cs.amazonlightsail.com"
// console.log( process.env.NEXT_PUBLIC_SERVER_URL, baseurl, "url")


export const fetchURL = (url: string) => `http://localhost/api/v1${url}`

export default API;