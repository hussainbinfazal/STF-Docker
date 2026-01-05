import { NextRequest } from "next/server"

export async function POST(req: NextRequest, { params }: { params: { OLTID: string } }) {
    connectDB()
    try {
        const { OLTID } = params
        let firmware = await Firmware.findById(OLTID)
        if (!firmware) {
            return NextResponse.json({ message: "No Firmware found" }, { status: 404 })
        }
        firmware = new Firmware({ id: OLTID })
        await firmware.save()
        return NextResponse.json({ message: "Firmware Created Succesfully", OLTID, firmware }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ message: error.message || "ERROR creating firmware" }, { status: 500 })
    }
}
export async function PUT(req: NextRequest, { params }: { params: { OLTID: string } }) {
    connectDB()
    try {
        const { OLTID } = params
        const firmware :IFirmware= await Firmware.findById(OLTID)
        if (!firmware) {
            return NextResponse.json({ message: "No Firmware found" }, { status: 404 })
        }
        return NextResponse.json({ message: "Ps Firmware Revoked", OLTID }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ message: error.message || "ERROR creating firmware" }, { status: 500 })
    }
}
export async function DELETE(req: NextRequest, { params }: { params: { OLTID: string } }) {
    connectDB()
    try {
        const { OLTID } = params
        const firmware: IFirmware = await Firmware.findByIdAndDelete(OLTID)
        if (!firmware) {
            return NextResponse.json({ message: "No Firmware found" }, { status: 404 })
        }
        return NextResponse.json({ message: "Your Old Firmware is Deleted ", OLTID }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ message: error.message || "ERROR creating firmware" }, { status: 500 })
    }
}