import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      phoneNumber: string;
      role: string;
      profile?: string; // Optional profile field
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    phoneNumber: string;
    role: string;
    profile?: string;
     
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    phoneNumber: string;
    role: string;
    profile?: string; // Optional profile field
  }
}