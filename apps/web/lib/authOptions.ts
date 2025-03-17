import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import axios from "axios";


const TEMP_EMAIL_DOMAINS = [
  "mailinator.com", "tempmail.com", "10minutemail.com", "guerrillamail.com",
  "trashmail.com", "disposablemail.com", "fakeinbox.com", "yopmail.com"
];

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
    async signIn({ profile, account }) {
      if (!profile || !account) return false;

      try {

        const profilePhoto = 'picture' in profile ? profile.picture : (profile as any).avatar_url;
        if (account.provider === "google" && !(profile as any)?.email_verified) {
          return false;
        }

        const emailDomain = (profile as any)?.email.split("@")[1].toLowerCase();

      // Block temp email domains
      if (TEMP_EMAIL_DOMAINS.includes(emailDomain)) {
        console.log("Blocked sign-in attempt from temp email:", (profile as any)?.email);
        return false;
      }

        console.log("Profile", profile);
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/`, {  
          id  :profile.sub || profile?.id,  
          email: profile.email,
          name: profile.name,
          profilePhoto,  
          provider: account.provider,
        });
        return res.data.success ? true : false;
      } catch (error) {
        console.error("Sign-in error:", error);
        return false;
      }
    },

    async jwt({ token, user }) {
      if (user) token.id = user.id;
      console.log("JWT token", token);
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      console.log("Session", session);
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET, // Ensure this is in `.env.local`

  pages: {
    error: "/auth/error", // Custom error page (optional)
  },
};
