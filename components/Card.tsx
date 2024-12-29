import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";
import { CardProps } from "@/types/dbtypes";

export default function Card({ item }: { item: CardProps }) {
    return (
        <article className="w-full bg-bgSoftColor hover:bg-[#2e374a] p-5 rounded-lg cursor-pointer transition">
            <div className="flex justify-evenly gap-5 my-5">
                <MdSupervisedUserCircle size={48} />
                <div>
                    <p className="mb-3">{item.title}</p>
                    <p className="text-2xl font-medium">{item.number}</p>
                </div>
            </div>
            <p className="text-sm font-light text-center">
                <span className={item.change > 0 ? "text-lime-400" : "text-red-400"}>
                    {item.change}%
                </span>{" "}
                {item.change > 0 ? "more" : "less"} than previous week
            </p>
        </article>
    )
};