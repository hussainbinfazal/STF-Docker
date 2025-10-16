
import { NextResponse } from "next/server";


export async function GET(req:NextResponse) {
    connectDB()
    const Firmware = await Firmware.find()
    if(!Firmware) {
        return NextResponse.json({message: "No Firmware found"}, {status: 404})
    }
    return NextResponse.json({Firmware}, {status: 200})
}

export async function PUT(req:NextResponse,res:NextResponse) {
    try{
        connectDB()
    const Firmware = await Firmware.find()
      
    if(!Firmware) {
        return NextResponse.json({message: "No Firmware found"}, {status: 404})
    }
    Firmware.fc = req.body
    await Firmware.save()
    return NextResponse.json({Firmware}, {status: 200})
    }catch(error){
        return NextResponse.json({message: "Internal Server Error"}, {status: 500})
    }
    finally{
        return NextResponse.json({message: "Internal Server Error"}, {status: 500})

    }
}
export async function DELETE(req:NextResponse,res:NextResponse) {
    try{
        const {firmware} = req.body
        connectDB()
     const FirmwareInDB = await Firmware.findByIdAndDelete(firmware)
      
    if(!FirmwareInDB) {
        return NextResponse.json({message: "No Firmware found"}, {status: 404})
    }
    return NextResponse.json({message : "Firmware Deleted Successfully"}, {status: 200})
    }catch(error){
        return NextResponse.json({message: "Internal Server Error"}, {status: 500})
    }
    finally{
        return NextResponse.json({message: "Internal Server Error"}, {status: 500})

    }
}