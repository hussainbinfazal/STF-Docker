import { NextResponse } from "next/server";


export async function GET(req: NextResponse, context: { params: { team: string } }) {
    try {
        connectDB()
        const existingteamId = context.params.team;
        const existingTeam:ITeam = await Team.findOne({ name: existingteam });

        return NextResponse.json({ team: existingTeam, message: "Team Request Updated" }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ error: "Failed to fetch team" }, { status: 500 })
    }
}
export async function PUT(req: NextResponse, context: { params: { team: string } }) {
    try {
        connectDB()
        const existingteamId = context.params.team;
        const body = request.json()
        const existingTeam:ITeam = await Team.findByIdAndUpdate({ id: existingteamId }, body, { new: true });

        return NextResponse.json({ team: existingTeam, message: "Team Request Updated" }, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({ error: "Failed to Update team" }, { status: 500 })

    }

    export async function DELETE(req: NextResponse, context: { params: { team: string } }) {
        try {
            await connectDB()
            const existingTeamId = context.params.team;
            const body = request.json()
            const existingTeam: ITeam = await Team.findByIdAndDelete({ id: existingteamId });

            return NextResponse.json({ team: existingTeam, TeamId: existingTeamId, message: "Team with this ID Deleted Successfully" }, { status: 200 })
        } catch (error: any) {
            return NextResponse.json({ error: "Failed to delete team" }, { status: 500 })
        }
    }
    export async function POSt(req: NextResponse, context: { params: { team: string } }) {
        try {

            await connectDB()
            const body = await req.json()
            if (!req.json().name || !req.json().role || !req.json().email) {
                return NextResponse.json({ error: "Please fill all the fields" }, { status: 400 })
            };
            const newTeam: ITeam = new Team({
                name: body.name,
                role: body.role,
                email: body.email,
            });
            await newTeam.save();


            return NextResponse.json({ team: newTeam, message: "New Team Created Successfully" }, { status: 200 })
        } catch (error: any) {
            const messsage = error.message || "Failed to create team";
            return NextResponse.json({ error: "Failed to delete team" }, { status: 500 })
        }
    }