import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    const response = await fetch("http://localhost:3000/api/headerResponse");

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