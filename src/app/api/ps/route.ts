import { NextRequest } from "next/server"

export async function POST(req: NextRequest, { params }: { params: { OLTID: string } }) {
    connectDB()
    try {
        const { OLTID } = params
        let firmware : IFirmware | null = await Firmware.findById(OLTID)
        if (!firmware) {
            return NextResponse.json({ message: "No Firmware found" }, { status: 404 })
        }
        firmware = new Firmware({ id: OLTID })
        await firmware.save()
        logger.info("Firmware Created Succesfully")
        return NextResponse.json({ message: "Firmware Created Succesfully", OLTID, firmware }, { status: 200 })
    } catch (error: any) {.
        const message = error instanceof Error ? error.message : "Error in generating Firmware"
        logger.error("Error in generating Firmware",)
        return NextResponse.json({ message: error.message || "ERROR creating firmware" }, { status: 500 })
    }
}
export async function PUT(req: NextRequest, { params }: { params: { OLTID: string } }) {
    connectDB()
    try {
        const { OLTID } = params
        const firmware :IFirmware | null  = await Firmware.findById(OLTID)
        if (!firmware) {
            return NextResponse.json({ message: "No Firmware found" }, { status: 404 })
        }
        logger.info("Firmware Successfully Updated")
        return NextResponse.json({ message: "Ps Firmware Revoked", OLTID }, { status: 200 })
    } catch (error: any) {
        const message = error instanceof Error ? error.message : "Error in updating Firmware"
        logger.error("Error in updating firmware",{messge: message})
        return NextResponse.json({ message: error.message || "ERROR in updating firmware" }, { status: 500 })
    }
}
export async function DELETE(req: NextRequest, { params }: { params: { OLTID: string } }) {
    connectDB()
    try {
        const { OLTID } = params
        const firmware: IFirmware | null   = await Firmware.findByIdAndDelete(OLTID)
        if (!firmware) {
            return NextResponse.json({ message: "No Firmware found" }, { status: 404 })
        }
        logger.info("Firmware Deleted Succesfully")
        return NextResponse.json({ message: "Your Old Firmware is Deleted ", OLTID }, { status: 200 })
    } catch (error: any) {
        const message = error instanceof Error ? error.message: "Error in creating firmware"
        logger.error("Error in Deleting  Firmware")
        return NextResponse.json({ message: error.message || "ERROR creating firmware" }, { status: 500 })
    }
}