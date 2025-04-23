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
import { RootState } from '@/types/typs'
import Swal from 'sweetalert2'

const Header = () => {
    const logindInUser = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter()

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    const handleLogoutUser = async () => {
        try {
            const logoutRes = await dispatch(logoutUser()) as { payload: { message: string }, error?: { message: string } };
            const payload = logoutRes.payload;
            if (logoutRes.error) {
                Toast.fire({
                    icon: "error",
                    title: logoutRes.error.message,
                });
            } else {
                Toast.fire({
                    icon: "success",
                    title: payload.message,
                });
                return router.push(Routes.login);
            };
        } catch (error) {
            console.error("Error logging out:", error);
            Toast.fire({
                icon: 'error',
                text: "An error occurred while logging out",
            });
        };
    };
    return (
        <header className="bg-gray-100">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link href={Routes.home} className='max-w-[40px]'>
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
                                    href={Routes.home}
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                                >
                                    Rooms
                                </Link>
                                {/* Logged In Only */}
                                {
                                    logindInUser?.isAuthenticated && (
                                        <>
                                            <Link
                                                href={Routes.bookings}
                                                className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                                            >
                                                Bookings
                                            </Link>
                                            <Link
                                                href={Routes.addRooms}
                                                className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                                            >
                                                Add Room
                                            </Link>
                                        </>
                                    )}
                            </div>
                        </div>
                    </div>
                    {/* Right Side Menu */}
                    <div className="ml-auto">
                        <div className="ml-4 flex items-center md:ml-6">
                            {/* Logged Out Only */}
                            {!logindInUser?.isAuthenticated && (
                                <>
                                    <Link
                                        href={Routes.login}
                                        className="mr-3"
                                    >
                                        <FaSignInAlt className='inline mr-1' /> Login
                                    </Link>
                                    <Link
                                        href={Routes.signup}
                                        className="mr-3"
                                    >
                                        <FaUser className='inline mr-1' /> Register
                                    </Link>
                                </>
                            )}
                            {logindInUser?.isAuthenticated && (
                                <>
                                    <Link
                                        href={Routes.myRooms}
                                        className="mr-3"
                                    >
                                        <FaBuilding className='inline mr-1' /> My Rooms
                                    </Link>
                                    <button
                                        onClick={() => { handleLogoutUser(); }}
                                        className="mx-3"
                                    >
                                        <FaSignOutAlt className='inline mr-1' /> Sign Out
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            {/* Mobile menu */}
            <div className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    <Link
                        href={Routes.home}
                        className="block rounded-md px-3 py-2 text-base font-medium"
                    >
                        Rooms
                    </Link>
                    {/* Logged In Only */}
                    {logindInUser?.isAuthenticated && (
                        <>
                            <Link
                                href={Routes.bookings}
                                className="block rounded-md px-3 py-2 text-base font-medium"
                            >
                                Bookings
                            </Link>
                            <Link
                                href={Routes.addRooms}
                                className="block rounded-md px-3 py-2 text-base font-medium"
                            >
                                Add Room
                            </Link>
                        </>
                    )}

                </div>
            </div>
        </header>
    )
}

export default Header;