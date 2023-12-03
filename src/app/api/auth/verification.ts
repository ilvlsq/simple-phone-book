import { PrismaClient } from "@prisma/client";
import { options } from "./[...nextauth]/options";
import { getServerSession } from "next-auth/next";

const prisma = new PrismaClient();

export async function verification() {
  const users = await prisma.user.findMany();
  const session = await getServerSession(options);
  const currentUser = users.find((user) => user.email === session?.user?.email);
  if (!currentUser) {
    await prisma.user.create({
      data: {
        name: session?.user?.name,
        email: session?.user?.email!,
      },
    });
  }
  return currentUser;
}
