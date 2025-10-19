import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest, { params }: { params: { stp: string } }): Promise<NextResponse> {
    try {
        const { stp } = params
        return NextResponse.json({ message: "Not implemented", stp }, { status: 501 })
    } catch (error: any) {
        return NextResponse.json({ message: error.message || "ERROR processing request" }, { status: 500 })
    }
}