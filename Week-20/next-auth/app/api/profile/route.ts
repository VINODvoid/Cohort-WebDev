import { NextRequest, NextResponse } from "next/server";


export function GET(req: NextRequest) {
    return NextResponse.json({
        avatarUrl:"https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Golden-Retriever.jpg?v=1645179525"
    });
}