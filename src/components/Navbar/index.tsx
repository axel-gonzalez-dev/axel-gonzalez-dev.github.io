'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* Import icons */
import moonIcon from './icons/moon.svg';

/* Import functions */
import { toggleDarkMode, toggleNavbar } from './navbar.utils';

/* Navbar links object */
const NavbarLinks = [
    {
        name: 'About',
        url: '/#about'
    },
    {
        name: 'Projects',
        url: '/#projects'
    },
    {
        name: 'Contact',
        url: '/#contact'
    }
]

const Navbar = () => {

    return (
        <>
            <nav className="bg-desert text-asphalt | dark:bg-asphalt dark:text-desert | fixed top-0 z-10 | w-full">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href='/' className="text-2xl font-semibold whitespace-nowrap">
                        Axel Gonzalez
                    </Link>

                    <button className="p-2 | md:hidden" onClick={toggleNavbar}>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium | flex flex-col md:flex-row md:space-x-8 | mt-4 md:mt-0">
                            {
                                NavbarLinks.map(({ name, url }: any, index) => (
                                    <li key={index}>
                                        <Link href={url} className="block | py-2 pl-3 md:p-0 | bg-desert dark:bg-asphalt | text-asphalt dark:text-desert md:hover:text-blue-700 | hover:bg-gray-400 dark:hover:bg-gray-700 | md:hover:bg-inherit dark:md:hover:bg-inherit">{name}</Link>
                                    </li>
                                ))
                            }
                            <li className="block | py-2 pl-3 md:p-0 | cursor-pointer | bg-desert dark:bg-asphalt | text-asphalt dark:text-desert | hover:bg-gray-400 dark:hover:bg-gray-700 | md:hover:bg-inherit dark:md:hover:bg-inherit" onClick={toggleDarkMode}>
                                <Image width={20} height={20} src={moonIcon} alt="Dark mode icon" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )

};

export default Navbar;