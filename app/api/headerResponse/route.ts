import { NextResponse } from "next/server";

export async function GET(request: Request) {
    // const myHeaderArray: [string, string][] = [['set-cookie', "refresh_token=xxxxx; Path=/; Expires=Tue, 08 Aug 2023 11:47:41 GMT; Max-Age=1800; HttpOnly; SameSite=lax"], ['set-cookie', "refresh_token=xxxxx; Path=/; Expires=Tue, 08 Aug 2023 11:47:41 GMT; Max-Age=1800; HttpOnly; SameSite=lax"]];
    
    const newResp = new NextResponse();

    // console.log(myHeaderArray)

    newResp.cookies.set('refresh_token', "xxxxx", {
        httpOnly: false,
        path: '/',
        sameSite: 'lax',
        expires: new Date(),
        maxAge: 1800,
    });

    newResp.cookies.set('restricted_refresh_token', "xxxxx", {
        httpOnly: false,
        path: '/',
        sameSite: 'lax',
        expires: new Date(),
        maxAge: 1800,
    });

    return newResp;
}