import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import {User} from "next-auth"

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }
            },
            
            async authorize(credentials): Promise<User | null> {
                const user = { id: 0, name: "", password: "", email: "" };

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                    }
                } else {
                    return null
                }
                
            }
        })
        
    ],
}