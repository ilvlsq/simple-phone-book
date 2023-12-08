import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/options";

export async function getBirthdays() {
  const birthdays = await prisma.birthdaysList.findMany();
  const session = await getServerSession(options);
  const birthdaysOfCurrentUser = birthdays.filter(
    (birthday) => birthday.ownerEmail === session?.user?.email
  );
  return birthdaysOfCurrentUser;
}
