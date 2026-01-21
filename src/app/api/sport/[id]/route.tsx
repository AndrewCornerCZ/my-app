import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params
    const sportid = Number(params?.id)
    const sport = await prisma.sport.findFirst({
        where: { id: sportid }
    });
    return NextResponse.json(sport?.name);
  } catch (error) {
    console.error('Failed to fetch sports:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}