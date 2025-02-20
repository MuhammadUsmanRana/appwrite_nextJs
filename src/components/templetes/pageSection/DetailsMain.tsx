import React from 'react'
import RoomsData from '@/data/data.json';
import HeadingLarge from '../text/HeadingLarge';
import Link from 'next/link';
import Image from 'next/image';
import ParagraphSmall from '../paragraph/paragraphSmall';
import { FaChevronLeft } from "react-icons/fa"
import BookingForm from '../form/BookingForm';

const DetailsMain = ({ id }: { id: string }) => {
    const rooms = RoomsData.find((item) => item.$id === id)
    if (!rooms) {
        return <HeadingLarge>Room not found</HeadingLarge>
    }
    return (
        <>

            <div className="bg-white shadow rounded-lg p-6">
                <Link
                    href="/"
                    className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
                >
                    <FaChevronLeft className='inline mr-1' />
                    <ParagraphSmall margin="ml-2">Back to Rooms</ParagraphSmall>
                </Link>
                <div className="flex flex-col sm:flex-row sm:space-x-6">
                    <Image
                        src={rooms.image}
                        alt={rooms.name}
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
        </>
    )
}

export default DetailsMain