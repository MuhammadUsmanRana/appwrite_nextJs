"use client";
import React, { useEffect } from 'react';
import useLogin from '@/components/customHooks/useLogin';
import { useSelector } from 'react-redux';
import { RootState } from '@/types/typs';
import MainContainer from '../MainContainer/MainContainer';
import rooms from "@/data/data.json";
import RoomsCard from '../card/RoomsCard';
import HeadingLarge from '../text/HeadingLarge';

const LandingMain = () => {
    const loading = useSelector((state: RootState) => state.auth.loading);
    const fetchCurrentUser = useSelector((state: RootState) => state.auth.isAuthenticated);
    const { doFetchCurrentUser } = useLogin();

    useEffect(() => {
        doFetchCurrentUser();
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
                    <div>Please login to see your rooms</div>
                ) : (
                    <>
                        {rooms.length > 0 ? (
                            rooms.map((room: any) => <RoomsCard key={room.$id} room={room} />)
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