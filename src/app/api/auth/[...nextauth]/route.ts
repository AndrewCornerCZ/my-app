import NextAuth from 'next-auth'
import { NextAuthOptions } from 'next-auth'
import {options} from './options'
import { PrismaClient } from "@prisma/client";



const handler = NextAuth(options)

export { handler as GET, handler as POST }