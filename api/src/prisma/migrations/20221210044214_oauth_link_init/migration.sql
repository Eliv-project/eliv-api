-- CreateTable
CREATE TABLE "OAuthLink" (
    "provider" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "OAuthLink_pkey" PRIMARY KEY ("provider","userId")
);

-- AddForeignKey
ALTER TABLE "OAuthLink" ADD CONSTRAINT "OAuthLink_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
