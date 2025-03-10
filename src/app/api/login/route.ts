import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const prisma = new PrismaClient();
  try {
    const { username, email, password } = await req.json();
  
    if (!email || !password ) {
      return NextResponse.json({ error: "Email a heslo jsou povinné!" }, { status: 400 });
    }

    // Ověření, zda uživatel existuje
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (!existingUser) {
      return NextResponse.json({ error: "Uživatel neexistuje" }, { status: 400 });
    }

    // Hash hesla a uložení uživatele do databáze
    const hashedPassword = await bcrypt.hash(password, 10);
    if (existingUser.password = hashedPassword){
        return NextResponse.json({ message: "Uživatel úspěšně přihlášen!", user: existingUser }, { status: 201 });
    }
    
  } catch (error) {
    console.log("Chyba při přihlášení:");
    console.log(JSON.stringify(error));
    return NextResponse.json({ error: "Interní chyba serveru!" }, { status: 500 });
  }
}