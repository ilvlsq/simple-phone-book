import type { NextAuthOptions } from "next-auth";
import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare, hash } from "bcrypt";

const prisma = new PrismaClient();

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        username: {
          label: "Username:",
          type: "text",
        },
        password: {
          label: "Password:",
          type: "password",
        },
      },
      async authorize(credentials) {
        const users = await prisma.user.findMany();
        if (!credentials?.username || !credentials.password) return null;

        const currentUser = users.find(
          (user) => user.username === credentials.username
        );

        let isValid;
        if (currentUser) {
          isValid = await compare(credentials.password, currentUser.password);
        }

        if (currentUser && !isValid) return null;
        if (currentUser && isValid) {
          return currentUser;
        } else {
          const newUser = await prisma.user.create({
            data: {
              username: credentials.username,
              password: await hash(credentials.password, 12),
            },
          });
          return newUser;
        }
      },
    }),
  ],
};
