import jwt, { JwtPayload } from "jsonwebtoken";
import { NextResponse } from "next/server";
interface JWT extends JwtPayload {
  userId: string;
  roles: string[];
}
interface res extends NextResponse {
  token?: string;
}
export const generateToken = (userId: string, response: res) => {
  try {
    let token: string;
    if (!userId) return response;

    const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;

    if (!secretKey) {
      throw Error("JWT secret key is not defined");
    }

    token = jwt.sign({ userId }, secretKey, { expiresIn: "1h" });
    return token;
  } catch (error) {
    console.error("Error generating token:", error);
    throw Error("Token generation failed");
  }
};
