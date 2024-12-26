export const dynamic = 'force-dynamic';

import { google } from 'googleapis';

export async function GET() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const spreadsheetId = process.env.SPREADSHEET_ID;
  const range = process.env.SPREADSHEET_NAME_BLOGS;

  try {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    // Get the data
    const data = res?.data?.values;
   
    

    // If data exists and has more than one row (header + data)
    if (data && data.length > 1) {
      // Remove the header row for sorting
      const header = data[0];
      const rows = data.slice(1);

      // Sort the data in descending order by the "news_id" column (index 0)
      const sortedData = rows.sort((a, b) => {
        const newsIdA = parseInt(a[0], 10); // Assuming news_id is in column 0
        const newsIdB = parseInt(b[0], 10);
        return newsIdB - newsIdA; // Descending order
      });

      // Reattach the header row to the sorted data
      const sortedDataWithHeader = [header, ...sortedData];

      return new Response(JSON.stringify(sortedDataWithHeader), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, max-age=0',
        },
      });
    } else {
      return new Response(JSON.stringify({ error: 'No data available' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, max-age=0',
        },
      });
    }
  } catch (err) {
    console.error('Error fetching data:', err);
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  }
}