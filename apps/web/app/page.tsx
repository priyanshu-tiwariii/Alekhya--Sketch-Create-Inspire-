"use client";

import { useSession,getSession} from "next-auth/react";
import Navbar from "../components/NavBar";



declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

const HomePage = () => {
  const { data: session } = useSession(); 

  

  return (
    <div>
      <Navbar />
      {session && <p>User ID: {session.user?.id}</p>}
     
    </div>
  );
};

export default HomePage;