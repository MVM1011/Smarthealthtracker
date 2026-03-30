"use client";
import React from 'react';
import logo from '../../app/assets/logo1.png';
import { IoIosBody } from 'react-icons/io';
import './Navbar.css';
import Image from 'next/image';
import Link from 'next/link';
import AuthPopup from '../AuthPopup/AuthPopup';
import { useAuth } from '@/app/context/AuthContext';

const Navbar = () => {
    const { isLoggedIn, isLoading, showPopup, logout, openAuthPopup } = useAuth();

    return (
        <nav>
            <Image src={logo} alt="logo" />
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/profile'><IoIosBody /></Link>

            {isLoading ? (
                // While checking session, show nothing for auth button to avoid flicker
                <button disabled style={{ opacity: 0.4 }}>...</button>
            ) : isLoggedIn ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <button onClick={openAuthPopup}>Login</button>
            )}

            {/* Popup is ONLY shown when showPopup is true (controlled by AuthContext) */}
            {showPopup && <AuthPopup />}
        </nav>
    );
};

export default Navbar;
