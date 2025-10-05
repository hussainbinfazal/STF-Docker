
import { NextResponse } from "next/server";


export async function GET(req:NextResponse) {
    connectDB()
    const Firmware = await Firmware.find()
    if(!Firmware) {
        return NextResponse.json({message: "No Firmware found"}, {status: 404})
    }
    return NextResponse.json({Firmware}, {status: 200})
}

export async function PUT(req:NextResponse) {
    connectDB()
    const Firmware = await Firmware.find()
    
    if(!Firmware) {
        return NextResponse.json({message: "No Firmware found"}, {status: 404})
    }
    return NextResponse.json({Firmware}, {status: 200})
}