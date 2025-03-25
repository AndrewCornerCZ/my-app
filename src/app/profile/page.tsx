import React from "react";
import Navbar from "../../components/Navbar";
import { signOut } from "next-auth/react";
import  {getServerSession}  from "next-auth";
import { redirect } from "next/navigation";
import AddLogoutButton from "@/components/AddLogoutButton";
import { options } from "../api/auth/[...nextauth]/options";
import Posts from "@/components/Posts";

export default async function Profile() {
  const session = await getServerSession(options);
  console.log(session?.user);
  if (!session) {
    redirect ("/login");
  }

  return (
    <div>
      <Navbar />
      <h1 className="text-white">Welcome, {session.user?.name}!</h1> {/* Zobrazení jména uživatele */}
      <h2 className="text-white">Your posts:</h2>
      <Posts/>
      <AddLogoutButton />
    </div>
  );
}
