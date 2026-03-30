"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
    isLoggedIn: boolean;
    isLoading: boolean;
    showPopup: boolean;
    login: () => void;
    logout: () => Promise<void>;
    openAuthPopup: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
    return ctx;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [showPopup, setShowPopup] = useState(false);

    // On mount: validate the session via httpOnly cookies (no localStorage needed)
    useEffect(() => {
        const checkSession = async () => {
            try {
                const response = await fetch("http://localhost:8000/auth/checklogin", {
                    method: "POST",
                    // Send cookies along with the request
                    credentials: "include",
                });
                const data = await response.json();

                if (data.ok) {
                    setIsLoggedIn(true);
                    setShowPopup(false);
                } else {
                    setIsLoggedIn(false);
                    setShowPopup(true);
                }
            } catch {
                // Network error — still require login
                setIsLoggedIn(false);
                setShowPopup(true);
            } finally {
                setIsLoading(false);
            }
        };

        checkSession();
    }, []);

    // Called after a successful login/register (cookies already set by backend)
    const login = () => {
        setIsLoggedIn(true);
        setShowPopup(false);
    };

    const logout = async () => {
        try {
            await fetch("http://localhost:8000/auth/logout", {
                method: "POST",
                credentials: "include", // send cookies so backend can clear them
            });
        } catch {
            // Even if the request fails, clear client state
        }
        setIsLoggedIn(false);
        setShowPopup(true);
    };

    const openAuthPopup = () => setShowPopup(true);

    return (
        <AuthContext.Provider value={{ isLoggedIn, isLoading, showPopup, login, logout, openAuthPopup }}>
            {children}
        </AuthContext.Provider>
    );
};
