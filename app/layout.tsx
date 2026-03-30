import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from './context/AuthContext';

const inter = Inter({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Smart Health Tracker",
    description: "Your personal smart health tracking dashboard",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthProvider>
                    <Navbar />
                    {children}
                    <ToastContainer />
                </AuthProvider>
            </body >
        </html >
    )
}
