import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth/next";
import { options } from "../auth/[...nextauth]/options";

export async function POST(req: any) {
  const session = await getServerSession(options);
  try {
    const data = await req.json();
    await prisma.phoneBookContact.create({
      data: {
        name: data.name,
        lastname: data.lastName,
        phone: data.phoneNumber,
        owner: {
          connect: { email: session?.user?.email! },
        },
      },
    });

    return NextResponse.json({ message: "Contact created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function PUT(req: any) {
  const session = await getServerSession(options);
  try {
    const data = await req.json();
    await prisma.phoneBookContact.update({
      where: {
        id: data.contactId,
        ownerEmail: session?.user?.email!,
      },
      data: {
        name: data.editedName,
      },
    });

    return NextResponse.json({ message: "Contact updated" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req: any) {
  try {
    const data = await req.json();
    await prisma.phoneBookContact.delete({
      where: { id: data },
    });

    return NextResponse.json({ message: "Contact deleted" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
