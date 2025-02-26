import Navbar from "../../components/Navbar";
import { PrismaClient } from "@prisma/client";
export default async function Friends() {
  const prisma = new PrismaClient();
  const user = await prisma.user.findUnique({
    where: { email:" "},
  });
  return ( 
   <div>
    <Navbar/>
   </div>
  );
}
