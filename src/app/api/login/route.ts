import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../prisma/generated/prisma/client";

const prisma = new PrismaClient();
export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email a heslo jsou povinné!" }, { status: 400 });
    }
    console.log("Email:", email);
    // Ověření, zda uživatel existuje
    const existingUser = await prisma.user.findFirst({ where: { email } });
    if (!existingUser) {
      return NextResponse.json({ error: "Uživatel neexistuje" }, { status: 400 });
    }

    // Porovnání hesla
    const isValidPassword = await bcrypt.compare(password, existingUser.password);
    if (!isValidPassword) {
      return NextResponse.json({ error: "Nesprávné heslo" }, { status: 400 });
    }

    // Přihlášení úspěšné
    return NextResponse.json({ message: "Uživatel úspěšně přihlášen!", user: existingUser }, { status: 200 });
  } catch (error) {
    console.log("Chyba při přihlášení:", error);
    return NextResponse.json({ error: "Interní chyba serveru!" }, { status: 500 });
  }
}