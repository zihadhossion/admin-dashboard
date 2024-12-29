import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex">
            <div className="flex-1 bg-bgSoftColor p-5 min-h-dvh">
                <Sidebar />
            </div>
            <div className="flex-[4] p-5">
                <Navbar />
                {children}
                <Footer />
            </div>
        </main>
    )
};