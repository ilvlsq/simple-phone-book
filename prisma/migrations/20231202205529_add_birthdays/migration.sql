-- CreateTable
CREATE TABLE "BirthdaysList" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "ownerEmail" TEXT NOT NULL,

    CONSTRAINT "BirthdaysList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BirthdaysList" ADD CONSTRAINT "BirthdaysList_ownerEmail_fkey" FOREIGN KEY ("ownerEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
