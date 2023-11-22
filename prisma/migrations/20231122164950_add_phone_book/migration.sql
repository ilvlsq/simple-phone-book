-- CreateTable
CREATE TABLE "PhoneBookContact" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "PhoneBookContact_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PhoneBookContact" ADD CONSTRAINT "PhoneBookContact_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
