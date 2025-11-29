import { NextResponse } from "next/server";


export async function GET(req: NextResponse, context: { params: { team: string } }) {
    connectDB()
    const existingteamId = context.params.team;
    const existingTeam = await Team.findOne({ name: existingteam });

    return NextResponse.json({ team: existingTeam, message: "Team Request Updated" }, { status: 200 })
}
export async function PUT(req: NextResponse, context: { params: { team: string } }) {
    connectDB()
    const existingteamId = context.params.team;
    const body = request.json()
    const existingTeam = await Team.findByIdAndUpdate({ id: existingteamId }, body, { new: true });

    return NextResponse.json({ team: existingTeam, message: "Team Request Updated" }, { status: 200 })
}
export async function DELETE(req: NextResponse, context: { params: { team: string } }) {
    try {
        await connectDB()
        const existingteamId = context.params.team;
        const body = request.json()
        const existingTeam = await Team.findByIdAndDelete({ id: existingteamId });

        return NextResponse.json({ team: existingTeam, message: "Team with this ID Deleted Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete team" }, { status: 500 })
     }
}