import Navbar from "../../components/Navbar";
import { options } from "../api/auth/[...nextauth]/options";
import  {getServerSession}  from "next-auth";
import { redirect } from "next/navigation";
export default async function Friends() {
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
