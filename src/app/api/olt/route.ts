import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    connectDB()
    const firmware = await FirmwareModel.find()
    if(!firmware) {
        return NextResponse.json({message: "No Firmware found"}, {status: 404})
    }
    return NextResponse.json({firmware}, {status: 200})
}
export async function POST(req: NextRequest, { params }: { params: { OLTID: string } }) {
    // connectDB()
    const { OLTID } = params
    const firmwareFile = await req.json()
    const firmware : IFirmware | null = await Firmware.findById(OLTID)
    firmware.firmwareFile = firmwareFile
    if(!firmware) {
        return NextResponse.json({message: "No Firmware found"}, {status: 404})
    }
    
    return NextResponse.json({OLTID, firmwareFile}, {status: 200})
}


export async function PUT(req: NextRequest, { params }: { params: { OLTID: string } }) {
    // connectDB()
    const { OLTID } = params
    const firmwareFile = await req.json()
    const firmware : Ifirmware | null = await Firmware.findById(OLTID)
    firmware.firmwareFile = firmwareFile
    if(!firmware) {
        return NextResponse.json({message: "No Firmware found"}, {status: 404})
    }
    
    return NextResponse.json({OLTID, firmwareFile}, {status: 200})
}

export async function DELETE(req: NextRequest, { params }: { params: { OLTID: string }}) {
    connectDB()
    const { OLTID } = params
    const firmware: Ifirmware | null  = await Firmware.findByIdAndDelete(OLTID)
    if(!firmware) {
        return NextResponse.json({message: "No Firmware found"}, {status: 404})
    }
    return NextResponse.json({OLTID}, {status: 200})
export async function POST(req: NextRequest, { params }: { params: { OLTID: string }}) {
    connectDB()
    try {
        const { OLTID } = params
        const firmware:IFirmware | null  = await Firmware.findByIdAndDelete(OLTID)
        if(!firmware) {
            return NextResponse.json({message: "No Firmware found"}, {status: 404})
        }
    return NextResponse.json({OLTID}, {status: 200})
    } catch (error: any) {
        return NextResponse.json({message: error.message || "ERROR creating firmware"}, {status: 500})
    }
}