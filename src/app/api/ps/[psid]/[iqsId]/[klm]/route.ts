
export async function POST(req: NextRequest, { params }: { params: { psid: string } }) {
    connectDB()
    try {
        const { klm } = params
        let ps:IPS | null = await PS.findById(klm)
        if (ps) {
            return NextResponse.json({ message: "KLM already exists with this KLMID" }, { status: 404 })
        }
        ps = new PS({ id: klm })
        await PS.save()
        logger.info("KLM crated Successfully",{KLMID:klm})
        return NextResponse.json({ message: "KLM Created Succesfully", klm, ps }, { status: 200 })
    } catch (error: any) {
        const message = error instanceof Error ? error.message : "Internal Server Error"
        logger.info("Error in post ps route",{message})
        return NextResponse.json({ message: error.message || "ERROR creating KLM" }, { status: 500 })
    }
}
export async function PUT(req: NextRequest, { params }: { params: { psid: string } }) {
    connectDB()
    try {
        const { klm } = params
        let ps:IPS | null = await PS.findByIdAndUpdate(klm)
        if (ps) {
            return NextResponse.json({ message: "KLM already exists with this KLMID" }, { status: 404 })
        }
      
        logger.info("KLM crated Successfully",{KLMID:klm})
        return NextResponse.json({ message: "KLM Created Succesfully", klm, ps }, { status: 200 })
    } catch (error: any) {
        const message = error instanceof Error ? error.message : "Internal Server Error"
        logger.info("Error in post ps route",{message})
        return NextResponse.json({ message: error.message || "ERROR creating KLM" }, { status: 500 })
    }
}
export async function DELETE(req: NextRequest, { params }: { params: { psid: string } }) {
    connectDB()
    try {
        const { klm } = params
        let ps:IPS | null = await PS.findByIdAndDelete(klm)
        
        logger.info("KLM Deleted Successfully",{KLMID:klm})
        return NextResponse.json({ message: "KLM Created Succesfully", klm, ps }, { status: 200 })
    } catch (error: any) {
        const message = error instanceof Error ? error.message : "Internal Server Error"
        logger.info("Error in post ps route",{message})
        return NextResponse.json({ message: error.message || "ERROR creating KLM" }, { status: 500 })
    }
}