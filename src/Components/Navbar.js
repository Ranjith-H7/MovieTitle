// Navbar.js

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-black/75 text-white z-50">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                <Link href="/" className="text-white text-xl font-bold">
                    Ranjith Blogs
                </Link>

                <button
                    className="lg:hidden text-white focus:outline-none"
                    aria-label="Toggle navigation"
                    onClick={() => {
                        const nav = document.getElementById('navbarNav');
                        nav.classList.toggle('hidden');
                    }}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>

                <div className="hidden lg:flex space-x-6" id="navbarNav">
                    <Link href="/" className="text-white hover:text-green-400">
                        Home
                    </Link>
                    <Link href="/Createblog" className="text-white hover:text-pink-400">
                        Create new Blog
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
