"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


export default function MenuLink({ item }: { item: any }) {
    const pathname = usePathname();

    return (
        <Link href={item.path} className={`flex items-center gap-2 px-5 py-2 mb-1.5 rounded-xl hover:bg-[#2e374a] ${pathname === item.path && "bg-[#2e374a]"}`}>
            {item.icon}
            {item.title}
        </Link>
    )
};