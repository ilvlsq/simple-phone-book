/*
  Warnings:

  - You are about to drop the column `ownerId` on the `PhoneBookContact` table. All the data in the column will be lost.
  - Added the required column `ownerEmail` to the `PhoneBookContact` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PhoneBookContact" DROP CONSTRAINT "PhoneBookContact_ownerId_fkey";

-- AlterTable
ALTER TABLE "PhoneBookContact" DROP COLUMN "ownerId",
ADD COLUMN     "ownerEmail" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "PhoneBookContact" ADD CONSTRAINT "PhoneBookContact_ownerEmail_fkey" FOREIGN KEY ("ownerEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
