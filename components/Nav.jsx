"use client";

import {  useState } from "react";
import Link from 'next/link'
import { Lato } from "next/font/google";

export const lato = Lato({
  subsets: ['latin-ext'],
  weight: '400'
});

const Nav = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-green-400 to-blue-500 w-full">
      <Link href='/' className='text-2xl font-bold text-center'>
        <img className="w-32 h-32" src="/images/logo/mainLogo.png" alt="API Logo" />
      </Link>
      <nav>
        {/* This is the mobile nav/hamburger menu for smaller screens. */}
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 m-10"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between">
              <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/">Home</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/browse">Browse</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/categories">Categories</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="https://github.com/Zcordeiro/API-List" target="_blank">Github</a>
              </li>
            </ul>
          </div>
        </section>

        {/* This is the desktop nav for larger screens. */}
        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex mr-10">
          <li>
            <Link href="/" className={`p-3 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:font-bold text-white hover:text-black rounded-3xl m-4 text-2xl ${lato.className}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/browse" className={`p-3 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:font-bold text-white hover:text-black rounded-3xl m-4 text-2xl ${lato.className}`}>
              Browse
            </Link>
          </li>
          <li>
            <Link href="/categories" className={`p-3 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:font-bold text-white hover:text-black rounded-3xl m-4 text-2xl ${lato.className}`}>
              Categories
            </Link>
          </li>
          <li>
            <Link href="https://github.com/Zcordeiro/API-List" target="_blank" className={`p-3 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:font-bold text-white hover:text-black rounded-3xl m-4 text-2xl ${lato.className}`}>
              Github
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav