/*
  Warnings:

  - Made the column `streamKey` on table `LiveSession` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "LiveSession" ALTER COLUMN "streamKey" SET NOT NULL;

-- AlterTable
ALTER TABLE "Video" ALTER COLUMN "privacy" DROP NOT NULL;
