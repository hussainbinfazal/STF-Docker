export async function POST(req: NextRequest, { params }: { params: { csId: string } }) {
    connectDB()
    try {
        const { csId } = params
    }catch(error: any) {
        
    }
}