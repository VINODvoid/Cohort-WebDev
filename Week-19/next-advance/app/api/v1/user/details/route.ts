import { NextResponse } from "next/server";

export function GET()
{
    return NextResponse.json({
        name:"kalki",
        email:"kalki@gmail.com"
    })
}