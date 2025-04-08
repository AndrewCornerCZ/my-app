/*
  Warnings:

  - You are about to drop the `_PostHashtag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PostHashtag" DROP CONSTRAINT "_PostHashtag_A_fkey";

-- DropForeignKey
ALTER TABLE "_PostHashtag" DROP CONSTRAINT "_PostHashtag_B_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "hashtagId" INTEGER[];

-- DropTable
DROP TABLE "_PostHashtag";
