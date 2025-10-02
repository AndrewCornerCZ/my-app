import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { options } from '../auth/[...nextauth]/options';

export async function POST(req: Request) {
  const session = await getServerSession(options);
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  try {
    // Získáme všechna potřebná data z těla požadavku
    const { userId, sportId, sportRankId, startedAt } = await req.json();

    const currentUser = await prisma.user.findUnique({ where: { email: session.user.email } });
    if (currentUser?.id !== userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const existingUserSport = await prisma.userSport.findUnique({
      where: {
        userId_sportId: {
          userId,
          sportId,
        },
      },
    });

    if (existingUserSport) {
      return NextResponse.json({ error: 'User already has this sport' }, { status: 409 });
    }

    // Vytvoříme nový záznam s daty z frontendu
    const newUserSport = await prisma.userSport.create({
      data: {
        userId,
        sportId,
        sportRankId, // Použijeme vybraný rank
        startedAt: new Date(startedAt), // Použijeme vybrané datum
      },
    });

    return NextResponse.json(newUserSport, { status: 201 });
  } catch (error) {
    console.error('Failed to add sport:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}