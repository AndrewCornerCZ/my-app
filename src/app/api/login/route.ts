import argon2 from 'argon2'
import { NextResponse } from "next/server";
import {prisma} from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email a heslo jsou povinné!" }, { status: 400 });
    }
    // Ověření, zda uživatel existuje
    const existingUser = await prisma.user.findFirst({ where: { email } });
    if (!existingUser) {
      return NextResponse.json({ error: "Uživatel neexistuje" }, { status: 400 });
    }

    // Porovnání hesla
    const isValidPassword = await argon2.verify(existingUser.password, password);
    if (!isValidPassword) {
      return NextResponse.json({ error: "Nesprávné heslo" }, { status: 400 });
    }

    // Přihlášení úspěšné
    return NextResponse.json({ message: "Uživatel úspěšně přihlášen!", user: existingUser }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ errormesage: "Interní chyba serveru!", error }, { status: 500 });
  }
}