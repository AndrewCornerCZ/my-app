import React from "react";
import Navbar from "../../../components/Navbar";
import AddLogoutButton from "@/components/AddLogoutButton";
import AddPostButton from "@/components/AddPostButton";
import SettingsButton from "@/components/SettingsButton";
import PostProfile from "@/components/PostProfile";
import { prisma } from "@/lib/db";
import FollowButton from "@/components/FollowButton";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import Image from 'next/image'
import ManageSportsModal from '@/components/ManageSportsModal'; // Nahraďte EditSportModal
import ProfileImageUploader from "@/components/ProfileImageUploader";
import AddSportModal from '@/components/AddSportModal'; // Přidejte tento import

interface ProfileProps {
  params: {
    username: string;
  }
}

export default async function Profile({ params }: ProfileProps) {
  const session = await getServerSession(options); //Získáme session
  const username = decodeURIComponent(params.username); //decodenem si to pro případ že by v username byl nějaký speciální znak nebo mezera
  if (!username) { //Pokud username nemáme, tak vypíšeme error
    return <div className='text-white'>Invalid username</div>;
  }
  
 
  // Načtem si uživatele z db
  const [user, currentUser] = await Promise.all([
    prisma.user.findUnique({ //najdem si ho podle unique username
      where: {
        username: username,
      },
      include: { //Zahrneme i jeho posty a followery a followings
        followers: true,
        following: true,
        sports: { //taktéž sporty navázané na jeho profil
        include: {
          sport: true,
          sportrank: true
        },
      },
      }
    }),
    session?.user?.email ? prisma.user.findUnique({ //najdem si i current usera pokud je přihlášený, bude to potřeba pro práva na profilu
      where: {
        email: session.user.email
      }
    }) : null
  ]);

  if (!user) {
    return <div className='text-white'>User not found</div>; //Pokud uživatele s tím username nenajdeme, vypíšeme error
  }

  // Zkontrolujeme, jestli current user sleduje zobrazovaného uživatele
  const isFollowing = currentUser ? await prisma.userFollow.findFirst({
    where: {
      AND: [
        { followerId: currentUser.id },
        { followingId: user.id }
      ]
    }
  }) : null;


  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-zinc-800 rounded-lg p-6 mb-8 shadow-xl relative">
          {/* Přidáme settings do pravého rohu */}
          {session?.user?.name === username && ( //ale jenom pokud je to jeho profil
            <div className="absolute top-4 right-4">
              <SettingsButton />
            </div>
          )}
          
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-16 h-16">
              {user.image ? ( //načteme profilovku, pokud není, tak zobrazíme první písmeno username
                <Image
                  src={user.image}
                  alt={`${user.username}'s profile`}
                  fill
                  className="rounded-full object-cover" //kruhové zobrazení
                />
              ) : (
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-white font-bold"> 
                    {user.username.charAt(0).toUpperCase()} {/*První písmeno username, pokud nemá obrázek*/}
                  </span>
                </div>
              )}
             {session?.user?.name === username && ( //ověříme že je to jeho profil
              <ProfileImageUploader userId={user.id} /> //componenta pro uploud, použita služba cloudinary
             )}
            </div>
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-white mb-1">@{user.username}</h1>
              {session?.user?.name !== username && ( //pokud to není jeho profil, zobrazíme follow button
                <FollowButton 
                  userId={user.id} 
                  initialFollowState={!!isFollowing} //zjistíme jestli ho už náhodou nesleduje
                />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {user.bio && ( //vypíšeme bio pokud ho má
              <div className="text-gray-300 bg-zinc-700/50 rounded-lg p-4">
                <p className="text-sm">{user.bio}</p>
              </div>
            )}
            <div className="bg-zinc-800 rounded-lg p-6 mb-8 shadow-xl">
  <h2 className="text-xl font-semibold text-white mb-4 border-b border-zinc-700 pb-2">
    Sports
  </h2>
  <div className="flex flex-wrap gap-2 mb-4">
    {user.sports.map((us) => {
      // 1. Uděláme si výpočet pro "streak", což je počet dní od data ve startedAt
      const now = new Date();
      const start = new Date(us.startedAt);
      const diffTime = Math.abs(now.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      // 2. Vrátime JSX s tooltipem
      return (
        <span
          key={us.sportId}
          className="px-3 py-1 bg-indigo-600 text-white rounded-full text-sm"
          // 3. Vypíšeme rank, streak a od kdy to dělá v tooltipu
          title={`Rank: ${us.sportrank.name} / Streak: ${diffDays} days / Since: ${us.startedAt.toDateString()}`}
        >
          {us.sport.name}
        </span>
      );
    })}
  </div>

  {/*Komponenty pro přidání a úpravu sportů na profilu */}
        {session?.user?.name === user.username && (
          <div className="flex gap-4 mt-4">
            <AddSportModal userId={user.id} userSports={user.sports} />
            {user.sports.length > 0 && (
              <ManageSportsModal userSports={user.sports} />
            )}
          </div>
        )}
</div>
            <div className="text-gray-400 display-flex flex-col">
              <p className="mb-2">Followers: {user.followers.length}</p> {/*Počty followerů a followingů*/}
              <p>Following: {user.following.length}</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-4 border-b border-zinc-700 pb-2"> {/*A vypíšeme si všechny jeho posty */}
            Posts
          </h2>
          <PostProfile id={user.id} />
        </div>

        <div className="flex gap-4">
          <AddPostButton />
          <AddLogoutButton />
        </div>
      </div>
    </div>
  );
}