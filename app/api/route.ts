import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    const url = process.env.VERCEL_URL ? "https://$VERCEL_URL" : "http://localhost:3000";

    const response = await fetch(`${url}/api/headerResponse`);

    let correctCookie = '';

    response.headers.forEach((value, key) => {
      if (key === 'set-cookie') {
        console.log(`cookie log: ${value}`);
        correctCookie = value;
      }
    });
  
    if (!correctCookie) {
      throw new Error('Cookies not found');
    }
  
    console.log(`correct cookie ${correctCookie}`);
    
    const newResp = new NextResponse();

    return newResp;
}