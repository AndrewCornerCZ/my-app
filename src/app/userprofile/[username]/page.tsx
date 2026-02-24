import React from "react";
import Navbar from "../../../components/Navbar";
import SettingsButton from "@/components/usernameComponents/SettingsButton";
import PostProfile from "@/components/usernameComponents/PostProfile";
import { prisma } from "@/lib/db";
import FollowButton from "@/components/usernameComponents/FollowButton";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import Image from 'next/image'
import ManageSportsModal from '@/components/usernameComponents/ManageSportsModal'; // Nahraďte EditSportModal
import ProfileImageUploader from "@/components/usernameComponents/ProfileImageUploader";
import AddSportModal from '@/components/usernameComponents/AddSportModal'; // Přidejte tento import
import AddActivityModal from "@/components/usernameComponents/AddActivityModal";
import ActivityCalendar from '@/components/usernameComponents/ActivityCalendar';



export default async function Profile({ params }: {params: Promise<{ username: string }>;}) {
    const { username } = await params; 
  const session = await getServerSession(options);
  
  const decodedUsername = decodeURIComponent(username);
  if (!decodedUsername) {
    return <div className='text-white'>Invalid username</div>;
  }
  if (!username) { //Pokud username nemáme, tak vypíšeme error
    return <div className='text-white'>Invalid username</div>;
  }
 
  // Načtem si uživatele z db
  const [user, currentUser] = await Promise.all([
    prisma.user.findUnique({ //najdem si ho podle unique username
      where: {
        username: decodedUsername,
      },
      include: { //Zahrneme i jeho posty a followery a followings
        followers: true,
        following: true,
        activities: {
          include: {
            sport: true, // This attaches the related Sport object to each activity
            user: { //přidáme i uživatele, aby šlo zobrazit username u aktivity v kalendáři
              select: {
                id: true,
                username: true
              }
            }
        }
      },
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
    return <div className='text-white'>User not found</div>;
  }

  // Normalize activities so shape matches ActivityWithSport (add 'longitude' expected by client)
  const serializedActivities = user.activities.map(a => ({
    ...a,
    // ensure date is serializable (ActivityCalendar accepts string|Date)
    date: a.date instanceof Date ? a.date.toISOString() : String(a.date),
    // keep original latitude and add the misspelled field 'longitude' the client type expects
    latitude: a.latitude ?? null,
    longitude: a.longitude ?? null,
  }))
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
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <div className="container mx-auto px-4 py-4">
        {/* HLAVNÍ DVOUSTUPŇOVÝ LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEVÁ STRANA - PROFIL A POSTY */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* PROFIL HEADER - HORNÍ LIŠTA S TLAČÍTKY */}
            <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4 flex-1">
                  <div className="relative w-16 h-16">
                    {user.image ? (
                      <Image
                        src={user.image}
                        alt={`${user.username}'s profile`}
                        fill
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center">
                        <span className="text-2xl text-white font-bold">
                          {user.username.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                    {session?.user?.name === username && (
                      <ProfileImageUploader userId={user.id} />
                    )}
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-white">@{user.username}</h1>
                  </div>
                </div>
                
                {/* TLAČÍTKA NAHOŘE VPRAVO */}
                <div className="flex gap-2">
                  {session?.user?.name === decodedUsername && (
                    <>
                      <SettingsButton />
                      <ManageSportsModal userSports={user.sports} />
                      <AddSportModal userId={user.id} userSports={user.sports} />
                    </>
                  )}
                  {session?.user?.name !== decodedUsername && (
                    <FollowButton 
                      userId={user.id} 
                      initialFollowState={!!isFollowing}
                    />
                  )}
                </div>
              </div>

              {/* BIO A STATISTIKY */}
              <div className="space-y-3">
                {user.bio && (
                  <p className="text-gray-300 text-sm leading-relaxed">{user.bio}</p>
                )}
                <div className="text-sm text-gray-400">
                  <span className="font-semibold text-teal-400">{user.followers.length}</span> Followers • 
                  <span className="font-semibold text-teal-400 ml-2">{user.following.length}</span> Following
                </div>
              </div>

              {user.sports.length > 0 && (
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-white mb-3">Sports</h2>
                <div className="flex flex-wrap gap-2">
                  {user.sports.map((us) => (
                    <span
                      key={us.sportId}
                      className="px-3 py-1 text-white rounded-full text-xs font-medium"
                      style={{ backgroundColor: us.color || '#14b8a6' }}
                    >
                      {us.sport.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
            </div>


            {/* POSTY SEKCE */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-4">Posts</h2>
              <div className="space-y-4">
                <PostProfile id={user.id} />
              </div>
            </div>
          </div>

          {/* PRAVÁ STRANA - KALENDÁŘ A ADD ACTIVITY */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              {/* KALENDÁŘ */}
              <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
                {session?.user?.name === user.username && user.sports.length > 0 && (
                  <div className="mt-3 text-left space-y-1 pb-5">
                    <AddActivityModal userSports={user.sports} />
                  </div>
                )}
                <ActivityCalendar 
                  initialActivities={serializedActivities}
                  userSports={user.sports} 
                  userId={user.id}
                />
              </div>

              {/* ADD ACTIVITY */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}