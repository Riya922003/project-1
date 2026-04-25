import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, domain, candidates, deliveryMode, location } = body;

    if (!name || !email || !company) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and company are required' },
        { status: 400 }
      );
    }

    await sql`
      INSERT INTO leads (name, email, phone, company, domain, candidates, delivery_mode, location)
      VALUES (${name}, ${email}, ${phone || ''}, ${company}, ${domain || ''}, ${candidates || ''}, ${deliveryMode || ''}, ${location || ''})
    `;

    return NextResponse.json(
      { success: true, message: 'Lead captured' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}