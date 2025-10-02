import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    const sports = await prisma.sport.findMany({
      orderBy: {
        name: 'asc',
      },
    });
    return NextResponse.json(sports);
  } catch (error) {
    console.error('Failed to fetch sports:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}