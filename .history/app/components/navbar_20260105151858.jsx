"use client";
// @flow strict

import { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0d1224]/90 backdrop-blur-md border-b border-[#25213b]">
      {/* TOP BAR */}
      <div className="flex items-center justify-between h-16 px-4 sm:px-6">
        <Link
          href="/"
          className="text-[#16f2b3] text-2xl font-bold"
        >
          PRATIKSHA JADHAV
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* MOBILE MENU (NO GAP) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-4 bg-[#0d1224]">
          {["about", "experience", "skills", "education", "projects"].map(
            (item) => (
              <li key={item}>
                <Link
                  href={`/#${item}`}
                  onClick={() => setIsOpen(false)}
                  className="block text-white text-base hover:text-pink-500 transition-colors"
                >
                  {item.toUpperCase()}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 items-center space-x-6">
        {["about", "experience", "skills", "education", "projects"].map(
          (item) => (
            <li key={item}>
              <Link
                href={`/#${item}`}
                className="text-sm text-white hover:text-pink-500 transition-colors"
              >
                {item.toUpperCase()}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
