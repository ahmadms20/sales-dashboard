"use client"

import Link from 'next/link';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Sidebar({ isOpen, toggleSidebar }) {
    const pathname = usePathname();
    const menuItems = [
        { text: 'Dashboard', icon: <PieChartOutlineOutlinedIcon />, link: '/' },
        { text: 'Leaderboard', icon: <LeaderboardOutlinedIcon />, link: '/leaderboard' },
        { text: 'Orders', icon: <ShoppingCartOutlinedIcon />, link: '/orders' },
        { text: 'Products', icon: <LocalMallOutlinedIcon />, link: '/products' },
        { text: 'Sales Report', icon: <ShowChartOutlinedIcon />, link: '/sales-report' },
        { text: 'Messages', icon: <SmsOutlinedIcon />, link: '/messages' },
        { text: 'Settings', icon: <SettingsOutlinedIcon />, link: '/settings' },
        { text: 'Sign Out', icon: <LogoutOutlinedIcon />, link: '/sign-out' },
    ];

    return (
        <div
            className={`fixed inset-y-0 left-0 w-64 bg-white text-[#737791] transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0 lg:static lg:block z-50`}
        >
            <div className="p-4 flex justify-between items-center">
                <div className="flex justify-center items-center space-x-4 p-6 text-center">
                    <Image src="/logo.png" alt="Logo" width={40} height={40} />
                    <div className="text-xl text-[#151D48] font-bold">Dabang</div>
                </div>
                <button onClick={toggleSidebar} className="lg:hidden text-black">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <nav className="px-6">
                {menuItems.map((item, index) => {
                    const isActive = pathname === item.link;
                    return (
                        <Link href={item.link} key={index}>
                            <div
                                className={`flex items-center py-4 px-8 rounded-[16px] transition duration-300 ${
                                  isActive ? 'bg-[#5D5FEF] text-white' : 'hover:text-white hover:bg-[#5D5FEF]'
                                }`}
                            >
                                <span className="mr-4">{item.icon}</span>
                                <span className="mt-1">{item.text}</span>
                            </div>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
};