import React from "react";

import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
} from "react-icons/md";
import MenuLink from "./MenuLink";
import Image from "next/image";

const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/",
                icon: <MdDashboard />,
            },
            {
                title: "Users",
                path: "/users",
                icon: <MdSupervisedUserCircle />,
            },
            {
                title: "Products",
                path: "/products",
                icon: <MdShoppingBag />,
            },
            {
                title: "Transactions",
                path: "/transactions",
                icon: <MdAttachMoney />,
            },
        ],
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: "/revenue",
                icon: <MdWork />,
            },
            {
                title: "Reports",
                path: "/reports",
                icon: <MdAnalytics />,
            },
            {
                title: "Teams",
                path: "/teams",
                icon: <MdPeople />,
            },
        ],
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/settings",
                icon: <MdOutlineSettings />,
            },
            {
                title: "Help",
                path: "/help",
                icon: <MdHelpCenter />,
            },
        ],
    },
];

export default function Sidebar() {
    return (
        <section className="sticky top-10">
            <article className="flex items-center gap-5 mb-5">
                <Image src={"/noavatar.png"} alt="user image" className="rounded-full object-cover" width={50} height={50} />
                <div className="flex flex-col">
                    {/* <span className="font-medium">{user.username}</span> */}
                    <span className="font-medium">Jhon Doe</span>
                    <span className="text-xs text-[#b7bac1]">Administrator</span>
                </div>
            </article>
            <ul>
                {menuItems.map(cat => (
                    <li key={cat.title}>
                        <p className="text-textSoft font-bold text-sm my-1">{cat.title}</p>
                        {cat.list.map(item => (
                            <MenuLink key={item.title} item={item} />
                        ))}
                    </li>
                ))}
            </ul>
            <button className="w-full flex items-center gap-2.5 p-5">
                <MdLogout />
                Logout
            </button>
        </section>
    )
};