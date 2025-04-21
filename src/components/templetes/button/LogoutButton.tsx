"use client";

import authAppwriteServices from '@/components/config/authAppwriteServices';
import { logout } from '@/components/store/authSlices';
import React from 'react'
import { useDispatch } from 'react-redux';

const LogoutButton = () => {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authAppwriteServices.logout().then(() => {
            dispatch(logout());
        }).catch((error) => {
            console.log("🚀 ~ file: LogoutButton.tsx ~ line 11 ~ logoutHandler ~ error", error
            );
        }
        )
    }
    return (
        <div className='w-full mx-auto px-4'>
            <button className='btn btn-primary w-full' onClick={void logoutHandler()}>Logout</button>
        </div>
    )
}

export default LogoutButton