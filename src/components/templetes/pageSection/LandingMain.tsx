"use client";
import React, { useEffect } from 'react';
import useLogin from '@/components/customHooks/useLogin';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/types/typs';
import MainContainer from '../MainContainer/MainContainer';
import RoomsCard from '../card/RoomsCard';
import HeadingLarge from '../text/HeadingLarge';
import { AppwriteServices } from '@/components/config/appwrite';
import { getRooms } from '@/components/store/roomsServices';
import { AppDispatch } from '@/components/store/store';
import HeadingSmall from '../text/HeadingSmall';

const LandingMain = () => {
    const loading = useSelector((state: RootState) => state.auth.loading);
    const Allrooms = useSelector((state: RootState) => state.rooms.rooms);
    const fetchCurrentUser = useSelector((state: RootState) => state.auth.isAuthenticated);
    const { doFetchCurrentUser } = useLogin();
    const dispatch = useDispatch<AppDispatch>();

    const fetchRooms = async () => {
        try {
            return await dispatch(getRooms());
        } catch (error) {
            return console.error("Error fetching rooms:", error);
        }
    };

    useEffect(() => {
        doFetchCurrentUser();
        fetchRooms();
    }, []);

    return (
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <HeadingLarge fontFamily='font-bold' color='color-primary' padding='p-2' textAlign='text-center' fontSize='text-3xl'>
                Available Rooms
            </HeadingLarge>
            <MainContainer display="flex" justifyContent="justify-center" flexDirection='flex-col'>
                {loading ? (
                    <div>Loading...</div>
                ) : !fetchCurrentUser ? (
                    <HeadingSmall >Please login to see your rooms</HeadingSmall>
                ) : (
                    <>
                        {Allrooms.length > 0 ? (
                            Allrooms.map((room: any) => <RoomsCard key={room.$id} room={room} />)
                        ) : (
                            <h3>No rooms available at the moment</h3>
                        )}
                    </>
                )}
            </MainContainer>

        </main>
    );
};

export default LandingMain;