c
export async function POST(req: NextRequest, { params }: { params: { psid: string } }) {
    connectDB()
    try {
        const { qsid } = params
        let ps:IPS |  null = await PS.findById(qsid)
        if (ps) {
            return NextResponse.json({ message: "PS already exists with this PSID" }, { status: 404 })
        }
        ps = new PS({ id: qsid })
        await PS.save()
        return NextResponse.json({ message: "PS Created Succesfully", qsid, ps }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ message: error.message || "ERROR creating QS" }, { status: 500 })
    }
}
export async function PUT(req: NextRequest, { params }: { params: { psid: string } }) {
    connectDB()
    try {
        const { qsid } = params
        let ps:IPS | null = await PS.findById(qsid)
        if (ps) {
            return NextResponse.json({ message: "PS already exists with this PSID" }, { status: 404 })
        }
        ps = new PS({ id: qsid })
        await PS.save()
        logger.info("PS Updated Successfully")
        return NextResponse.json({ message: "PS Updated Succesfully", qsid, ps }, { status: 200 })
    } catch (error: any) {
        const message = error instanceof Error ? error.message : "Internal server Error"
        logger.error("Error in update route controller Ps",{
            message
        })
        return NextResponse.json({ message: error.message || "ERROR updating QS" }, { status: 500 })
    }
}
export async function DELETE(req: NextRequest, { params }: { params: { psid: string } }) {
    connectDB()
    try {
        const { qsid } = params
        let ps:IPS | null = await PS.findByIdAndDelete(qsid)
        logger.info("Qs Deleted Successfully")
        return NextResponse.json({ message: "QS Deleted  Succesfully", qsid, ps }, { status: 200 })
    } catch (error: any) {
        const message = error instanceof Error ? error.message : "Internal server Error"
        logger.info("Error In Deleting the qsId",{
            message
        }
        )
        return NextResponse.json({ message: error.message || "ERROR deleting QS" }, { status: 500 })
    }
}