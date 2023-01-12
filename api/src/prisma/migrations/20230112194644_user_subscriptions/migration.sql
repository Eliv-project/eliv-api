-- CreateTable
CREATE TABLE "UserSubscription" (
    "userId" INTEGER NOT NULL,
    "subscribingUserId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserSubscription_pkey" PRIMARY KEY ("userId","subscribingUserId")
);

-- AddForeignKey
ALTER TABLE "UserSubscription" ADD CONSTRAINT "UserSubscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSubscription" ADD CONSTRAINT "UserSubscription_subscribingUserId_fkey" FOREIGN KEY ("subscribingUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
