import { logger } from "@/utils/logger";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    connectDB()
    const firmware = await FirmwareModel.find()
    if(!firmware) {
        return NextResponse.json({message: "No Firmware found"}, {status: 404})
    }
    return NextResponse.json({firmware}, {status: 200})
}
export async function POST(req: NextRequest, context: { params: { OLTID: string } }) {
    // connectDB()
    try{
        const { OLTID } = context.params
    const firmwareFile = await req.json()
    const firmware : IFirmware | null = await Firmware.findById(OLTID)
    firmware.firmwareFile = firmwareFile
    if(!firmware) {
        return NextResponse.json({message: "No Firmware found"}, {status: 404})
    }
    logger.info("Firmware Found with this Id")
    return NextResponse.json({OLTID, firmwareFile}, {status: 200})
    } catch (error: any) {
        logger.warn("Error in updating error")
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
    
}


export async function PUT(req: NextRequest, { params }: { params: { OLTID: string } }) {
    // connectDB()
    try{
const { OLTID } = params
    if(!mongoose.Types.ObjectId.isValid(OLTID)){
        logger.error("Invalid Id");
        return NextResponse.json({
            message: "Invalid Id",
        },{status:400})
    }
    const firmwareFile = await req.json()
    const firmware : Ifirmware | null = await Firmware.findById(OLTID)
    firmware.firmwareFile = firmwareFile
    if(!firmware) {
        return NextResponse.json({message: "No Firmware found"}, {status: 404})
    }
    logger.info("Firmware Found with this Id")
    return NextResponse.json({OLTID, firmwareFile}, {status: 200})
    }catch(error:unknown){
        const message = error instanceof Error ? error.message : 'Unknown error';
        logger.error("Error in updating firmware",{error:message})
        return NextResponse.json({ message: `Error in updating firmware` }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { OLTID: string }}) {
try{
    connectDB()
    const { OLTID } = params
    const firmware: Ifirmware | null  = await Firmware.findByIdAndDelete(OLTID)
    if(!firmware) {
        return NextResponse.json({message: "No Firmware found"}, {status: 404})
    }
    logger.info("Firmware Deleted Successfully")
    return NextResponse.json({OLTID}, {status: 200})
}catch(error:unknown){
    const message = error instanceOf Error ? error.message : 'Unknown error';
    logger.error("Error in updating firmware",{error:message})
    return NextResponse.json({ message: `Error in updating firmware` }, { status: 500 });

}
export async function POST(req: NextRequest, { params }: { params: { OLTID: string }}) {
    connectDB()
    try {
        const { OLTID } = params
        const firmware:IFirmware | null  = await Firmware.findById(OLTID)
        if(!firmware) {
            return NextResponse.json({message: "No Firmware found"}, {status: 404})
        }
        const newFirmware = new firmware({firmware: OLTID})
        await newFirmware.save()
        logger.info("Firmware Created Successfully")
        return NextResponse.json({OLTID}, {status: 200})

    } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    logger.info("Error creating Firmware ")
        return NextResponse.json({message: error.message || "ERROR creating firmware"}, {status: 500})
    }
}