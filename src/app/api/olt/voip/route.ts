import { NextRequest, NextResponse } from "next/server";



export async function POST(request: NextRequest) : Promise<NextResponse> {
    try {
        const {number,Id,Password} = await request.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching data' }, { status: 500 });
    }
}
export async function PUT(request: NextRequest) : Promise<NextResponse> {
    try {
        const {number,Id,Password} = await request.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching data' }, { status: 500 });
    }
}