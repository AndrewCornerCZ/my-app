import Navbar from "../../components/Navbar";
import { options } from "../api/auth/[...nextauth]/options";
import  {getServerSession}  from "next-auth";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
export default async function Friends() {
  const prisma = new PrismaClient();
  const session = await getServerSession(options);
  if (!session) {
    redirect ("/login");
  }
  return ( 
   <div>
    <Navbar/>
   </div>
  );
}
