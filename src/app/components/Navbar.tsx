'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { poppins, happyMonkey, chewy } from '../fonts';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <section className="w-full z-50 fixed top-5 flex justify-center bg-transparent">
            <nav className="w-[85%] bg-white shadow-md rounded-xl px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
                {/* Logo */}
                <Link href="#hero-section" className="flex items-center space-x-2">
                    <Image
                        src="/assets/logo/bento-go.png"
                        alt="Logo"
                        width={60}
                        height={60}
                    />
                </Link>

                {/* Mobile toggle button */}
                <button
                    className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    <svg
                        className="w-6 h-6 text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {/* Nav items */}
                <div className={`lg:flex items-center space-x-6 ${isMenuOpen ? 'block' : 'hidden'} absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent px-4 lg:px-0 py-4 lg:py-0 shadow-md lg:shadow-none`}>
                    <ul className={`${chewy.className} flex flex-col lg:flex-row gap-4 lg:gap-10 text-black`}>
                        <li>
                            <Link href="/#" className="hover:text-red-500 transition ease-in-out">Home</Link>
                        </li>
                        <li>
                            <Link href="/#" className="hover:text-red-500 transition ease-in-out">Menu</Link>
                        </li>
                        <li>
                            <Link href="/#" className="hover:text-red-500 transition ease-in-out">News</Link>
                        </li>
                        <li>
                            <Link href="/#" className="hover:text-red-500 transition ease-in-out">About Us</Link>
                        </li>
                    </ul>

                    {/* Mobile-only button */}
                    <div className="lg:hidden mt-4">
                        <a
                            href="#"
                            className={`${chewy.className} block text-center bg-red-dark text-white py-2 px-4 rounded-md`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Reservation
                        </a>
                    </div>
                </div>

                {/* Desktop-only button */}
                <div className="hidden lg:block">
                    <a
                        href="#"
                        className={`${chewy.className} bg-red-dark text-white py-2 px-4 rounded-md font-bold`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Reservation
                    </a>
                </div>
            </nav>
        </section>
    );
}
