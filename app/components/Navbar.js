"use client";

import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-br from-indigo-900 to-gray-950 p-4 pr-5 pl-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo + App Name */}
        <div className="flex items-center space-x-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://static.vecteezy.com/system/resources/thumbnails/010/557/928/small_2x/cn-creative-circle-letter-logo-concept-cn-letter-design-vector.jpg"
            alt="ChatNest logo"
          />
          <Link href="/" className="text-white text-xl font-bold">
            <span className="text-white">Chat</span>Nest
          </Link>
        </div>

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
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
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
        <ul className="sm:hidden flex flex-col space-y-3 mt-4 ml-3 text-white font-medium">
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href="/nests" onClick={() => setMenuOpen(false)}>Nests</Link>
          </li>
          <li>
            <Link href="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link>
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
