import { NextRequest } from "next/server"

export async function POST(req: NextRequest, { params }: { params: { OLTID: string }}) {
    connectDB()
    try {
        const { OLTID } = params
        const firmware = await Firmware.findByIdAndDelete(OLTID)
        if(!firmware) {
            return NextResponse.json({message: "No Firmware found"}, {status: 404})
        }
    return NextResponse.json({OLTID}, {status: 200})
    } catch (error: any) {
        return NextResponse.json({message: error.message || "ERROR creating firmware"}, {status: 500})
    }
}
export async function PUT(req: NextRequest, { params }: { params: { OLTID: string }}) {
    connectDB()
    try {
        const { OLTID } = params
        const firmware = await Firmware.findById(OLTID)
        if(!firmware) {
            return NextResponse.json({message: "No Firmware found"}, {status: 404})
        }
    return NextResponse.json({OLTID}, {status: 200})
    } catch (error: any) {
        return NextResponse.json({message: error.message || "ERROR creating firmware"}, {status: 500})
    }
}