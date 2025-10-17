import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { options } from '../auth/[...nextauth]/options';

// GET - Načtení aktivit pro konkrétního uživatele
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  try {
    const activities = await prisma.sportActivity.findMany({
      where: {
        userId: Number(userId),
      },
      include: {
        sport: true, // Přidáme informace o sportu
      },
      orderBy: {
        date: 'desc', // Seřadíme od nejnovějších
      },
    });
    return NextResponse.json(activities);
  } catch  {
    return NextResponse.json({ error: 'Failed to fetch activities' }, { status: 500 });
  }
}

// POST - Vytvoření nové aktivity
export async function POST(req: Request) {
  const session = await getServerSession(options);
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  try {
    const { sportId, duration, description, date, latitude, longitude } = await req.json();

    const currentUser = await prisma.user.findUnique({ where: { email: session.user.email } });
    if (currentUser?.id !== session?.user?.id) {
        console.log("Unauthorized access attempt by user:");
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }
    console.log({description});
    const newActivity = await prisma.sportActivity.create({
      data: {
        userId: currentUser!.id,
        sportId,
        date: new Date(date),
        duration,
        description,
        latitude,
        longitude,
      },
    });

    return NextResponse.json(newActivity, { status: 201 });
  } catch (error) {
    console.error('Failed to create activity:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}