import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    const ranks = await prisma.sportRanks.findMany({
      orderBy: {
        id: 'asc', // Seřadíme podle ID, aby byly úrovně ve správném pořadí
      },
    });
    return NextResponse.json(ranks);
  } catch (error) {
    console.error('Failed to fetch ranks:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}