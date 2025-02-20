"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { IMAGES } from '../../../public/assest'
import { FaUser, FaSignInAlt, FaSignOutAlt, FaBuilding } from 'react-icons/fa'

const Header = () => {
    return (
        <header className="bg-gray-100">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/">
                            <Image
                                src={IMAGES.HEADER_LOGO}
                                alt="Bookit"
                                width={40}
                                height={40}
                                className="object-cover"
                            />
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link
                                    href="/"
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                                >
                                    Rooms
                                </Link>
                                {/* Logged In Only */}
                                <Link
                                    href="/bookings.html"
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                                >
                                    Bookings
                                </Link>
                                <Link
                                    href="/rooms/add"
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                                >
                                    Add Room
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Right Side Menu */}
                    <div className="ml-auto">
                        <div className="ml-4 flex items-center md:ml-6">
                            {/* Logged Out Only */}
                            <Link
                                href="/login"
                                className="mr-3 text-gray-800 hover:text-gray-600"
                            >
                                <FaSignInAlt className='inline mr-1' /> Login
                            </Link>
                            <Link
                                href="/register"
                                className="mr-3 text-gray-800 hover:text-gray-600"
                            >
                                <FaUser className='inline mr-1' /> Register
                            </Link>
                            <Link
                                href="/rooms/my"
                                className="mr-3 text-gray-800 hover:text-gray-600"
                            >
                                <FaBuilding className='inline mr-1' /> My Rooms
                            </Link>
                            <Link
                                href="/login"
                                className="mx-3 text-gray-800 hover:text-gray-600"
                            >
                                <FaSignOutAlt className='inline mr-1' /> Sign Out
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Mobile menu */}
            <div className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    <Link
                        href="/"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                    >
                        Rooms
                    </Link>
                    {/* Logged In Only */}
                    <Link
                        href="/bookings"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                    >
                        Bookings
                    </Link>
                    <Link
                        href="/rooms/add"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                    >
                        Add Room
                    </Link>
                </div>
            </div>
        </header>

    )
}

export default Header

// "use client";
// import { RootState } from '@/types/typs';
// import { Routes } from '@/utils/routes';
// import Link from 'next/link';
// import React from 'react'
// import { useSelector } from 'react-redux';

// const Header = () => {
//     const logindInUser = useSelector((state: RootState) => state.auth);
//     console.log("🚀 ~ Header ~ logindInUser:", logindInUser)

//     const NavLinks = [
//         { name: 'Signin', url: Routes.login },
//         { name: 'SignUp', url: Routes.signup },
//         { name: 'Third Link', url: '#' },
//         { name: 'Fourth Link', url: '#' }
//     ]

//     return (
//         <header className="text-gray-600 body-font">
//             <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//                 <Link href={Routes.home} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
//                         viewBox="0 0 24 24"
//                     >
//                         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//                     </svg>
//                     <span className="ml-3 text-xl">Appwriteblog </span>
//                 </Link>
//                 <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//                     {
//                         NavLinks.map((link, index) => (
//                             <Link key={index} className="mr-5 hover:text-gray-900 cursor-pointer" href={link.url}>{link.name}</Link>
//                         ))
//                     }
//                 </nav>
//                 {
//                     logindInUser?.isAuthenticated && (
//                         <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
//                             logout
//                             <svg
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 className="w-4 h-4 ml-1"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <path d="M5 12h14M12 5l7 7-7 7" />
//                             </svg>
//                         </button>
//                     )
//                 }
//             </div>
//         </header>

//     )
// }

// export default Header;