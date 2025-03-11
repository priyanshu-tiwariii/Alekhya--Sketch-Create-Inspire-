"use client";

import { useSession } from "next-auth/react";
import LoginButton from "../components/LoginButton";

export default function Page() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>NextAuth + Express.js</h1>
      <LoginButton />
      {session && <p>User ID: {session.user?.id}</p>}
    </div>
  );
}