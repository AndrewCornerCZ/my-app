import { NextResponse } from 'next/server'
import argon2 from 'argon2'
import {prisma} from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { email, username, password } = await req.json()
    
    // Validace vstupů
    if (!email || !username || !password) {
      return NextResponse.json(
        { error: 'Email, username a heslo jsou povinné' },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Heslo musí mít alespoň 6 znaků' },
        { status: 400 }
      )
    }

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
        { error: 'Email nebo username je již zaregistrován' },
        { status: 400 }
      )
    }

    const hashedPassword = await argon2.hash(password)

    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword
      }
    })

    // Vrátíme jen bezpečné údaje
    return NextResponse.json(
      { 
        message: 'Uživatel úspěšně registrován!',
        user: { 
          id: user.id, 
          email: user.email, 
          username: user.username 
        } 
      }, 
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Interní chyba serveru' },
      { status: 500 }
    )
  }
}