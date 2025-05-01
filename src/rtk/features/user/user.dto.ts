
export interface User {
    id: string
    name: string
    username?: string
    email: string
    phone: string
    isEmailVerified: boolean
    avatarUrl: "/assets/images/avatar/avatar-2.webp"
    status?: string,
    role: string
    createdAt: string
    defaultLocation: any
  }
  