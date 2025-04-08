/*
  Warnings:

  - You are about to drop the `_PostHashtag` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[text]` on the table `Hashtag` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_postId_fkey";

-- DropForeignKey
ALTER TABLE "_PostHashtag" DROP CONSTRAINT "_PostHashtag_A_fkey";

-- DropForeignKey
ALTER TABLE "_PostHashtag" DROP CONSTRAINT "_PostHashtag_B_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "commnets" INTEGER[],
ADD COLUMN     "hastagId" INTEGER[];

-- DropTable
DROP TABLE "_PostHashtag";

-- CreateIndex
CREATE UNIQUE INDEX "Hashtag_text_key" ON "Hashtag"("text");
