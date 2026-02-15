-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "image" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "UserSport" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "sportId" INTEGER NOT NULL,
    "sportRankId" INTEGER NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "color" TEXT DEFAULT 'blue',

    CONSTRAINT "UserSport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sport" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Sport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SportRanks" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "SportRanks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SportActivity" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "sportId" INTEGER NOT NULL,
    "starttime" TEXT NOT NULL,
    "endtime" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "publicity" TEXT NOT NULL DEFAULT 'private',

    CONSTRAINT "SportActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SportActivityParticipant" (
    "id" SERIAL NOT NULL,
    "activityId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "SportActivityParticipant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "ownerId" INTEGER NOT NULL,
    "isPublic" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sportId" INTEGER,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupMember" (
    "id" SERIAL NOT NULL,
    "groupId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GroupMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupActivity" (
    "id" SERIAL NOT NULL,
    "groupId" INTEGER NOT NULL,
    "activityId" INTEGER NOT NULL,

    CONSTRAINT "GroupActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupInvitation" (
    "id" SERIAL NOT NULL,
    "groupId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GroupInvitation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivityAttendance" (
    "id" SERIAL NOT NULL,
    "activityId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "attending" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ActivityAttendance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chat" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatParticipant" (
    "id" SERIAL NOT NULL,
    "chatId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "ChatParticipant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "chatId" INTEGER NOT NULL,
    "senderId" INTEGER NOT NULL,
    "receiverId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserSport_userId_sportId_key" ON "UserSport"("userId", "sportId");

-- CreateIndex
CREATE UNIQUE INDEX "Sport_name_key" ON "Sport"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SportRanks_name_key" ON "SportRanks"("name");

-- CreateIndex
CREATE UNIQUE INDEX "GroupMember_groupId_userId_key" ON "GroupMember"("groupId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "GroupActivity_groupId_activityId_key" ON "GroupActivity"("groupId", "activityId");

-- CreateIndex
CREATE UNIQUE INDEX "GroupInvitation_groupId_userId_key" ON "GroupInvitation"("groupId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "ActivityAttendance_activityId_userId_key" ON "ActivityAttendance"("activityId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "ChatParticipant_chatId_userId_key" ON "ChatParticipant"("chatId", "userId");

-- AddForeignKey
ALTER TABLE "UserSport" ADD CONSTRAINT "UserSport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSport" ADD CONSTRAINT "UserSport_sportId_fkey" FOREIGN KEY ("sportId") REFERENCES "Sport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSport" ADD CONSTRAINT "UserSport_sportRankId_fkey" FOREIGN KEY ("sportRankId") REFERENCES "SportRanks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SportActivity" ADD CONSTRAINT "SportActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SportActivity" ADD CONSTRAINT "SportActivity_sportId_fkey" FOREIGN KEY ("sportId") REFERENCES "Sport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SportActivityParticipant" ADD CONSTRAINT "SportActivityParticipant_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "SportActivity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SportActivityParticipant" ADD CONSTRAINT "SportActivityParticipant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_sportId_fkey" FOREIGN KEY ("sportId") REFERENCES "Sport"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupMember" ADD CONSTRAINT "GroupMember_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupMember" ADD CONSTRAINT "GroupMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupActivity" ADD CONSTRAINT "GroupActivity_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupActivity" ADD CONSTRAINT "GroupActivity_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "SportActivity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupInvitation" ADD CONSTRAINT "GroupInvitation_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupInvitation" ADD CONSTRAINT "GroupInvitation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityAttendance" ADD CONSTRAINT "ActivityAttendance_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "SportActivity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityAttendance" ADD CONSTRAINT "ActivityAttendance_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatParticipant" ADD CONSTRAINT "ChatParticipant_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "Chat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatParticipant" ADD CONSTRAINT "ChatParticipant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "Chat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
