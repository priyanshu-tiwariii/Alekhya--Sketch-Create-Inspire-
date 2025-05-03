import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth({
  pages: {
    signIn: "/",
  },
});

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*","/canvas/:path*"],
};
