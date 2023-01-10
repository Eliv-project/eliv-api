-- CreateTable
CREATE TABLE "VodSession" (
    "id" SERIAL NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "videoId" INTEGER NOT NULL,

    CONSTRAINT "VodSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VodSession_videoId_key" ON "VodSession"("videoId");

-- AddForeignKey
ALTER TABLE "VodSession" ADD CONSTRAINT "VodSession_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
