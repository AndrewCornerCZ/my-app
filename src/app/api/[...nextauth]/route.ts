import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions } from "next-auth";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials) {
                    throw new Error("Credentials not provided");
                }
                const user = await prisma.user.findUnique({
                    where: { email: credentials?.username ?? "" },
                });
                if (!user) {
                    throw new Error("No user found");
                }
                const isValid = await bcrypt.compare(credentials.password, user.password);
                if (isValid) {
                    return { email: user.email, name: user.username, id: user.id };
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
    callbacks: {
        async session({ session }: { session: any }) {
            if (!session.user) {
                return session;
            }

            const dbUser = await prisma.user.findUnique({
                where: { email: session.user.email ?? "" },
            });

            if (dbUser) {
                session.user.id = dbUser.id;
            }

            return session;
        },
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
};

export async function POST(req: Request) {
    try {
      const { username, email, password } = await req.json();
  
      if (!email || !password || !username) {
        return NextResponse.json({ error: "Email, username a heslo jsou povinné!" }, { status: 400 });
      }
  
      // Ověření, zda uživatel existuje
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        return NextResponse.json({ error: "Uživatel již existuje!" }, { status: 400 });
      }
  
      // Hash hesla a uložení uživatele do databáze
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
        },
      });
  
      return NextResponse.json({ message: "Uživatel úspěšně vytvořen!", user: newUser }, { status: 201 });
    } catch (error) {
      console.error("Chyba při registraci:", error);
      return NextResponse.json({ error: "Interní chyba serveru!" }, { status: 500 });
    }
  }

declare module "next-auth" {
    interface User {
      id: number;
    }
  
    interface Session {
      user?: User;
    }
  }

export default authOptions;