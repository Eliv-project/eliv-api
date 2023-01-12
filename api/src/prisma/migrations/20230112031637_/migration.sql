-- DropForeignKey
ALTER TABLE "LiveSession" DROP CONSTRAINT "LiveSession_videoId_fkey";

-- DropForeignKey
ALTER TABLE "VodSession" DROP CONSTRAINT "VodSession_videoId_fkey";

-- AddForeignKey
ALTER TABLE "LiveSession" ADD CONSTRAINT "LiveSession_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VodSession" ADD CONSTRAINT "VodSession_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE CASCADE ON UPDATE CASCADE;
