"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // A tiny reusable Chevron component for the dropdown indicators
  const ChevronIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="opacity-40 group-hover:opacity-100 transition-opacity mt-0.5"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );

  return (
    <nav className="bg-white text-slate-900 border-b border-slate-100 relative z-50">
      <div className="max-w-[90rem] mx-auto px-6 h-20 flex items-center justify-between">
        {/* --- MOBILE MENU BUTTON (Hidden on desktop) --- */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 -ml-2 rounded-md text-slate-600 hover:bg-slate-100 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* --- LEFT LINKS (Hidden on mobile) --- */}
        <div className="hidden lg:flex flex-1 items-center justify-end gap-7 pr-10">
          <Link
            href="/product"
            className="group flex items-center gap-1.5 text-[15px] font-medium text-slate-600 hover:text-black transition-colors"
          >
            Product <ChevronIcon />
          </Link>
          <Link
            href="/solutions"
            className="group flex items-center gap-1.5 text-[15px] font-medium text-slate-600 hover:text-black transition-colors"
          >
            Solutions <ChevronIcon />
          </Link>
          <Link
            href="/docs"
            className="text-[15px] font-medium text-slate-600 hover:text-black transition-colors"
          >
            Docs
          </Link>
        </div>

        {/* --- CENTER LOGO --- */}
        <Link
          href="/"
          className="flex-shrink-0 flex items-center gap-2.5 transition-transform hover:scale-105"
        >
          {/* Mimicking the ReadMe blue open book logo */}
          <div className="text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900 mt-0.5">
            readme
          </span>
        </Link>

        {/* --- RIGHT LINKS & BUTTONS (Hidden on mobile) --- */}
        <div className="hidden lg:flex flex-1 items-center justify-start gap-7 pl-10">
          <Link
            href="/resources"
            className="group flex items-center gap-1.5 text-[15px] font-medium text-slate-600 hover:text-black transition-colors"
          >
            Resources <ChevronIcon />
          </Link>
          <Link
            href="/enterprise"
            className="text-[15px] font-medium text-slate-600 hover:text-black transition-colors"
          >
            Enterprise
          </Link>
          <Link
            href="/pricing"
            className="text-[15px] font-medium text-slate-600 hover:text-black transition-colors"
          >
            Pricing
          </Link>

          {/* Action Buttons Box */}
          <div className="flex items-center gap-5 ml-2">
            <Link
              href="/login"
              className="text-[15px] font-medium text-slate-600 hover:text-black transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/start"
              className="bg-[#0b5cff] hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-[15px] font-semibold transition-colors shadow-sm"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>

      {/* --- MOBILE DROPDOWN (Stays the same functionally) --- */}
      {isOpen && (
        <div className="lg:hidden px-6 pt-4 pb-6 space-y-4 bg-white border-t border-slate-100 shadow-xl absolute w-full left-0">
          {[
            "Product",
            "Solutions",
            "Docs",
            "Resources",
            "Enterprise",
            "Pricing",
          ].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-slate-600 hover:text-black"
            >
              {item}
            </Link>
          ))}
          <hr className="border-slate-100 my-4" />
          <div className="flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-slate-600 text-center py-2"
            >
              Log In
            </Link>
            <Link
              href="/start"
              onClick={() => setIsOpen(false)}
              className="bg-[#0b5cff] text-white text-center px-4 py-3 rounded-full font-semibold"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
