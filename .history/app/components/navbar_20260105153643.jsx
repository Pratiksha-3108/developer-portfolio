<nav className="fixed top-0 left-0 w-full z-50 bg-[#0d1224]/90 backdrop-blur-md border-b border-[#25213b]">
  <div className="flex items-center justify-between px-4 py-4 md:py-5">
    <Link href="/" className="text-[#16f2b3] text-2xl md:text-3xl font-bold">
      PRATIKSHA JADHAV
    </Link>

    {/* Desktop */}
    <ul className="hidden md:flex items-center space-x-2">
      {navLinks.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="px-4 py-2 text-sm text-white transition-colors duration-300 hover:text-pink-600"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>

    {/* Mobile Button */}
    <button className="md:hidden text-white text-3xl" onClick={() => setOpen(!open)}>
      {open ? <HiX /> : <HiMenuAlt3 />}
    </button>
  </div>

  {/* Mobile Menu */}
  <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${open ? "max-h-screen" : "max-h-0"}`}>
    <ul className="flex flex-col items-start px-4 pb-4 bg-[#0d1224]">
      {navLinks.map((link) => (
        <li key={link.name} className="w-full">
          <Link
            href={link.href}
            onClick={() => setOpen(false)}
            className="block w-full px-2 py-3 text-white text-sm transition-colors duration-300 hover:text-pink-600"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
</nav>
