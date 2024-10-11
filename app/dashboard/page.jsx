"use client"

import { useState } from 'react';
import Sidebar from '../_components/Sidebar';
import Navbar from '../_components/Navbar';
import TodaySales from '../_components/TodaySales';
import VisitorInsights from '../_components/VisitorInsights';
import TotalRevenue from '../_components/TotalRevenue';
import CustomerSatisfaction from '../_components/CustomerSatisfaction';
import TargetReality from '../_components/TargetReality';
import TopProducts from '../_components/TopProducts';
import SalesMappingBySector from '../_components/SalesMappingBySector';
import VolumeServiceLevel from '../_components/VolumeServiceLevel';

export default function DashboardPage() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="flex-1 flex flex-col">
                <Navbar toggleSidebar={toggleSidebar} />
                <main className="flex-1 py-6 px-4 md:py-6 bg-[#FAFBFC] overflow-y-auto space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        <div className="col-span-3">
                            <TodaySales />
                        </div>
                        <div className="col-span-2">
                            <VisitorInsights />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                        <div className="col-span-3">
                            <TotalRevenue />
                        </div>
                        <div className="col-span-2">
                            <CustomerSatisfaction />
                        </div>
                        <div className="col-span-2">
                            <TargetReality />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                        <div className="col-span-3">
                            <TopProducts />
                        </div>
                        <div className="col-span-2">
                            <SalesMappingBySector />
                        </div>
                        <div className="col-span-2">
                            <VolumeServiceLevel />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};