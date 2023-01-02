/*
  Warnings:

  - Added the required column `path` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "gender" DROP NOT NULL,
ALTER COLUMN "gender" SET DEFAULT true;

-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "path" TEXT NOT NULL;
