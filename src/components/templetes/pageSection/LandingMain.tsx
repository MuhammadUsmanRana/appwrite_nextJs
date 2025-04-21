"use client";
import React, { useEffect } from 'react';
// import useLogin from '@/components/customHooks/useLogin';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/types/typs';
import MainContainer from '../MainContainer/MainContainer';
import RoomsCard from '../card/RoomsCard';
import HeadingLarge from '../text/HeadingLarge';
import { getRooms } from '@/components/store/roomsSlices';
import { AppDispatch } from '@/components/store/store';
import HeadingSmall from '../text/HeadingSmall';
import { doFetchCurrentUser } from '@/components/store/authSlices';

const LandingMain = () => {
    const loading = useSelector((state: RootState) => state.rooms.loading);
    const Allrooms = useSelector((state: RootState) => state.rooms.rooms);
    const dispatch = useDispatch<AppDispatch>();

    const fetchRoomsWithAuth = async () => {
        try {
            await dispatch(getRooms());
            await dispatch(doFetchCurrentUser());
        } catch (error) {
            return console.error("Error fetching rooms:", error);
        }
    };

    useEffect(() => {
        fetchRoomsWithAuth();
    }, [dispatch]);

    return (
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <HeadingLarge fontFamily='font-bold' color='color-primary' padding='p-2' textAlign='text-center' fontSize='text-3xl'>
                Available Rooms
            </HeadingLarge>
            <MainContainer display="flex" justifyContent="justify-center" flexDirection='flex-col'>
                {loading ? (
                    <>
                        <div className="flex justify-center items-center h-screen">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                            <HeadingSmall>Loading...</HeadingSmall>
                        </div>
                    </>
                ) : (
                    <>
                        {Allrooms.length > 0 ? (
                            Allrooms.map((room: any) => <RoomsCard key={room.$id} room={room} />)
                        ) : (
                            <HeadingSmall >No rooms available at the moment</HeadingSmall>
                        )}
                    </>
                )}
            </MainContainer>

        </main>
    );
};

export default LandingMain;