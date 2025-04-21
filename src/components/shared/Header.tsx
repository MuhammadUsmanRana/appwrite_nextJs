"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { IMAGES } from '../../../public/assest'
import { FaUser, FaSignInAlt, FaSignOutAlt, FaBuilding } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../store/store'
import { logoutUser } from '../store/authSlices'
import { Routes } from '@/utils/routes'
import { useRouter } from 'next/navigation'
import Cookies from "js-cookie";
import { RootState } from '@/types/typs'

const Header = () => {
    const logindInUser = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter()
    const handleLogoutUser = () => {
        dispatch(logoutUser())
        Cookies.remove("userId");
        Cookies.remove("providerUid");
        router.push(Routes.login);
    }
    return (
        <header className="bg-black shadow-md border-b border-gray-800">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-gray-200">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className='max-w-[40px]'>
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
                                    className="rounded-md px-3 py-2 text-sm font-medium hover:text-gray-600"
                                >
                                    Rooms
                                </Link>
                                {/* Logged In Only */}
                                {
                                    logindInUser?.isAuthenticated && (
                                        <>
                                            <Link
                                                href="/bookings"
                                                className="rounded-md px-3 py-2 text-sm font-medium hover:text-gray-600"
                                            >
                                                Bookings
                                            </Link>
                                            <Link
                                                href="/rooms/add"
                                                className="rounded-md px-3 py-2 text-sm font-medium hover:text-gray-600"
                                            >
                                                Add Room
                                            </Link>
                                        </>
                                    )}
                            </div>
                        </div>
                    </div>
                    {/* Right Side Menu */}
                    <div className="ml-auto text-gray-200">
                        <div className="ml-4 flex items-center md:ml-6">
                            {/* Logged Out Only */}
                            {
                                !logindInUser?.isAuthenticated ? (
                                    <>
                                        <Link
                                            href="/login"
                                            className="mr-3"
                                        >
                                            <FaSignInAlt className='inline mr-1 hover:text-gray-600' /> Login
                                        </Link>
                                        <Link
                                            href="/register"
                                            className="mr-3"
                                        >
                                            <FaUser className='inline mr-1 hover:text-gray-600' /> Register
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            href="/rooms/my"
                                            className="mr-3"
                                        >
                                            <FaBuilding className='inline mr-1 hover:text-gray-600' /> My Rooms
                                        </Link><Link
                                            href="/login"
                                            onClick={() => { handleLogoutUser() }}
                                            className="mx-3"
                                        >
                                            <FaSignOutAlt className='inline mr-1 hover:text-gray-600' /> Sign Out
                                        </Link>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </nav>
            {/* Mobile menu */}
            <div className="md:hidden text-gray-200">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    <Link
                        href="/"
                        className="block rounded-md px-3 py-2 text-base font-medium hover:text-gray-600"
                    >
                        Rooms
                    </Link>
                    {/* Logged In Only */}
                    {
                        logindInUser?.isAuthenticated && (
                            <>
                                <Link
                                    href="/bookings"
                                    className="block rounded-md px-3 py-2 text-base font-medium hover:text-gray-600"
                                >
                                    Bookings
                                </Link>
                                <Link
                                    href="/rooms/add"
                                    className="block rounded-md px-3 py-2 text-base font-medium hover:text-gray-600"
                                >
                                    Add Room
                                </Link>
                            </>
                        )
                    }

                </div>
            </div>
        </header>
    )
}

export default Header;