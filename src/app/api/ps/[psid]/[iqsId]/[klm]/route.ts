
export async function POST(req: NextRequest, { params }: { params: { psid: string } }) {
    connectDB()
    try {
        const { klm } = params
        let ps = await PS.findById(klm)
        if (ps) {
            return NextResponse.json({ message: "KLM already exists with this KLMID" }, { status: 404 })
        }
        ps = new PS({ id: klm })
        await PS.save()
        return NextResponse.json({ message: "KLM Created Succesfully", klm, ps }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ message: error.message || "ERROR creating KLM" }, { status: 500 })
    }
}