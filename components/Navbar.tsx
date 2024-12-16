"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
    MdNotifications,
    MdOutlineChat,
    MdPublic,
    MdSearch,
} from "react-icons/md";


export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="flex items-center justify-between bg-bgSoftColor rounded-xl p-5">
            <h1 className="text-textSoft font-bold capitalize">{pathname.split("/").pop()}</h1>
            <div className="flex items-center gap-5">
                <div className={"bg-[#2e374a] flex items-center gap-2.5 p-2.5 rounded-lg"}>
                    <MdSearch />
                    <input type="text" placeholder="Search..." className={"bg-transparent text-white outline-none"} />
                </div>
                <div className={"flex items-center gap-3"}>
                    <MdOutlineChat size={20} className="cursor-pointer" />
                    <MdNotifications size={20} className="cursor-pointer" />
                    <MdPublic size={20} className="cursor-pointer" />
                </div>
            </div>
        </nav>
    )
};