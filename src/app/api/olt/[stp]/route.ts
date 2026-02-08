import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest, { params }: { params: { stp: string } }): Promise<NextResponse> {
    try {
        const { stp } = params
        return NextResponse.json({ message: "Not implemented", stp }, { status: 501 })
    } catch (error: any) {
        return NextResponse.json({ message: error.message || "ERROR processing request" }, { status: 500 })
    }
}
export async function PUT(req: NextRequest, { params }: { params: { stp: string } }): Promise<NextResponse> {
    try {
        const { stp } = params
        const stpInDb :IFirmware | null | UFirmware = await Firmware.findByIdAndUpdate(stp)
        return NextResponse.json({ message: "Not implemented", stp }, { status: 501 })
    } catch (error: any) {
        return NextResponse.json({ message: error.message || "ERROR processing request" }, { status: 500 })
    }
}
export async function DELETE(req: NextRequest, { params }: { params: { stp: string } }): Promise<NextResponse> {
    try {
        const { stp } = params
        const stpInDb:IFirmware | null | UFirmware  = await Firmware.findByIdAndDelete(stp)

        return NextResponse.json({ message: "Stp Deleted Succesfully", stp }, { status: 501 })
    } catch (error: any) {
        return NextResponse.json({ message: error.message || "ERROR processing request" }, { status: 500 })
    }
}
export async function GET(req: NextRequest, { params }: { params: { stp: string } }): Promise<NextResponse> {
    try {
        const { stp } = params
        const stpInDb:IFirmware | null | UFirmware = await Firmware.findById(stp)
        if(!stdInDb) return NextResponse.json({message: "Stp Not Found"}, {status:404})

        return NextResponse.json({ message: "STP", stpInDb }, { status: 201 })
    } catch (error: any) {
        return NextResponse.json({ message: error.message || "ERROR processing request" }, { status: 500 })
    }
}