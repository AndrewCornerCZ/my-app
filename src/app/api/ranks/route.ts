import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
      const ranks = await prisma.sportRanks.findMany({
        select: {
          id: true,
          name: true,
          description: true  // Přidej tohle
        }
      });
    return NextResponse.json(ranks);
  } catch (error) {
    console.error('Failed to fetch ranks:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}