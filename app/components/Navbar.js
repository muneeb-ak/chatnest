"use client"

import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-950 p-4 pr-12 pl-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* App Name on Left */}
        <Link href="/" className="text-white text-xl font-bold">
          ChatNest
        </Link>

        {/* Desktop Links */}
        <ul className="hidden sm:flex space-x-6 text-white font-medium gap-1 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/nests">Nests</Link>
          </li>
               
          <li>
            <Link href="/testimonials">Testimonials</Link>
          </li>
          <li>
            <UserButton />
          </li>
        </ul>

        {/* Hamburger Button - visible on small screens */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              // X icon when open
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon when closed
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="sm:hidden flex flex-col space-y-3 mt-4 text-white font-medium">
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/nests" onClick={() => setMenuOpen(false)}>
              Nests
            </Link>
          </li>
          <li>
            <Link href="/testimonials">Testimonials</Link>
          </li>
          <li>
            <UserButton />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
