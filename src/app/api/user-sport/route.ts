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
    const { userId, sportId, sportRankId, startedAt } = await req.json();
    const currentUser = await prisma.user.findUnique({ where: { email: session.user.email } });
    if (currentUser?.id !== userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const updatedUserSport = await prisma.userSport.update({
      where: { userId_sportId: { userId, sportId } },
      data: { sportRankId, startedAt: new Date(startedAt) },
    });

    return NextResponse.json(updatedUserSport);
  } catch (error) {
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
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete sport' }, { status: 500 });
  }
}