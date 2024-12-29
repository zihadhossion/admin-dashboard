"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import {
    MdNotifications,
    MdOutlineChat,
    MdPublic,
} from "react-icons/md";
import { IoArrowBackCircleOutline } from "react-icons/io5";


export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();

    const pathSegments = pathname.split("/").filter(Boolean);
    const curPath = pathSegments[pathSegments.length - 1];

    const handleBack = () => {
        router.back();
    };

    return (
        <nav className="flex items-center justify-between bg-bgSoftColor rounded-xl p-5">
            {pathSegments.length > 1 ? (
                <button onClick={handleBack}
                    className="text-textSoft hover:text-white transition"                >
                    <IoArrowBackCircleOutline size={30} />
                </button>
            ) : (
                <h1 className="text-textSoft font-bold capitalize">
                    {curPath ? curPath : "Home"}
                </h1>
            )}
            <div className={"flex items-center gap-5"}>
                <MdOutlineChat size={25} className="cursor-pointer" />
                <MdNotifications size={25} className="cursor-pointer" />
                <MdPublic size={25} className="cursor-pointer" />
            </div>
        </nav>
    )
};