import { NextRequest } from "next/server"

export async function POST(req: NextRequest, { params }: { params: { psid: string } }) {
    connectDB()
    try {
        const { psid } = params
        let ps :IPS |null = await PS.findById(OLTID)
        if (ps) {
            return NextResponse.json({ message: "PS already exists with this PSID" }, { status: 404 })
        }
        ps = new PS({ id: psid })
        await PS.save()
        return NextResponse.json({ message: "PS Created Succesfully", PSID, ps }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ message: error.message || "ERROR creating PS" }, { status: 500 })
    }
}
export async function PUT(req: NextRequest, { params }: { params: { psid: string } }) {
    connectDB()
    try {
        const { psid } = params
        const body = await req.json()

        let ps : IPS | null = await PS.findByIdAndUpdate(OLTID, body, { new: true })
        if (ps) {
            return NextResponse.json({ message: "PS already exists with this PSID" }, { status: 404 })
        }
        await PS.save()
        return NextResponse.json({ message: "PS Created Succesfully", PSID, ps }, { status: 200 })
    } catch (error: any) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ message: `Error in updating PS` }, { status: 500 });
    }
}