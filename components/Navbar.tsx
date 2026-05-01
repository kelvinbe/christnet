"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  console.log('open', open);

  return (
    <nav className="flex items-center justify-between p-4 shadow-md relative bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo.jpg"
          alt="Christnet Logo"
          width={80}
          height={80}
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 font-medium">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/">Support</Link>
        <Link href="/">Resources</Link>
        <Link href="/">Events</Link>
        <Link href="/">Associates</Link>
        <Link href="/">Newsletters</Link>
      </div>

      {/* Mobile Button */}
      <button
        className="md:hidden flex flex-col space-y-1"
        onClick={() => setOpen(!open)}
      >
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col space-y-4 p-4 md:hidden z-10">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
          <Link href="/" onClick={() => setOpen(false)}>Support</Link>
          <Link href="/" onClick={() => setOpen(false)}>Resources</Link>
          <Link href="/" onClick={() => setOpen(false)}>Events</Link>
          <Link href="/" onClick={() => setOpen(false)}>Associates</Link>
          <Link href="/" onClick={() => setOpen(false)}>Newsletters</Link>
        </div>
      )}
    </nav>
  );
}