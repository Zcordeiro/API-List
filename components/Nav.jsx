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
    <div className="flex items-center justify-between bg-slate-800/50 w-full">
      <Link href='/' className='text-2xl font-bold text-center'>
        <img className="w-32 h-32" src="/images/logo/mainLogo.png" alt="ZC Logo" />
      </Link>
      <nav>
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
              <a href="/projects">Projects</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/about">About</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex mr-10">
          <li>
            <Link href="/" className={`p-3 hover:bg-slate-300 text-white hover:text-black rounded-3xl m-4 text-2xl ${lato.className}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className={`p-3 hover:bg-slate-300 text-white hover:text-black rounded-3xl m-4 text-2xl ${lato.className}`}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about" className={`p-3 hover:bg-slate-300 text-white hover:text-black rounded-3xl m-4 text-2xl ${lato.className}`}>
              About
            </Link>
          </li>
          <li>
            <Link href="/blog" className={`p-3 hover:bg-slate-300 text-white hover:text-black rounded-3xl m-4 text-2xl ${lato.className}`}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav