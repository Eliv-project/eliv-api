/*
  Warnings:

  - A unique constraint covering the columns `[providerId]` on the table `OAuthLink` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "OAuthLink_providerId_key" ON "OAuthLink"("providerId");
