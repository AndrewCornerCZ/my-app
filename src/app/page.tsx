import Navbar from "../components/Navbar";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import authOptions from "./api/[...nextauth]/route";



export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p className="text-xl text-indigo-500 h-screen flex items-center justify-center"><a href="login.tsx">Přihlaste se pro zobrazení této stránky</a>.</p>;
  }

  return (
    <>
      <Navbar />
      <p>Vítej, {session.user?.email}!</p>
    </>
  );
}

