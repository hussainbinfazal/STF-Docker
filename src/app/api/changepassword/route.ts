import { NextResponse, NextRequest } from "next/server";
import connectDB from "@/app/utils/db";



export async function POST(req: NextRequest) {
    try {
        connectDB();
    const { email, password } = await req.json();
    const user = await User.findOne({ email });
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
    const user = await User.findOne({ email });
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