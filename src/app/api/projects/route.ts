import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    try {
        const projects = await prisma.project.findMany({
            where: type ? { type } : {},
            orderBy: { createdAt: 'desc' },
        });

        return NextResponse.json(projects);
    } catch (error) {
        console.error('Failed to fetch projects:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
