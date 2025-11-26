import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from "bcryptjs";
import {User} from "next-auth"
import {prisma} from "@/lib/db";

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                id: { label: "Id", type: "number" },
                email: { label: "Email", type: "email" },
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
                bio: { label: "Bio", type: "text" },
                image: { label: "Image", type: "image" }
            },
            async authorize(credentials): Promise<User | null> {
                
                if (!credentials) {
                    throw new Error("Credentials not provided");
                }


                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                });

                if (!user) {
                    throw new Error("No user found");
                }

                const isValid = await bcrypt.compare(credentials.password, user.password);
                if (isValid) {
                    return {  id: user.id, email: user.email, name: user.username, bio: user.bio, username: user.username, password: user.password, image: user.image }; // Include all required properties
                } else {
                    throw new Error("Invalid password");
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user, account }) {
            if (account && user) {
                token.id = user.id
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as number
                // načteme aktuální bio (a případně další pole) z DB podle id
                const dbUser = await prisma.user.findUnique({
                  where: { id: Number(token.id) },
                  select: { bio: true, username: true, image: true, email: true },
                })
                session.user.bio = dbUser?.bio ?? null
                // volitelné: synchronizovat jméno/obrázek pokud chcete
                session.user.name = dbUser?.username ?? session.user.name
                session.user.email = dbUser?.email ?? session.user.email
                session.user.image = dbUser?.image ?? session.user.image
            }
            return session
        }
    },
    pages: {
        signIn: '/auth/signin',
        error: '/auth/error',
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    secret: process.env.NEXTAUTH_SECRET,
}