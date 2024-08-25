/*
  Warnings:

  - You are about to drop the `_AuthorToPost` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `authorId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_AuthorToPost" DROP CONSTRAINT "_AuthorToPost_A_fkey";

-- DropForeignKey
ALTER TABLE "_AuthorToPost" DROP CONSTRAINT "_AuthorToPost_B_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "authorId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_AuthorToPost";

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
