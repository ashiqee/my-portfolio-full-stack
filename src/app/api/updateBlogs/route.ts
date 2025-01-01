export const dynamic = 'force-dynamic';

import { google } from 'googleapis';

export async function POST(req: Request) {
  const { range, values } = await req.json();

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const spreadsheetId = process.env.SPREADSHEET_ID;

  try {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      requestBody: { values },
    });

    return new Response(JSON.stringify({ message: 'Sheet updated successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Error updating sheet:', err);
    return new Response(JSON.stringify({ error: 'Failed to update sheet' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
