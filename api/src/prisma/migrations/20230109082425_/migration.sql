/*
  Warnings:

  - You are about to drop the column `tagName` on the `Video` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Video" DROP COLUMN "tagName",
ADD COLUMN     "searchableName" TEXT;
