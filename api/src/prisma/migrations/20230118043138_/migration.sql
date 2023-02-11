-- AlterTable
ALTER TABLE "User" ADD COLUMN     "verified" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "duration" DOUBLE PRECISION NOT NULL DEFAULT 0;
