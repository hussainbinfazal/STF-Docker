import { NextResponse, NextRequest } from "next/server";
import connectDB from "@/app/utils/db";



export async function POST(req: NextRequest) {
    try {
        connectDB();
        const { email, password } = await req.json();
        const user:IUser | null = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
        user.password = password;
        await user.save();
        return NextResponse.json({ message: "Password changed successfully" }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });

    }
}
export async function PUT(req: NextRequest) {
    try {
        connectDB();
        const { email, password } = await req.json();
        const user:IUser | null = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
        user.password = password;
        await user.save();
        return NextResponse.json({ message: "Password changed successfully" }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });

    }
}

export async function DELETE(req: NextRequest) {
    try {
        connectDB();
        const { userID } = await req.json();
        const user: IUSER = await User.findByIdAndUpdate(userID, { isActive: false });
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
        return NextResponse.json({ message: "User Forgot successfull" }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });

    }
}