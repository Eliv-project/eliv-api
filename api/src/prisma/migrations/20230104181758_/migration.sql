/*
  Warnings:

  - You are about to drop the column `path` on the `Video` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Video" DROP COLUMN "path",
ADD COLUMN     "dirId" TEXT;
