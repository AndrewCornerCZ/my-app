/*
  Warnings:

  - You are about to drop the column `commnets` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `hastagId` on the `Post` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Hashtag_text_key";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "commnets",
DROP COLUMN "hastagId";

-- CreateTable
CREATE TABLE "_PostHashtag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PostHashtag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_PostHashtag_B_index" ON "_PostHashtag"("B");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostHashtag" ADD CONSTRAINT "_PostHashtag_A_fkey" FOREIGN KEY ("A") REFERENCES "Hashtag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostHashtag" ADD CONSTRAINT "_PostHashtag_B_fkey" FOREIGN KEY ("B") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
