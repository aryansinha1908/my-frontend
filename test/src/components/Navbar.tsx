"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white shadow-md">
      <div className="text-xl font-bold tracking-wider">MY_LOGO</div>

      <div className="flex items-center gap-6">
        {pages.map(({ name, path }, index) => (
          <Link
            key={index}
            href={path}
            className={`px-3 py-2 rounded-md transition-colors ${
              pathname === path
                ? "bg-blue-600 text-white font-semibold"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
