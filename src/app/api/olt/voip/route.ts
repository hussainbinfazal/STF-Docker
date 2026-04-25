import { logger } from "@/utils/logger";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request: NextRequest) : Promise<NextResponse> {
    try {
        const {number,Id,Password} = await request.json();
        return NextResponse.json(data);
        logger.info("Data fetched successfully")
    } catch (error) {
         logger.error("Error in creating the voip number")
        return NextResponse.json({ message: 'Error fetching data' }, { status: 500 });
    }
}
export async function PUT(request: NextRequest) : Promise<NextResponse> {
    try {
        const {number,Id,Password} = await request.json();
if(!number || !id || !Password) {
    logger.error("Missing required fields")
    return NextResponse.json({ message: 'Data not found' }, { status: 404 });
}
        logger.info("Voip number updated successfully")
        return NextResponse.json({data},{status:200});
    } catch (error:any) {
        logger.info("Error in updating the voip number")
        return NextResponse.json({ message: 'Error fetching data' }, { status: 500 });
    }
}
export async function DELETE(request: NextRequest) : Promise<NextResponse> {
    try {
        const {number,Id,Password} = await request.json();
        const FfId :IFirmware | null  = await Firmware.findById({_id:Id})
        if(!fd) return NextResponse.json({ message: 'Data not found' }, { status: 404 });
    } catch (error : any) {
        return NextResponse.json({ message: 'Error fetching data' }, { status: 500 });
    }
}