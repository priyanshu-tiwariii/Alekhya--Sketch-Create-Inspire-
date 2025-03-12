"use client";

import { useSession } from "next-auth/react";
import LoginButton from "../components/LoginButton";
import Navbar from "../components/NavBar";

export default function Page() {
  const { data: session } = useSession();

  return (
    <div>
      {/* <h1>NextAuth + Express.js</h1> */}
      <Navbar/>
      
      {session && <p>User ID: {session.user?.id}</p>}
    </div>
  );
}