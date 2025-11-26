import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: number
      name?: string | null
      email?: string | null
      image?: string | null
      bio?: string | null
    }
  }
  interface User {
    id: number
    bio?: string | null
  }
}
export {}