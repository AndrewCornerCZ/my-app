import Navbar from "../components/Navbar";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import authOptions from "./api/[...nextauth]/route";



export default async function HomePage() {
//   const session = await getSession();
// const session = await getServerSession({ req });
//  if (!session) {
//    return (
//    <>
//      <Navbar />
//      <p>Nejste přihlášen!</p>
//    </>
//  );
// //}

  return (
    <>
      <Navbar />
      <p>Vítej, !</p>
    </>
  );
}

