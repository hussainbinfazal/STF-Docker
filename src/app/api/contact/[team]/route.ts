import { logger } from "@/utils/logger";
import { NextResponse } from "next/server";


export async function GET(req: NextResponse, context: { params: { team: string } }) {
    try {
        connectDB()
        const existingteamId = context.params.team;
        const existingTeam:ITeam | null = await Team.findOne({ name: existingteam });
        logger.info("Team Requst Updated", existingTeam._id)
        return NextResponse.json({ team: existingTeam, message: "Team Request Updated" }, { status: 200 })
    } catch (error: any) {
        logger.warn("Failed to fetch team with this ID")
        return NextResponse.json({ error: "Failed to fetch team" }, { status: 500 })
    }
}
export async function PUT(req: NextResponse, context: { params: { team: string } }) {
    try {
        connectDB()
        const existingteamId = context.params.team;
        const body = request.json()
        const existingTeam:ITeam | null = await Team.findByIdAndUpdate({ id: existingteamId }, body, { new: true });
        logger.info("failed to Update Field Team with this ID Updated Successfully")
        return NextResponse.json({ team: existingTeam, message: "Team Request Updated" }, { status: 200 })

    } catch (error: any) {
        logger.warn("Failed to Update team with this ID")
        return NextResponse.json({ error: "Failed to Update team" }, { status: 500 })

    }
}
    export async function DELETE(req: NextResponse, context: { params: { team: string } }) {
        try {
            await connectDB()
            const existingTeamId : string = context.params.team;
            const body = request.json()
            const existingTeam: ITeam | null = await Team.findByIdAndDelete({ id: existingteamId });
            logger.info("failed to Update Field Team with this ID Updated Succesfully")
            return NextResponse.json({ team: existingTeam, TeamId: existingTeamId, message: "Team with this ID Deleted Successfully" }, { status: 200 })
        } catch (error: any) {
            return NextResponse.json({ error: "Failed to delete team" }, { status: 500 })
        }
    }
    export async function POST(req: NextResponse, context: { params: { team: string } }) {
        try {

            await connectDB()
            const body = await req.json()
            if (!req.json().name || !req.json().role || !req.json().email) {
                return NextResponse.json({ error: "Please fill all the fields" }, { status: 400 })
            };
            const newTeam: ITeam | null = new Team({
                name: body.name,
                role: body.role,
                email: body.email,
            });
            await newTeam.save();
            logger.info("New Team created Succesfully")


            return NextResponse.json({ team: newTeam, message: "New Team Created Successfully" }, { status: 200 })
        } catch (error: any) {
            const messsage = error.message || "Failed to create team";
            return NextResponse.json({ error: "Failed to delete team" }, { status: 500 })
        }
    }