/*
  Warnings:

  - The primary key for the `OAuthLink` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "OAuthLink" DROP CONSTRAINT "OAuthLink_pkey",
ADD CONSTRAINT "OAuthLink_pkey" PRIMARY KEY ("provider", "providerId");
