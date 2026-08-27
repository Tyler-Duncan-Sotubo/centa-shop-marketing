import { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { platformFetch } from "@/shared/api/platform-client";

type VerifiedAdmin = { id: string; email: string; name: string };

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      // Credentials are verified by the backend, which owns admin_users and
      // the password hashes. Session issuing stays here.
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        try {
          const user = await platformFetch<VerifiedAdmin>(
            "platform/auth/verify",
            {
              method: "POST",
              body: {
                email: credentials.email.toLowerCase(),
                password: credentials.password,
              },
            },
          );
          return { id: user.id, email: user.email, name: user.name };
        } catch (err) {
          // next-auth shows the same "invalid credentials" message however
          // this fails, so a misconfigured BACKEND_URL/PLATFORM_INTERNAL_KEY
          // is indistinguishable from a wrong password in the UI. Log the
          // real reason server-side, or that config error costs an hour of
          // debugging the wrong thing. Never log the submitted password.
          console.error(
            "[auth] platform/auth/verify failed:",
            err instanceof Error ? err.message : err,
          );
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id;
      }
      return token;
    },
    async session({ token, session }) {
      if (session.user) {
        session.user.id = token.userId as string;
      }
      return session;
    },
  },
};

export const getServerAuthSession = () => getServerSession(authOptions);
