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
export async function DELETE(request: NextRequest) : Promise<NextResponse> {
    try {
        const {number,Id,Password} = await request.json();
        const fd = await Firmware.findById({_id:Id})
        if(!fd) return NextResponse.json({ message: 'Data not found' }, { status: 404 });
    } catch (error : any) {
        return NextResponse.json({ message: 'Error fetching data' }, { status: 500 });
    }
}