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
      where: { userId: Number(userId) },
      include: { sport: true },
      orderBy: { date: 'desc' },
    });

    // normalize shape expected by ActivityWithSport
    const serialized = activities.map((a) => ({
      id: a.id,
      userId: a.userId,
      sportId: a.sportId,
      starttime: a.starttime,
      endtime: a.endtime,
      description: a.description,
      // convert Date -> string (if client expects string)
      date: a.date instanceof Date ? a.date.toISOString() : String(a.date),
      // remap latitude/longitude -> lat/lng
      lat: a.latitude ?? null,
      lng: a.longitude ?? null,
      sport: a.sport,
    }));

    return NextResponse.json(serialized);
  } catch {
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
    const { sportId, starttime, endtime, description, date, latitude, longitude, publicity } = await req.json();
    const currentUser = await prisma.user.findUnique({ where: { email: session.user.email } });
    if (currentUser?.id !== session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }
    const newActivity = await prisma.sportActivity.create({
      data: {
        userId: currentUser!.id,
        sportId,
        date: new Date(date),
        starttime,
        endtime,
        description,
        latitude,
        longitude,
        publicity
      },
    });
    

    const activityOwner = await prisma.sportActivityParticipant.create({
      data: {
        activityId: newActivity.id,
        userId: currentUser!.id,
        role: 'owner'
      }
    });

    return NextResponse.json({ newActivity, activityOwner }, { status: 201 });
  } catch (error) {
    console.error('Failed to create activity:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}