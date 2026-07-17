import { authOptions } from "@/shared/auth/auth-options";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
