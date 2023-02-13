/*
  Warnings:

  - You are about to drop the column `ip` on the `View` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `View` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[viewerId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `viewerId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `viewerId` to the `View` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "View" DROP CONSTRAINT "View_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "viewerId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "View" DROP COLUMN "ip",
DROP COLUMN "userId",
ADD COLUMN     "viewerId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Viewer" (
    "id" SERIAL NOT NULL,
    "ip" TEXT NOT NULL,

    CONSTRAINT "Viewer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_viewerId_key" ON "User"("viewerId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_viewerId_fkey" FOREIGN KEY ("viewerId") REFERENCES "Viewer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "View" ADD CONSTRAINT "View_viewerId_fkey" FOREIGN KEY ("viewerId") REFERENCES "Viewer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
