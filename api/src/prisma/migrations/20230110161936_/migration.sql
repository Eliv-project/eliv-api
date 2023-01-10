/*
  Warnings:

  - A unique constraint covering the columns `[dirId]` on the table `Video` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Video" ALTER COLUMN "privacy" SET DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "Video_dirId_key" ON "Video"("dirId");
