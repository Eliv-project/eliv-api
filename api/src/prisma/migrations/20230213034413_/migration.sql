/*
  Warnings:

  - You are about to drop the column `ip` on the `Viewer` table. All the data in the column will be lost.
  - Added the required column `ip` to the `View` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_viewerId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "viewerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "View" ADD COLUMN     "ip" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Viewer" DROP COLUMN "ip";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_viewerId_fkey" FOREIGN KEY ("viewerId") REFERENCES "Viewer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
