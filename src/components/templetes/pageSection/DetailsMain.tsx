"use client";
import React, { useEffect } from 'react'
import HeadingLarge from '../text/HeadingLarge';
import Link from 'next/link';
import Image from 'next/image';
import ParagraphSmall from '../paragraph/paragraphSmall';
import { FaChevronLeft } from "react-icons/fa"
import BookingForm from '../form/BookingForm';
import { Routes } from '@/utils/routes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/types/typs';
import { getRooms } from '@/components/store/roomsServices';
import { AppDispatch } from '@/components/store/store';

const DetailsMain = ({ id }: { id: string }) => {
    const Allrooms = useSelector((state: RootState) => state.rooms.rooms);
    console.log("🚀 ~ DetailsMain ~ Allrooms:", Allrooms)
    const dispatch = useDispatch<AppDispatch>();
    const fetchRooms = async () => {
        try {
            return dispatch(getRooms());
        } catch (error) {
            return console.error("Error fetching rooms:", error);
        }
    };
    useEffect(() => {
        fetchRooms();
    }, []);
    const rooms = Allrooms.find((item: any) => item.$id === id);
    console.log("🚀 ~ DetailsMain ~ rooms:", rooms)
    return (
        <React.Fragment>
            {
                !rooms ? (
                    <div className='h-screen flex items-center justify-center'>
                        <HeadingLarge fontSize="text-2xl" padding='p-6' fontFamily='font-bold' textAlign='text-center'>Room not found</HeadingLarge>
                    </div>
                ) : (
                    <div className="bg-white shadow rounded-lg p-6">
                        <Link
                            href={Routes.home}
                            className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
                        >
                            <FaChevronLeft className='inline mr-1' />
                            <ParagraphSmall margin="ml-2">Back to Rooms</ParagraphSmall>
                        </Link>
                        <div className="flex flex-col sm:flex-row sm:space-x-6">
                            <Image
                                src={rooms.image || "/assest/images/meeting-room-1.jpg"}
                                alt={rooms.name || "default-alt"}
                                className="w-full sm:w-1/3 h-64 object-cover rounded-lg"
                                width={500}
                                height={500}
                            />
                            <div className="mt-4 sm:mt-0 sm:flex-1">
                                <p className="text-gray-600 mb-4">
                                    {rooms.description}
                                </p>
                                <ul className="space-y-2">
                                    <li>
                                        <span className="font-semibold text-gray-800">Size:</span> {rooms.sqft}
                                    </li>
                                    <li>
                                        <span className="font-semibold text-gray-800">Availability:</span> {rooms.availability}
                                    </li>
                                    <li>
                                        <span className="font-semibold text-gray-800">Price:</span> ${rooms.price_per_hour}/hour
                                    </li>
                                    <li>
                                        <span className="font-semibold text-gray-800">Address:</span> {rooms.address}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <BookingForm />
                    </div>
                )
            }

        </React.Fragment>
    )
}

export default DetailsMain;