import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import {prisma} from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { email, username, password } = await req.json()
    
    // Check if user exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { username }
        ]
      }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email or username already taken' },
        { status: 400 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword
      }
    })

    // Remove password from response
    const {...safeUser } = user

    return NextResponse.json({ user: safeUser }, { status: 201 })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}