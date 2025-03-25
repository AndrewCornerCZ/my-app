import Navbar from "../components/Navbar";
import { getServerSession } from "next-auth";
import {redirect} from "next/navigation";
import { options } from "./api/auth/[...nextauth]/options";
import AddPostButton from "../components/AddPostButton";



export default async function HomePage() {
  const session = await getServerSession(options);
  console.log(session?.user);
  if (!session) {
    redirect ("/login");
  }

  return (
    <>
      <Navbar />
      <AddPostButton />
    </>
  );
}

