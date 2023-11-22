import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-base-content text-accent-content p-4 rounded-lg glass">
      <ul className="flex justify-evenly text-2xl font-bold">
        <li>
          <Link href="/phone-numbers">Create phone numbers</Link>
        </li>
        <li>
          <Link href="/birthdays">Create a birthdays</Link>
        </li>
      </ul>
    </nav>
  );
}
