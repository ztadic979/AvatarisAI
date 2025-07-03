"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logoavatarise from "../../../public/logoavatarise.png";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../mockData/mockData";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#03090E]/30 backdrop-blur-sm px-4 sm:px-10 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src={logoavatarise} alt="Logo" className="w-24 sm:w-32" />
        </Link>
        {/* Desktop links */}
        {/* <nav className="hidden md:flex space-x-8">
          {["Media", "Investors"].map((text) => (
            <Link
              key={text}
              href={`${text.toLowerCase()}`}
              className="text-white/80 hover:text-white transition"
            >
              {text}
            </Link>
          ))}
        </nav> */}

        <nav className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((text) => {
            const href = `/${text.toLowerCase()}`;
            const isActive = pathname === href;

            return (
              <Link
                key={text}
                href={href}
                className={`transition ${
                  !isActive ? "text-white/80 hover:text-white" : ""
                }`}
                style={
                  isActive
                    ? {
                        background:
                          "linear-gradient(180deg, #FFFFFF 20%, #71AECE 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }
                    : undefined
                }
              >
                {text}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-[#03090E]/95 backdrop-blur-sm">
          <nav className="flex flex-col space-y-4 p-4">
            {NAV_ITEMS.map((text) => {
              const href = `/${text.toLowerCase()}`;
              const isActive = pathname === href;

              return (
                <Link
                  key={text}
                  href={href}
                  className={`transition ${
                    !isActive ? "text-white/80 hover:text-white" : ""
                  }`}
                  style={
                    isActive
                      ? {
                          background:
                            "linear-gradient(180deg, #FFFFFF 20%, #71AECE 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }
                      : undefined
                  }
                >
                  {text}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
