"use client";
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <Link href="/" className="text-[#16f2b3] text-2xl font-bold">
          PRATIKSHA JADHAV
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Menu */}
        <ul
          className={`${
            open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden transition-all duration-300
          mt-4 flex w-full flex-col items-start text-sm
          md:mt-0 md:w-auto md:flex-row md:items-center md:space-x-6
          md:max-h-screen md:opacity-100`}
        >
          {["about", "experience", "skills", "education", "projects"].map(
            (item) => (
              <li key={item}>
                <Link
                  href={`/#${item}`}
                  className="block px-4 py-2 text-white transition-colors hover:text-pink-600"
                  onClick={() => setOpen(false)}
                >
                  {item.toUpperCase()}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
