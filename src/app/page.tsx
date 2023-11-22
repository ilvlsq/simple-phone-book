import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <>
      <div className="diff aspect-[16/7]">
        <div className="diff-item-1">
          <div className="bg-primary text-primary-content text-5xl font-black grid place-content-center">
            And here's a list of birthdays
            <br />
            To start, press "Create a birthdays"
          </div>
        </div>
        <div className="diff-item-2">
          <div className="bg-base-200 text-5xl font-black grid place-content-center">
            That's where your phone numbers will be
            <br />
            To start, press "Create phone numbers"
          </div>
        </div>
        <div className="diff-resizer"></div>
      </div>
    </>
  );
}
