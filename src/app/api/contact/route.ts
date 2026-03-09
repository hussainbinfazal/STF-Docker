
import { logger } from "@/utils/logger";
import { NextResponse } from "next/server";


export async function GET(req: NextResponse) {
    try {
        connectDB()
        const Firmware:IFirmware | null = await Firmware.find()
        if (!Firmware) {
            return NextResponse.json({ message: "No Firmware found" }, { status: 404 })
        }
        logger.info("Firmware Fetched Successfully",Firmware._id)
        return NextResponse.json({ Firmware }, { status: 200 })
    } catch (error: any) {
        logger.warn("Failed to fetch Firmware")
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })

    }
}

export async function PUT(req: NextResponse, res: NextResponse) {
    try {
        connectDB()
        const Firmware : IFirmware | null= await Firmware.find()

        if (!Firmware) {
            return NextResponse.json({ message: "No Firmware found" }, { status: 404 })
        }
        Firmware.fc = req.body
        await Firmware.save()
        logger.info("Firmware Found with this Id")
        return NextResponse.json({ Firmware }, { status: 200 })
    } catch (error: any) {
        logger.warn("Error in updating error")
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
    finally {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })

    }
}
export async function DELETE(req: NextResponse, res: NextResponse) {
    try {
        const { firmware } = req.body
        connectDB()
        const FirmwareInDB :IFirmware | null = await Firmware.findByIdAndDelete(firmware)

        if (!FirmwareInDB) {
            return NextResponse.json({ message: "No Firmware found" }, { status: 404 })
        }
        // Firmware types added
        logger.info("Firmware Deleted Succesfully")
        return NextResponse.json({ message: "Firmware Deleted Successfully" }, { status: 200 })
    } catch (error: any) {
        logger.warn("Internal Server Error, please try again")
        return NextResponse.json({ message: "Internal Server Error , Please Try Again" }, { status: 500 })
    }
    finally {
        logger.warn("Formware Deleted Successfully")
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })

    }
}