import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-base-content to-primary text-accent-content p-4 glass">
      <ul className="flex justify-evenly text-2xl font-bold">
        <li>
          <Link href="/">Home</Link>
        </li>
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
