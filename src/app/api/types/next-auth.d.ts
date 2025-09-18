import { DefaultSession } from "next-auth"

declare module "next-auth" {
    interface Session {
        user: {
            id: number
            bio?: string | null
            username?: string | null
        } & DefaultSession["user"]
    }

    interface User {
        id: number
        email: string
        username: string
        password: string
        bio?: string | null
        image?: string | null
    }
}