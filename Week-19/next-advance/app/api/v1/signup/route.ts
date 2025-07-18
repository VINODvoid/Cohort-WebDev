import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";
import { emitWarning } from "process";
import 
export async function POST(req:NextRequest)
{
    const data = await req.json();
    await client.user.create({
        data:{
            email:data.email,
            password:data.password,
        }
    })
    return NextResponse.json({
        message:"you have signed up",
        data
    })
}

export async function GET(req:NextRequest)
{
    const user = await client.user.findFirst();
    return NextResponse.json({
        user
    })
}