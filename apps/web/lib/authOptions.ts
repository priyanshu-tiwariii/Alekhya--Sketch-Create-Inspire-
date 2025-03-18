import NextAuth, { Account, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import axios from "axios";
import { AUTH_URL } from "./apiEndPoints";

export interface customUser {
  id : string | null;
  sub?: string | null
  email?: string | null;
  name?: string | null;
  image?: string | null;
  provider?: string | null;
  token?: string | null;
}

const TEMP_EMAIL_DOMAINS = [
  "mailinator.com", "tempmail.com", "10minutemail.com", "guerrillamail.com",
  "trashmail.com", "disposablemail.com", "fakeinbox.com", "yopmail.com"
];

// Validate environment variables
if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error("Google client ID or secret is not defined");
}

if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
  throw new Error("GitHub client ID or secret is not defined");
}

if (!process.env.NEXTAUTH_SECRET) {
  throw new Error("NEXTAUTH_SECRET is not defined");
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user, account }: { user: customUser; account: Account | null }) {
      if (!user || !account) return false;

      try {
        const profilePhoto = user.image || (user as any)?.avatar_url || "default_image_url";

        
        

        // Block temp email domains
        const emailDomain = user.email?.split("@")[1]?.toLowerCase();
        if (!emailDomain || TEMP_EMAIL_DOMAINS.includes(emailDomain)) {
          console.log("Blocked sign-in attempt from temp email:", user.email);
          return false;
        }
              
        const res = await axios.post(AUTH_URL, {
          id:user.id || (user as any)?.sub || "default_id",
          email: user.email || "no-email@example.com",
          name: user.name || "Anonymous User",
          profilePhoto : user.image || (user as any)?.avatar_url || "default_image_url",
          provider: account.provider || "unknown",
        });

        user.id = res.data?.data?.user?.id;
        user.token = res?.data?.data.token;
        user.email = res.data?.data?.user?.email;

        return res.data.success ? true : false;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Sign-in error:", error.response?.data || error.message);
        } else {
          console.error("Sign-in error:", error);
        }
        return false;
      }
    },

    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },

    async session({ session, token }) {
      if (token.user) {
        session.user = token.user as customUser;
      }
      console.log("Session", session);
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    error: "/auth/error", 
  },
};