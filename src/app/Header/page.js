"use client"
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-orange-500">YourLogo</h1>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:space-x-6`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0">
            <li>
              <a href="#content" className="block hover:underline text-gray-700">
                About
              </a>
            </li>
            <li>
              <a
                href="#subscribe"
                className="block hover:underline text-gray-700"
              >
                Subscribe
              </a>
            </li>
            <li>
              <a
                href="https://www.etsy.com/shop/digicaredesign/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:underline text-gray-700"
              >
                Etsy Store
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
