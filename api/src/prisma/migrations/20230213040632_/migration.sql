/*
  Warnings:

  - The primary key for the `View` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `View` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "View" DROP CONSTRAINT "View_pkey",
DROP COLUMN "id",
ALTER COLUMN "createdAt" DROP DEFAULT,
ADD CONSTRAINT "View_pkey" PRIMARY KEY ("viewerId", "videoId");
