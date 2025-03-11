import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import axios from "axios";

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
        console.log("Profile:", profile);
        console.log("Account:", account);

        const profilePhoto = 'picture' in profile ? profile.picture : (profile as any).avatar_url;

        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/`, {    
          email: profile.email,
          name: profile.name,
          profilePhoto,  
          provider: account.provider,
        });
        
        console.log("Sign-in response:", res);
        console.log("Response:", res.data);
        return res.data.success ? true : false;
      } catch (error) {
        console.error("Sign-in error:", error);
        return false;
      }
    },

    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET, // Ensure this is in `.env.local`

  pages: {
    error: "/auth/error", // Custom error page (optional)
  },
};
