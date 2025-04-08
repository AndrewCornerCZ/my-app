import NextAuth from 'next-auth'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                id: { label: "ID", type: "number" },
                email: { label: "Email", type: "email" },
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                
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
                    return { email: user.email, name: user.username, id: user.id.toString() }; // Convert id to string
                } else {
                    throw new Error("Invalid password");
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
export default authOptions;