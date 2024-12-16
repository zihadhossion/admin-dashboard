import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <div className="bg-bgSoftColor flex-1 p-5 min-h-dvh">
                <Sidebar />
            </div>
            <div className="flex-[4] p-5">
                <Navbar />
                {children}
            </div>
        </div>
    )
};