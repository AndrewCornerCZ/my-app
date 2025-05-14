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
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Friends</h1>
      <p className="text-gray-500">This is the friends page. But its still not implemented XD</p>
   </div>
    </div>
  );
}
