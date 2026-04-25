import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    // Parse JSON body
    const body = await request.json();
    const { name, email, phone, company, domain, candidates, deliveryMode, location } = body;

    // Validate required fields
    if (!name || !email || !company) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and company are required' },
        { status: 400 }
      );
    }

    // Define path to leads.json
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'leads.json');

    // Ensure data directory exists
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing leads or create empty array
    let leads = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      leads = JSON.parse(fileContent);
    }

    // Create new lead with timestamp
    const newLead = {
      name,
      email,
      phone: phone || '',
      company,
      domain: domain || '',
      candidates: candidates || '',
      deliveryMode: deliveryMode || '',
      location: location || '',
      createdAt: new Date().toISOString(),
    };

    // Append new lead
    leads.push(newLead);

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), 'utf-8');

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
