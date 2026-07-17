import { withAuth } from "next-auth/middleware";

// Gates every /admin/* route behind a valid next-auth session, except
// the login page itself (must stay reachable to sign in).
export default withAuth({
  pages: {
    signIn: "/admin/login",
  },
});

export const config = {
  matcher: ["/admin/((?!login).*)"],
};
