import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/options";

export async function getContacts() {
  const prisma = new PrismaClient();
  const contacts = await prisma.phoneBookContact.findMany();
  const session = await getServerSession(options);
  const contactsOfCurrentUser = contacts.filter(
    (contact) => contact.ownerEmail === session?.user?.email
  );
  return contactsOfCurrentUser;
}
