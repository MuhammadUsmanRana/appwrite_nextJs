"use client";

import React, { useEffect } from 'react';
import useLogin from '@/components/customHooks/useLogin';
import { useSelector } from 'react-redux';
import { RootState } from '@/types/typs';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import MainContainer from '../MainContainer/MainContainer';

const LandingMain = () => {
    // const dispatch = useDispatch();
    const loading = useSelector((state: RootState) => state.auth.loading);
    const { doFetchCurrentUser } = useLogin();

    useEffect(() => {
        doFetchCurrentUser();
    }, []);

    return (
        <>
            <Header />
            <MainContainer display='flex' justifyContent='justify-center' flexDirection='flex-col' >
                {loading ? <div>Loading...</div> : <div>Loaded</div>}
            </MainContainer>
            <Footer />
        </>
    );
};

export default LandingMain;