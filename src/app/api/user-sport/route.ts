import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { options } from '../auth/[...nextauth]/options';

// Funkce pro aktualizaci (PATCH)
export async function PATCH(req: Request) {
  const session = await getServerSession(options);
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  try {
    // Přidáme 'color' do destrukturace
    const { userId, sportId, sportRankId, startedAt, color } = await req.json();
    const currentUser = await prisma.user.findUnique({ where: { email: session.user.email } });
    if (currentUser?.id !== userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }
    console.log({ userId, sportId, sportRankId, startedAt, color }); // Pro ladění
    const updatedUserSport = await prisma.userSport.update({
      where: { userId_sportId: { userId, sportId } },
      // Změňte tento 'data' objekt
      data: { 
        sportrank: {         // Použijte název vztahu (relation field)
          connect: {
            id: sportRankId  // Připojte se k ranku pomocí jeho ID
          }
        },
        startedAt: new Date(startedAt),
        color: color,
      },
    });

    return NextResponse.json(updatedUserSport);
  } catch (error) {
    // PŘIDÁNO: Logování konkrétní chyby do konzole serveru
    console.error("Error updating user sport:", error); 
    console.log(error); 
    return NextResponse.json({ error: 'Failed to update sport' }, { status: 500 });
  }
}

// Funkce pro smazání (DELETE)
export async function DELETE(req: Request) {
  const session = await getServerSession(options);
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  try {
    const { userId, sportId } = await req.json();
    const currentUser = await prisma.user.findUnique({ where: { email: session.user.email } });
    if (currentUser?.id !== userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    await prisma.userSport.delete({
      where: { userId_sportId: { userId, sportId } },
    });

    return NextResponse.json({ message: 'Sport deleted successfully' }, { status: 200 });
  } catch  {
    return NextResponse.json({ error: 'Failed to delete sport' }, { status: 500 });
  }
}