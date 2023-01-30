/*
  Warnings:

  - You are about to drop the column `streamKey` on the `LiveSession` table. All the data in the column will be lost.
  - Added the required column `streamKeyId` to the `LiveSession` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "LiveSession_streamKey_key";

-- AlterTable
ALTER TABLE "LiveSession" DROP COLUMN "streamKey",
ADD COLUMN     "streamKeyId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "StreamKey" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "StreamKey_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StreamKey_key_key" ON "StreamKey"("key");

-- AddForeignKey
ALTER TABLE "LiveSession" ADD CONSTRAINT "LiveSession_streamKeyId_fkey" FOREIGN KEY ("streamKeyId") REFERENCES "StreamKey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StreamKey" ADD CONSTRAINT "StreamKey_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
