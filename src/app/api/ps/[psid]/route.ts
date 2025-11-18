import { NextRequest } from "next/server"

export async function POST(req: NextRequest, { params }: { params: { psid: string } }) {
    connectDB()
    try {
        const { psid } = params
        let ps = await PS.findById(OLTID)
        if (ps) {
            return NextResponse.json({ message: "PS already exists with this PSID" }, { status: 404 })
        }
        ps = new PS({ id: psid })
        await PS.save()
        return NextResponse.json({ message: "PS Created Succesfully", PSID, ps }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ message: error.message || "ERROR creating firmware" }, { status: 500 })
    }
}