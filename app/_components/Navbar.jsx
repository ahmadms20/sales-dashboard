"use client"

import { useState } from "react";
import SearchInput from "./SearchInput";
import SelectLanguange from "./SelectLanguange";
import Notification from "./Notification";
import Profile from "./Profile";

export default function Navbar({ toggleSidebar }) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="w-full h-20 bg-white shadow-md flex items-center justify-between px-6">
            <div className="text-xl lg:text-2xl font-semibold">Dashboard</div>
            <div className="flex items-center space-x-4">
                <div className="hidden md:block">
                    <SearchInput />
                </div>
                <div className="hidden sm:flex items-center space-x-4">
                    <SelectLanguange />
                    <Notification />
                    <Profile />
                </div>
                <button className="flex md:hidden items-center text-gray-600 hover:text-gray-900" onClick={toggleDropdown}>
                    <span className="mr-2">Menu</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                <button className="block lg:hidden text-gray-600 hover:text-gray-900" onClick={toggleSidebar}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            {isDropdownOpen && (
                <div className="absolute top-16 right-6 bg-white shadow-lg rounded-lg p-4 w-48 z-50 md:hidden">
                    <ul className="space-y-2">
                        <li>
                            <SelectLanguange />
                        </li>
                        <li className="flex justify-center">
                            <Notification />
                        </li>
                        <li>
                            <Profile />
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};