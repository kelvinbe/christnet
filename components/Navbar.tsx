// components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow">
      <Image
        src="/logo.jpg"
        alt="Christnet Logo"
        width={100}
        height={100}
        className=""
      />
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}