import Navbar from "../../components/Navbar";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";

export default async function Friends() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/login");
  }

  // Najít aktuálního uživatele
  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user?.email as string,
    }
  });

  if (!currentUser) {
    redirect("/login");
  }

  // Najít vzájemné sledování
  const mutualFollows = await prisma.user.findMany({
    where: {
      AND: [
        // Uživatelé, které já sleduji
        {
          followers: {
            some: {
              followerId: currentUser.id
            }
          }
        },
        // Uživatelé, kteří sledují mě
        {
          following: {
            some: {
              followingId: currentUser.id
            }
          }
        }
      ]
    }
  });

  if (mutualFollows.length === 0) {
    return (
      <div>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
          <h1 className="text-3xl font-bold mb-4">No mutual friends yet</h1>
          <p className="text-zinc-400">When you and another user follow each other, they will appear here.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-3xl font-bold mb-4">Friends</h1>
        <p className="text-zinc-400 mb-6">People you follow who also follow you back</p>
        <ul className="w-full max-w-md space-y-4">
          {mutualFollows.map((user) => (
            <li key={user.id} className="bg-zinc-800 p-4 rounded-lg hover:bg-zinc-700 transition-colors">
              <a href={`/chat/${user.id}`} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {user.username.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-white">@{user.username}</span>
                </div>
                <span className="text-zinc-400">View profile →</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
